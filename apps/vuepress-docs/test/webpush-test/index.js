const webpush = require('web-push')
const path = require('path')
const Koa = require('koa')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
const staticPath = './static'

app.use(static(
  path.join(__dirname, staticPath)
))
app.use(bodyParser())

const port = 3333
app.listen(port, () => {
  console.log(`demo] static-use-middleware is starting at port ${port}`)
})

app.use(async (ctx) => {
  if (/^\/push-message[/]?([?#].*)?$/.test(ctx.url) && ctx.request.method === 'GET') {
    if (!ctx.request.query.title) return ctx.response.body = {code: 0, msg: 'invalid data'}
    const { payload, params } = getMsg(ctx)
    sendPush(pushSubscriptionQueue, payload)
    console.log('sendpush length:', pushSubscriptionQueue.length)
    ctx.response.body = {code: 0, msg: 'success', data: params}
  } else if (/^\/subscribe[/]?([?#].*)?$/.test(ctx.url) && ctx.request.method === 'POST') {
    console.log(ctx.request.body)
    const { payload, } = getMsg(ctx)
    if (ctx.request.body) pushSubscriptionQueue.push(ctx.request.body)
    sendPush([ctx.request.body], payload)
    ctx.response.body = {code: 0, msg: 'success', length: pushSubscriptionQueue.length}
  } else {
    ctx.response.body = {code: 0, msg: 'no-api'}
  }
})

const pushSubscriptionQueue = [
  // {
  //   "endpoint":"https://fcm.googleapis.com/fcm/send/cfvdnx7qo_o:APA91bHdOyD0TGNtyzowlYqU7aJF5e_NPB18graC6zYmsOJBFfxeV-dqyPqFHhK_95SSjFfNv7mW-IkaDCVjffCDYQSFSge_8AacxJw979XOZfQIWpBK0NmkIBN5qKbp-I2HwfxprogL",
  //   "expirationTime":null,
  //   "keys":{
  //     "p256dh":"BP8FwbdjS0_Vv4OAJNgGUOE7IACju-Fq_RxYuVxwXG1tVmYUhWJuycVoU_70W5YGxr1j8v9rr9Kt0CHsSHa3fpg","auth":"75-elTD9RXEnLUGHGm8Lew"
  //   }
  // }
]

const getMsg = (ctx) => {
    const { title , body, icon, data} = ctx.request.query
    //要发送的通知
    const params = {
      "title": title || "一篇新的文章",
      "body": body || "点开看看吧",
      "icon": icon || "",
      "data": data || {
          "url": "http://localhost:3333/"
      }
    }
    const str = JSON.stringify(params)
    const payload = Buffer.from(str, 'utf8')
    return {
      payload,
      params
    }
}

const sendPush = (list, payload) => {
  list.forEach(pushSubscription => {
    webpush.sendNotification(pushSubscription, payload).then(status => {
      console.log(status)
    }).catch(err => {
      console.log(err)
    })
  })
}

webpush.setGCMAPIKey('AIzaSyC9-d83WVuziO2RFQPWvLZA-FD7EK1NbB8'); // gcm api key
webpush.setVapidDetails(
  'mailto:maginacp0811@gmail.com',
  'BILsf1-DzhEoMkBA8HrWH1ziIXX7-XdYaN2ycBdQ24mk5tOHaefHtMmIgzQzJqzMamZ1CJO3iDmJaG0uADRIhO4', //上面代码vapidKeys.publicKey 的字符串
  'ee7g53zSh-fX5-iEVd4h08f4XO7g9jozNv83UB45cAk' // 上面代码 vapidKeys.privateKey 的字符串
);

// 

// const pushSubscription = {"endpoint":"xxxxx","expirationTime":null,"keys":{"p256dh":"xxxx","auth":"xxxxx"}}
// webpush.sendNotification(pushSubscription, payload).then(status => {
//     console.log(status);
// }).catch(err => {
//     console.log(err);
// });

// hhttps://blog.csdn.net/newhope1106/article/details/54709916 google的GCM推送使用简介
// https://segmentfault.com/a/1190000013061924 web-push实现原理及细节介绍
// http://coolnuanfeng.github.io/webpush web push 实现示例
// https://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/ 借助Service Worker和cacheStorage缓存及离线开发
// https://developers.google.com/web/fundamentals/codelabs/push-notifications/?hl=zh-cn#%E5%A7%8B%E7%BB%88%E6%9B%B4%E6%96%B0%E6%9C%8D%E5%8A%A1%E5%B7%A5%E4%BD%9C%E7%BA%BF%E7%A8%8B 向网络应用添加推送通知
// https://console.cloud.google.com/ Google Cloud Platform 首页
// https://www.npmjs.com/package/web-push