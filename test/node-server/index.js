const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const net = require('net')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')()

const app = new Koa()

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

app.use(static(
  path.join(__dirname, staticPath)
))

// 无await 报错 UnhandledPromiseRejectionWarning: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
// app.use(async (ctx , next) => {
//   await next()
//   console.log(2, ctx.request.body)
// })

// app.use(async (ctx , next) => {
//   console.log(0, ctx.request.body)
//   await next()
//   console.log(1, ctx.request.body)
// })


app.use(bodyParser())

app.use(async (ctx, next) => {
  // the parsed body will store in ctx.request.body
  // if nothing was parsed, body will be an empty object （{}）
  ctx.body = ctx.request.body
  await next()
})

// router
router.get('/hello/:name', async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`
  if (name === 'a') {
    ctx.response.body = `just, ${name}!`
  }
})

// 常用
router
  .get('/home', async (ctx, next) => {
    ctx.response.body = '<h1>get Home</h1>'
  })
  .post('/home', function (ctx, next) {
    ctx.response.body = '<h1>post Home</h1>'
  })
  .put('/home/:id', function (ctx, next) {
    ctx.response.body = '<h1>put Home</h1>'
  })
  .del('/home/:id', function (ctx, next) {
    ctx.response.body = '<h1>del Home</h1>'
  })
  .all('/home/:id', function (ctx, next) {
    console.log('home all')
  })
  .all('/user/:id', function (ctx, next) {
    ctx.response.body = `<h1>all user ${ctx.params.id}</h1>`
  })

// prefix前缀
const testRouter = require('koa-router')({
  prefix: '/test'
});

testRouter.get('/', function (ctx, next) {
  ctx.response.body = '<h1>test</h1>'
})

// 重定向
router.redirect('/my-test', '/test')
router.all('/redirect', function (ctx) {
  // get
  ctx.redirect('/home')
  ctx.status = 301
})


// 嵌套路由
const nest1 = require('koa-router')()
const nest = require('koa-router')()
nest1.get('/', async ( ctx )=>{
  let html = `
    <ul>
      <li><a href="/nest/helloworld">/nest/helloworld</a></li>
      <li><a href="/nest/404">/nest/404</a></li>
    </ul>
  `
  ctx.body = html
})
// 子路由2
nest.all('/404', async ( ctx )=>{
  ctx.body = 'nest: 404 page!'
}).get('/helloworld', async ( ctx )=>{
  ctx.body = 'nest: helloworld page!'
})
router.use('/nest-1', nest1.routes(), nest1.allowedMethods())
router.use('/nest', nest.routes(), nest.allowedMethods())

// 嵌套路由2

var author = require('koa-router')()
var article = require('koa-router')()

article.get('/', function (ctx, next) {
  ctx.body = 'article: / page!'
})
article.get('/:id', function (ctx, next) {
  ctx.body = 'article: / page!' + JSON.stringify(ctx.params)
})
author.use('/author/:name/article', article.routes(), article.allowedMethods());

// responds to "/author/123/article" and "/author/123/article/123"

app
  .use(router.routes())
  .use(testRouter.routes())
  .use(author.routes())
  .use(router.allowedMethods())


app.use(async (ctx) => {
  if (ctx.url === '/') {
    ctx.cookies.set(
      'cid',
      'hello world', {
        domain: 'localhost', // 写cookie所在的域名
        path: '', // 写cookie所在的路径
        maxAge: 10 * 60 * 1000, // cookie有效时长
        expires: new Date(new Date() + 1000 * 3600 * 24 * 7), // cookie失效时间
        httpOnly: false, // 是否只用于http请求中获取
        overwrite: true // 是否允许重写
      }
    )
    ctx.body = 'index: hello world'
  } else {
    ctx.body = '404: hello world'
  }
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


// const fileRouter = require('./router')
// console.log(fileRouter.routes().router.stack) 