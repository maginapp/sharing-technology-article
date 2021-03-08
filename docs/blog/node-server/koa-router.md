# koa-router

##  基础说明

```js
const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add url-route:
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});

// add router middleware:
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');
```

## koa原生写法

```js
app.use(async (ctx) => {
  if (ctx.url === '/koa-base') {
    ctx.body = 'koa-base: hello world'
  } else {
    ctx.body = '404: hello world'
  }
})
```


## 使用方法

* Methods

```js
const router = require('koa-router')()
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
```

* prefix前缀

```js
const testRouter = require('koa-router')({
  prefix: '/test'
});

testRouter.get('/', function (ctx, next) {
  ctx.response.body = '<h1>test</h1>';
})
```

* 重定向
```js
router.redirect('/my-test', '/test')
router.all('/redirect', function (ctx) {
  // get
  ctx.redirect('/home')
  ctx.status = 301
})
```

* 子路由/嵌套路径

```js
// 1
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

// 2
var author = require('koa-router')()
var article = require('koa-router')()

article.get('/', function (ctx, next) {
  ctx.body = 'article: / page!'
})
article.get('/:id', function (ctx, next) {
  ctx.body = 'article: / page!' + JSON.stringify(ctx.params)
})
author.use('/author/:name/article', article.routes(), article.allowedMethods());
/*
responds to "/author/123/article" article: / page! 
responds to  "/author/123/article/123" article: / page!{
    "name": "123",
    "id": "ss"
}
*/
```

router引入

```js
app
  .use(author.routes())
  .use(router.routes())
  .use(testRouter.routes())
  .use(router.allowedMethods())
```


## 文件架构

```
├── router
│   ├── index.js
│   ├── user.js
│   ├── home.js
├── controller
│   ├── index.js
│   ├── user.js
│   ├── home.js
└── index.js
```

```js
// router/user.js
router.get('/:id', userController)

// router/index.js
const Router = require('koa-router')
const router = new Router()
router.use('/user', user.routers(), router.allowedMethods())
router.use('/home', home.routers(), home.allowedMethods())

// index.js
consr router = require('./router')
app
  .use(router.routers())
  .use(router.allowedMethods())
// app.use(router.routes(), router.allowedMethods());
```

自动生成入口文件写法
```js
// router/index.js
const router = require('koa-router')();
const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(__dirname);
/*
 /^[^\.].*\.js/ 该正则匹配以.js末尾的文件，包括比如： a.js，
 /xx/yy/x.js 类似的多个目录文件，只要以 .js 末尾的即可。
 /^[^\.].*\.js$/.test('a.js'); // true
 /^[^\.].*\.js$/.test('/xx/yy/a.js'); // true
*/
files.filter(file => ~file.search(/^[^\.].*\.js$/)).forEach(file => {
  // 获取文件名 比如 xx.js 这样的，截取 file.substr(0, file.length - 3); 因为 .js 长度为3
  const fileName = file.substr(0, file.length - 3);
  const fileEntity = require(path.join(__dirname, file));
  if (fileName !== 'index') {
    router.use(`/${fileName}`, fileEntity.routes(), fileEntity.allowedMethods());
  }
})

module.exports = router
```

## 引用

[用Koa 2搭建服务器](https://mobilesite.github.io/2017/04/29/develop-backend-service-with-koa2/)
[路由设计](https://chenshenhai.github.io/koa2-note/note/project/route.html)