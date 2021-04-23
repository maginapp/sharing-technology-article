---
meta:
  - name: keywords
    content: node,koa2,中间件
  - name: description
    content: 基于nodejs/koa搭建web服务器 -- 中间件开发与使用
---

# koa2服务端-中间件

## http处理流程

* http请求
  * 路由操作
  * 权限处理
  * 数据安全
* 业务操作
  * 请求数据解析
  * 数据库操作
  * 数据处理
* http响应
  * 响应操作

## koa洋葱模型

### 简介

基于 洋葱模型 的HTTP中间件处理流程

* 中间件开始执行
* 中间件生命周期中
  * 前置操作
  * 等待其他中间件执行完成
  * 后置操作
* 中间件执行完成

### 示例

```js
const Koa = require('Koa');
const app = new Koa();

// 最外层的中间件
app.use(async (ctx, next) => {
    console.log(`第 1 个执行`);
    await next();
    console.log(`第 6 个执行`);
});

// 第二层中间件
app.use(async (ctx, next) => {
    console.log(`第 2 个执行`);
    await next();
    console.log(`第 5 个执行`);
});

// 最里层的中间件
app.use(async (ctx, next) => {
    console.log(`第 3 个执行`);
    ctx.body = "Hello world.";
    console.log(`第 4 个执行`);
});

app.listen(3000, () => {
    console.log(`Server port is 3000.`);
})
```

### async中间件开发

```js
function log( ctx ) {
    console.log( ctx.method, ctx.header.host + ctx.url )
}

module.exports = function () {
  return async function ( ctx, next ) {
    log(ctx);
    await next()
  }
}
```

## 中间件开发示例

### logger

放置于中间件最上层

``` js
module.exports = (options) => async (ctx, next) {
  try {
    const date = new Date()
    // 下一个中间件
    await next()
    const endDate = new Date()
    // trace
    logger4.trace(`${date}: ${ctx.url}: ${endDate - date}`)
  } catch (err) {
    console.log(err)
    // 记录err
    logger4.error(`${date}: ${ctx.url}, ${err}`)
  }
}

```

### token验证

``` js
module.exports = (options) => async (ctx, next) {
  try {
    // 获取 token
    const token = ctx.header.authorization
    if (token) {
      try {
          // 验证 token
          await verify(token)
      } catch (err) {
        console.log(err)
      }
    }
    // 下一个中间件
    await next()
  } catch (err) {
    console.log(err)
  }
}

```


## 中间件使用示例

```js
const Koa = require('Koa');
const app = new Koa();
const logger = require('./logger')
const token = require('./token')

app.use(logger())
app.use(token())

// async 函数
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// 普通函数
app.use((ctx, next) => {
  const start = Date.now();
  return next().then(() => {
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });
});


app.listen(3000, () => {
    console.log(`Server port is 3000.`);
})
```

## 常用中间件

* [koa-router](#koa-router)
* [koa-static](#koa-static)
* [koa-bodyparser](#koa-bodyparser)
* [koa-body](#koa-body)

### koa-static

静态资源处理

```js
const app = new Koa()
const koaStatic = require('koa-static')
app.use(koaStatic(
  path.join(__dirname, staticPath)
))
```

### koa-bodyparser

读取请求体数据，`ctx.request.body`

```js
const koaBodyParser = require('koa-bodyparser')
// 设置ctx.request.body
app.use(koaBodyParser())
```

### koa-body

请求中文件资源处理，`ctx.request.files`

```js
const koaBody = require('koa-body')
app.use(koaBody({ multipart: true }))
```

### koa-router

路由处理

```js
const router = require('koa-router')()
router.get('/', cb)
router.use(`/person`, person.routes(), person.allowedMethods())
app.use(router.routes())
```


