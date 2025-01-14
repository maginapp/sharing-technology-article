// 实现文件锁模块
// 用途：多进程同时操作某个资源（例如写入一个文件），防止交叉使用造成不可预测后果
// 效果：在同一时间，只有一个进程可以使用

// 方法：os（强制锁/协商锁）、文件锁（本质上是一种约定）
// 实现文件锁机制，其实就是创建一个 锁文件 ，创建过程是原子性的

// npm：https://www.npmjs.com/package/lockfile

const fs = require('fs')

// 方法1: 使用 x flag
// 告诉操作系统这个文件应该以独占模式打开（ O_EXCL ）
// 但不是所有的os都支持 O_EXCL
function method1() {
    // fs.open('config.lock', 'wx', (err) => {
    //     if (err) return;
    // })
    
    // 写入pid，方便排查最后使用的进程
    fs.writeFile(
        'config.lock', 
        process.pid, 
        {
            flag: 'wx'
        },
        err => {
            if (err) return console.err(err)
        }
    )
}

// 方法2: mkdir + file
// 因为mkdir操作系统都支持，且存在时，创建会报错。效果和 O_EXCL 一样
// 但是可能会有别的进程删除folder/修改权限。
// 所以应该将其封装程模块，开发者对 lockDir 是无感知的。

let hasLock = false
const lockDir = `/private/tmp/${Date.now()}.lock`

function lock(callback) {
    if (hasLock) return callback(null)

    fs.mkdir(lockDir, err => {
        if (err) return callback(err)
        // 通过文件名记录pid
        fs.writeFile(lockDir + '/' + process.pid, err => {
            if (err) console.error(err)
            hasLock = true
            callback(null)
        })
    })
}

function unlock(callback) {
    if (!hasLock) return callback(null)

    fs.unlink(lockDir + '/' + process.pid, err => {
        if (err) return callback(err)
        fs.rmdir(lockDir, err => {
            if (err) return callback(err)
            hasLock = false
            callback(null)
        })
    })
}

// 退出的时候，强制删除锁
process.on('exit', function() {
    unlock(() => {})
})

module.exports.lock = lock
module.exports.unlock = unlock  