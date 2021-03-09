---
meta:
  - name: keywords
    content: node,koa2,中间件
  - name: description
    content: 基于nodejs/koa搭建web服务器 -- 中间件开发与使用
---

# koa2服务端-中间件

## 简介

洋葱模型

```js
const Koa = require('Koa');
const app = new Koa();

// 最外层的中间件
app.use(async (ctx, next) => {
    await console.log(`第 1 个执行`);
    await next();
    await console.log(`第 6 个执行`);
});

// 第二层中间件
app.use(async (ctx, next) => {
    await console.log(`第 2 个执行`);
    await next();
    await console.log(`第 5 个执行`);
});

// 最里层的中间件
app.use(async (ctx, next) => {
    await console.log(`第 3 个执行`);
    ctx.body = "Hello world.";
    await console.log(`第 4 个执行`);
});

app.listen(3000, () => {
    console.log(`Server port is 3000.`);
})
```


### generator中间件开发


### async中间件开发

```
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

## 中间件开发

* logger

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

* token验证

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


## 中间件使用

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

* koa-router
* koa-static
* koa-bodyparser