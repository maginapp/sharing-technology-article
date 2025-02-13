const { getContent } = require('./../controller/git')
const router = require('koa-router')()


const url = 'https://github.com/maginapp/sharing-technology-article/issues?q=is%3Aopen+is%3Aissue+label%3A'

const labels = ['html']

router
  .get('/console', async (ctx, next) => {
    ctx.response.set("Content-Type", "application/json; charset=utf-8")
    const data = {
      url: ctx.url,
      body: ctx.request.body
    }
    console.log(data)
    ctx.response.body = data
  })
  .get('/', async (ctx) => {
    // console.log(ctx.request)
    const data = await getContent(url, labels[0], ctx)
    // let data = ''
    console.log(data)
    ctx.response.body = data
  })


// console.log(getOptions())

module.exports = router

