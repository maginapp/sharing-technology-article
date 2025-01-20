const spawn = async (...args) => {
  const { spawn } = require('child_process')
  return new Promise(resolve => {
      const proc = spawn(...args) // 在node.js中执行shell一般用spawn，实现从主进程的输出流连通到子进程的输出流
      proc.stdout.pipe(process.stdout) // 子进程正常流搭到主进程的正常流
      proc.stderr.pipe(process.stderr) // 子进程错误流插到主进程的错误流
      proc.on('close', () => {
          resolve()
      })
  })
}


// await spawn('npm', ['install'], { cwd: `./` }) // cwd 执行命令的目录


spawn('rmdir', ['ss'], { cwd: `./s` }) // cwd 执行命令的目录

