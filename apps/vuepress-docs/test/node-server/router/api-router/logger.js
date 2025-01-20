const router = require('koa-router')()

router
  .get('/console', async (ctx, next) => {
    ctx.response.body = '/api/logger/console'
  })

module.exports = router

