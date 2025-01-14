const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const myBodyParser = require('./plugins/my-bodyParser')

const app = new Koa()
const staticPath = './static'

app.use(static(
  path.join(__dirname, staticPath)
))

// app.use(bodyParser())
// app.use(async (ctx, next) => {
//   // the parsed body will store in ctx.request.body
//   // if nothing was parsed, body will be an empty object （{}）
//   ctx.body = ctx.request.body
//   await next()
// })

app.use(myBodyParser)

app.use(async (ctx) => {
  if (ctx.url == '/') {
    if (ctx.req.method === 'GET') {
      ctx.body = '/: hello world'
    } else {
      ctx.body = JSON.stringify(ctx.body)
    }
  } else {
    ctx.body = '404: hello world'
  }
})

app.listen(3333, () => {
  console.log(`demo] static-use-middleware is starting at port 3333`)
})