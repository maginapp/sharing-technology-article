const readStream = require('./../lib/readStream')

let jsonTypes = [
  'application/json'
]

let formTypes = [
  'application/x-www-form-urlencoded'
]

let textTypes = [
  'text/plain'
]


function parseQueryStr(queryStr) {
  let queryData = {}
  let queryStrList = queryStr.split('&');
  for (let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split('=')
    queryData[itemList[0]] = decodeURIComponent(itemList[1])
  }
  return queryData
}

const bodyParser = async (ctx) => {
  if (ctx.req.method === 'POST' && !ctx.request.body) {
    const body = await readStream(ctx.request.req)

    let result = body
    if (ctx.request.is(formTypes)) {
      result = parseQueryStr(body)
    } else if (ctx.request.is(jsonTypes)) {
      try {
        result = JSON.parse(body)
      } catch (err) {
        ctx.throw(500, err)
      }
    } else if (ctx.request.is(textTypes)) {
      result = body
    }

    ctx.body = result
  }
}

module.exports = async (ctx, next) => {
  await bodyParser(ctx)
  next()
}