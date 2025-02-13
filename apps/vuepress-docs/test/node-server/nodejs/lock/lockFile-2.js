const fs = require('fs')

// 记录文件lock状态与线程id
let hasLock = false

function lock(pageName, callback) {
    let lockDir = `${pageName}.lock`
    if (hasLock) return callback(null)
    fs.mkdir(lockDir, err => {
        if (err) return callback(err)
        // 通过文件名记录pid
        fs.writeFile(lockDir + '/' + process.pid, '', err => {
            if (err) console.error(err)
            hasLock = true
            callback(null)
        })
    })
}

function unlock(pageName, callback) {
    if (!hasLock) return callback(null)
    let lockDir = `${pageName}.lock`
    console.log(lockDir + '/' + process.pid)
    fs.unlink(lockDir + '/' + process.pid, err => {
        if (err) return callback(err)
        fs.rmdir(lockDir, err => {
            if (err) return callback(err)
            hasLock = false
            callback(null)
        })
    })
}

function unlockSync(pageName, callback) {
    if (!hasLock) return callback(null)
    let lockDir = `${pageName}.lock`
    try {
        fs.unlinkSync(lockDir + '/' + process.pid)
        hasLock = false
        callback(null)
    } catch (err){
        callback(err)
    }
}

// 退出的时候，同步强制删除锁
// process.on('exit', function() {
//     lockMap.forEach((pid, pageName) => {
//         if (process.pid === pid) unlock(pageName, () => {})
//     })
// })

module.exports.lock = lock
module.exports.unlock = unlock