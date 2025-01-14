---
meta:
  - name: keywords
    content: 前端,webpush
  - name: description
    content: webpush学习
---

# webpsuh

> 最近遇到了个新的需求，需要追踪用户浏览页面的行为，并依据此数据向用户发送提示邮件和推送信息。其中推送信息功能是基于[第三方插件](https://www.pushengage.com/)开发的，核心是前端的`Service Worker`和`Web Push`。

本文将对`Web Push`进行简单介绍，并基于谷歌FCM完成demo开发


## tips

> 使用node推送时，始终报链接错误 `read ECONNRESET`，怀疑是连接不上fcm服务

`/test/webpush-test`

```js
// utils
// https://web-push-codelab.glitch.me/ webpush 推送测试网站
// https://console.cloud.google.com/ Google Cloud Platform 首页
// https://developers.google.com/web/fundamentals/codelabs/push-notifications/?hl=zh-cn#%E5%A7%8B%E7%BB%88%E6%9B%B4%E6%96%B0%E6%9C%8D%E5%8A%A1%E5%B7%A5%E4%BD%9C%E7%BA%BF%E7%A8%8B 向网络应用添加推送通知
// https://www.npmjs.com/package/web-push

// blog
// https://blog.csdn.net/newhope1106/article/details/54709916 google的GCM推送使用简介
// https://segmentfault.com/a/1190000013061924 web-push实现原理及细节介绍
// http://coolnuanfeng.github.io/webpush web push 实现示例
// https://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/ 借助Service Worker和cacheStorage缓存及离线开发
```
