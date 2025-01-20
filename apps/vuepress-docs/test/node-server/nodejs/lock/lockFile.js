// 实现文件锁模块
// 用途：多线程（或多进程）同时操作某个资源（例如写入一个文件），防止交叉使用造成不可预测后果
// 效果：在同一时间，只有一个进程可以使用


// 方法: mkdir + file
// 因为mkdir操作系统都支持，且存在时，创建会报错。效果和 O_EXCL 一样
// 但是可能会有别的进程删除folder/修改权限。
// 所以应该将其封装程模块，开发者对 lockDir 是无感知的。


const fs = require('fs')

// 记录文件lock状态与线程id
let lockMap = new Map()

function lock(pageName, callback) {
    let lockDir = `${pageName}.lock`
    if (lockMap.get(pageName)) return callback(null)
    fs.mkdir(lockDir, err => {
        if (err) return callback(err)
        // 通过文件名记录pid
        fs.writeFile(lockDir + '/' + process.pid, '', err => {
            if (err) console.error(err)
            lockMap.set(pageName, process.pid)
            callback(null)
        })
    })
}

function unlock(pageName, callback) {
    if (!lockMap.get(pageName)) return callback(null)
    let lockDir = `${pageName}.lock`
    fs.unlink(lockDir + '/' + process.pid, err => {
        if (err) return callback(err)
        fs.rmdir(lockDir, err => {
            if (err) return callback(err)
            lockMap.delete(pageName)
            callback(null)
        })
    })
}

function unlockSync(pageName, callback) {
    if (!lockMap.get(pageName)) return callback(null)
    let lockDir = `${pageName}.lock`
    try {
        fs.unlinkSync(lockDir + '/' + process.pid)
        fs.rmdirSync(lockDir)
        lockMap.delete(pageName)
        callback(null)
    } catch (err){
        callback(err)
    }
}

// 退出的时候，同步强制删除锁
process.on('exit', function() {
    lockMap.forEach((pid, pageName) => {
        if (process.pid === pid) unlock(pageName, () => {})
    })
})

module.exports.lock = lock
module.exports.unlock = unlock