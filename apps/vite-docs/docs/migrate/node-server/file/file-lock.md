---
meta:
  - name: keywords
    content: node,crawler,issues
  - name: description
    content: node文件锁
---

# nodejs文件锁

> 多线程（或多进程）同时操作某个资源（例如写入一个文件），交叉使用可能会造成不可预测后果。

文件加锁是多线程或多进程开发时，确保文件资源不被并发读写所污染的有效措施

## fs.open

node提供了`open`确保在同时操作文件数据的一致性。

open调用时，第二个参数添加`x`标识（如`wx`, `rs`）实现隔离操作，如果已存在该路径，就会报错

```js
fs.open('./open-file.loc', 'wx', function(err, fd) {
  if (err) return console.error(err;
  //这里开始可以放心的读写文件
  fs.writeFile('./open-file', 'test1' ,(err) => {
    console.log(err)
    // 关闭open操作
    fs.closeSync(fd)
    // 清除标识锁文件
    fs.unlinkSync('./open-file.loc')
  })
});
```

> 利用隔离标志实现文件的原子操作有一个缺陷，并不是所有的平台都会支持该标志，例如要读取网络硬盘上的文件，那么该标志很可能会被忽略掉。因此使用隔离标志读取跨平台的文件时，隔离作用很可能会失效。

## fs.mkdir + fs.writeFile

`mkdir`是标准的POSIX系统调用，根据标准，它的实现必须是[原子性](/sharing/backup/concurrent-properties.html#_2-原子性)的。任何支持该调用的平台都必须保证它执行的原子性，利用这个特性来构建文件锁的话，代码就能得到很好的跨平台支持，即使是读取网络文件，也能保证文件的一致性不会被破坏

### lockFile

封装`lockFile.js`，操作时无需关注`lock`操作

```js
const fs = require('fs')
// 记录文件lock状态与线程id
let lockMap = new Map()
// 加锁
function lock(fileName, callback) {
    let lockDir = `${fileName}.lock`
    if (lockMap.get(fileName)) return callback(null)
    fs.mkdir(lockDir, err => {
        if (err) return callback(err)
        // 通过文件名记录pid
        fs.writeFile(lockDir + '/' + process.pid, '', err => {
            if (err) console.error(err)
            lockMap.set(fileName, process.pid)
            callback(null)
        })
    })
}

// 解锁
function unlock(fileName, callback) {
    if (!lockMap.get(fileName)) return callback(null)
    let lockDir = `${fileName}.lock`
    fs.unlink(lockDir + '/' + process.pid, err => {
        if (err) return callback(err)
        fs.rmdir(lockDir, err => {
            if (err) return callback(err)
            lockMap.delete(fileName)
            callback(null)
        })
    })
}

// 同步解锁
function unlockSync(fileName, callback) {
    if (!lockMap.get(fileName)) return callback(null)
    let lockDir = `${fileName}.lock`
    try {
        fs.unlinkSync(lockDir + '/' + process.pid)
        fs.rmdirSync(lockDir)
        lockMap.delete(fileName)
        callback(null)
    } catch (err){
        callback(err)
    }
}

// 退出的时候，同步强制删除锁
process.on('exit', function() {
    lockMap.forEach((pid, fileName) => {
        if (process.pid === pid) unlockSync(fileName, (err) => {console.log(err)})
    })
})

module.exports.lock = lock
module.exports.unlock = unlock
```

### usage

```js
var lockFile = require('./lockFile');
const fileName = 'test'
lockFile.lock(fileName, function(err) {
    if (err) throw err;
    /*  
      功能代码，异步操作unlock需要写入回调中
    */ 
    lockFile.unlock(fileName, function() {});
})
```

## 文献参考

* [NodeJS研究笔记，利用目录来实现跨平台文件锁](https://blog.csdn.net/tyler_download/article/details/51442496)
* [nodejs-fs模块](https://nodejs.org/dist/latest-v14.x/docs/api/fs.htm)
