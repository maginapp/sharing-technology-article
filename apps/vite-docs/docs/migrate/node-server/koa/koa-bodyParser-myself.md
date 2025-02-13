---
meta:
  - name: keywords
    content: node,koa2,koa-router
  - name: description
    content: 基于nodejs/koa搭建web服务器 -- koa-自定义koa-bodyParser
---

# koa-自定义koa-bodyParser


## 请求流读取

```js
module.exports = readStream;

function readStream(req) {
  return new Promise((resolve, reject) => {
    try {
      streamEventListen(req, (data, err) => {
        if (!isError(err)) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
}

function isError(err) {
  return Object.prototype.toString.call(err).toLowerCase() === '[object error]';
}

function streamEventListen(req, callback) {
  let stream = req.req || req;
  let chunk = [];
  let complete = false;

  // attach listeners
  stream.on('aborted', onAborted);
  stream.on('close', cleanup);
  stream.on('data', onData);
  stream.on('end', onEnd);
  stream.on('error', onEnd);

  function onAborted() {
    if (complete) {
      return;
    }
    callback(null, new Error('request body parse aborted'));
  }

  function cleanup() {
    stream.removeListener('aborted', onAborted);
    stream.removeListener('data', onData);
    stream.removeListener('end', onEnd);
    stream.removeListener('error', onEnd);
    stream.removeListener('close', cleanup);
  }

  function onData(data) {
    if (complete) {
      return;
    }
    if (data) {
      chunk.push(data.toString());
    }
  }

  function onEnd(err) {
    if (complete) {
      return;
    }

    if (isError(err)) {
      callback(null, err);
      return;
    }

    complete = true;
    let result = chunk.join('');
    chunk = [];
    callback(result, null);
  }
}
```

## bodyParser 

```js
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
```
