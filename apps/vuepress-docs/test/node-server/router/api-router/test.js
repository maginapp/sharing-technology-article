const router = require('koa-router')()

router
  .get('/rive-get/index', async (ctx, next) => {
    // console.log(ctx.request)
    // console.log(ctx.query)
    // console.log(ctx.querystring)
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
    ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
    ctx.set("Content-Type", "application/json;charset=utf-8");
    ctx.set("Access-Control-Allow-Credentials", true);
    ctx.set("Access-Control-Max-Age", 300);
    ctx.set("Access-Control-Expose-Headers", "myData");
    ctx.response.body = {a: 'index', time: new Date().toGMTString(), index: ctx.query.index}
  })
  .options('/rive-get/client/index', async (ctx, next) => {
    // 以下未执行
    console.log('??????????????')
    ctx.response.body = {a: 'client', time: new Date().toGMTString(), index: ctx.query.index}
  })
  .get('/rive-get/client/index', async (ctx, next) => {
    // console.log(ctx.request)
    // console.log(ctx.query)
    // console.log(ctx.querystring)
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
    ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
    ctx.set("Content-Type", "application/json;charset=utf-8");
    ctx.set("Access-Control-Allow-Credentials", true);
    ctx.set("Access-Control-Max-Age", 300);
    ctx.set("Access-Control-Expose-Headers", "myData");
    ctx.response.body = {a: 'client', time: new Date().toGMTString(), index: ctx.query.index}
  })
  .get('/rive-get/client/status', async (ctx, next) => {
    // ctx.status = 502
    ctx.response.body = {
      code: 0,
      description: 'ok',
      data: {a:1}
      // data: {a: 'client', time: new Date().toGMTString(), index: ctx.query.status}
    }
  })

module.exports = router

