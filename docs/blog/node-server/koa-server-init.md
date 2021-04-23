---
meta:
  - name: keywords
    content: node,koa2,koa-static
  - name: description
    content: 基于nodejs/koa搭建web服务器
---

# node-server入门搭建

## 说明

Node.js优点：

* 采用事件驱动、异步编程，为网络服务而设计，Javascript的匿名函数和闭包特性非常适合事件驱动、异步编程
* Node.js非阻塞模式的IO处理给Node.js带来在相对低系统资源耗用下的高性能与出众的负载能力，非常适合用作依赖其它IO资源的中间层服务。
* 处理高并发场景性能更高，Node.js轻量高效，适合有很高的流量，但所需的服务器端逻辑和处理不一定很多
* 函数式编程非常适合写异步回调链

Node.js缺点：

* 可靠性低
* 单进程，单线程，只支持单核CPU，不能充分的利用多核CPU服务器， 一旦这个进程崩掉，那么整个web服务就崩掉了
* Debug 很困难，没有 stack trace，出了问题很难查找问题的原因。
* 如果设计不好，很容易让代码充满 callback，需要定期 review 和重构来加以避免

[更多](#详细说明)


## 环境准备


```bash
npm i koa -S
npm i koa-static -S
npm i koa-bodyparser -S
```

## 静态服务器启动

```js
const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const staticPath = './static'

app.use(static(
  path.join(__dirname, staticPath)
))

app.use(bodyParser())
app.use(async (ctx, next) => {
  // the parsed body will store in ctx.request.body
  // if nothing was parsed, body will be an empty object （{}）
  ctx.body = ctx.request.body
  await next()
})

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
```

## 动态获取端口

```js
...

const net = require('net')

...

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

getCanUsePort(app, 3000)
  .then(port => {
    app.listen(port, () => {
      console.log(`demo] static-use-middleware is starting at port ${port}`)
    })
  })
```

## 详细说明



Node表现出众的典型示例包括：

* RESTful API 
提供RESTful API的Web服务接收几个参数，解析它们，组合一个响应，并返回一个响应（通常是较少的文本）给用户。这是适合Node的理想情况，因为您可以构建它来处理数万条连接。它仍然不需要大量逻辑；它本质上只是从某个数据库中查找一些值并将它们组成一个响应。由于响应是少量文本，入站请求也是少量的文本，因此流量不高，一台机器甚至也可以处理最繁忙的公司的API需求。

* Twitter队列
想像一下像Twitter这样的公司，它必须接收tweets并将其写入数据库。实际上，每秒几乎有数千条tweet达到，数据库不可能及时处理高峰时段所需的写入数量。Node成为这个问题的解决方案的重要一环。如您所见，Node能处理数万条入站tweet。它能快速而又轻松地将它们写入一个内存排队机制（例如memcached），另一个单独进程可以从那里将它们写入数据库。Node在这里的角色是迅速收集tweet，并将这个信息传递给另一个负责写入的进程。想象一下另一种设计（常规PHP服务器会自己尝试处理对数据库本身的写入）：每个tweet都会在写入数据库时导致一个短暂的延迟，因为数据库调用正在阻塞通道。由于数据库延迟，一台这样设计的机器每秒可能只能处理2000条入站tweet。每秒处理100万条tweet则需要500个服务器。相反，Node能处理每个连接而不会阻塞通道，从而能够捕获尽可能多的tweets。一个能处理50000条tweet的Node机器仅需20台服务器即可。

* 电子游戏统计数据
如果您在线玩过《使命召唤》这款游戏，当您查看游戏统计数据时，就会立即意识到一个问题：要生成那种级别的统计数据，必须跟踪海量信息。这样，如果有数百万玩家同时在线玩游戏，而且他们处于游戏中的不同位置，那么很快就会生成海量信息。Node是这种场景的一种很好的解决方案，因为它能采集游戏生成的数据，对数据进行最少的合并，然后对数据进行排队，以便将它们写入数据库。使用整个服务器来跟踪玩家在游戏中发射了多少子弹看起来很愚蠢，如果您使用Apache这样的服务器，可能会有一些有用的限制；但相反，如果您专门使用一个服务器来跟踪一个游戏的所有统计数据，就像使用运行Node的服务器所做的那样，那看起来似乎是一种明智之举。


总的来说，Node.js的应用场景

* 适合
  * JSON APIs——构建一个Rest/JSON API服务，Node.js可以充分发挥其非阻塞IO模型以及JavaScript对JSON的功能支持(如JSON.stringfy函数)
  * 单页面、多Ajax请求应用——如Gmail，前端有大量的异步请求，需要服务后端有极高的响应速度
  * 基于Node.js开发Unix命令行工具——Node.js可以大量生产子进程，并以流的方式输出，这使得它非常适合做Unix命令行工具
  * 流式数据——传统的Web应用，通常会将HTTP请求和响应看成是原子事件。而Node.js会充分利用流式数据这个特点，构建非常酷的应用。如实时文件上传系统transloadit
  * 准实时应用系统——如聊天系统、微博系统，但Javascript是有垃圾回收机制的，这就意味着，系统的响应时间是不平滑的(GC垃圾回收会导致系统这一时刻停止工作)。如果想要构建硬实时应用系统，Erlang是个不错的选择

* 不适合
  * CPU使用率较重、IO使用率较轻的应用——如视频编码、人工智能等，Node.js的优势无法发挥
  * 简单Web应用——此类应用的特点是，流量低、物理架构简单，Node.js无法提供像Ruby的Rails或者Python的Django这样强大的框架
  * NoSQL + Node.js——如果仅仅是为了追求时髦，且自己对这两门技术还未深入理解的情况下，不要冒险将业务系统搭建在这两个漂亮的名词上，建议使用MySQL之类的传统数据库

逐步启动Node.js的方式
  
* 构建一个简单的原型——花一周时间构建系统某一部分的原型是非常值得的，同时也很容易和老板在某一点达成一致，等到系统真的在某一部分应用了Node.js，就是打开局面的时候
* 寻找开发者——首先JavaScript语言的普及度很高，一般公司都不乏Web前端工程师，而此类工程师的学习门槛也非常低。这就意味着Node.js很容易招人，或者公司就隐藏了一些高手
* 强大的社区支持——Node.js社区非常活跃，吸引很多优秀的工程师，这就意味着公司可以很容易从社区得到免费或者付费的支持
* 系统性能考虑——JavaScript引擎Google V8，加之原生异步IO模型，使得Node.js在性能的表现非常出色，处理数以千计的并发请求非常轻松
* 专业公司的支持——使用开源技术的最大问题是，原作者不承诺对其产品进行技术支持或者质量保证。现在Node.js已经得到Joyent公司的赞助，这就保证了未来Node.js的发展是可持续性的

## 常用koa插件

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

> koa-body 
> app.use(koaBody({ multipart: true }))
> 
> koa-bodyparser
>
> koa-router 路由
>
> koa-static 静态资源
>


## 引用

[知乎： 使用 Node.js 的优势和劣势都有哪些？](https://www.zhihu.com/question/19653241)

[作者：FengqiAsia](https://www.zhihu.com/question/19653241/answer/15993549)

[廖雪峰：Node.js](https://www.liaoxuefeng.com/wiki/1022910821149312/1023025235359040)
