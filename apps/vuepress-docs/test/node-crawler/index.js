const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const koaBody = require('koa-body')
const getCanUsePort = require('./../utils/getCanUsePort')
const router = require('koa-router')()

const app = new Koa()
// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'
app.use(static(
  path.join(__dirname, staticPath)
))
app.use(koaBody({ multipart: true }))
app.use(bodyParser())
app.use(async (ctx, next) => {
  ctx.body = ctx.request.body
  await next()
})

const fileRouter = require('./router')
app.use(fileRouter.routes())

app.use(async (ctx) => {
  if (ctx.url === '/') {
    ctx.body = 'node-crawler index: hello world'
  } else {
    ctx.body = 'node-crawler 404: hello world'
  }
})

getCanUsePort(app, 3100)
  .then(port => {
    app.listen(port, () => {
      console.log(`demo] static-use-middleware is starting at port ${port}`)
    })
  })
