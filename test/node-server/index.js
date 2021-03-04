const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const net = require('net')

const app = new Koa()

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

app.use(static(
  path.join(__dirname, staticPath)
))


app.use(async (ctx) => {
  ctx.body = 'hello world'
})

const getCanUsePort = (app, port) => {
  return new Promise((resolve, reject) => {
    let server = net.createServer().listen(port)
    server.on('listening', function () {
      server.close()
      resolve(port)
    });
    server.on('error', function (err) {
      if (err.code == 'EADDRINUSE') {
        resolve(getCanUsePort(app, port + 1))
      }
    })
  })
}

getCanUsePort(app, 3100)
  .then(port => {
    app.listen(port, () => {
      console.log(`demo] static-use-middleware is starting at port ${port}`)
    })
  })