---
meta:
  - name: keywords
    content: node,gif图片生成,gifencoder
  - name: description
    content: 使用nodejs生成gif图片
---

# gif图片生成

用于创建gif文件，`测试demo`支持图片剪切，显示速率调整等功能

## 依赖

```bash
npm i gifencoder
npm i canvas
```

## 基础

```js
const GIFEncoder = require('gifencoder')
const { createCanvas, loadImage } = require('canvas')

const imgs = ['1.png', '2.png']

const encoder = new GIFEncoder(w, h)
encoder.createReadStream().pipe(fileName) // 创建
encoder.start()
encoder.setRepeat(r) // 0 for repeat, -1 for no-repeat

// 创建画布
const canvas = createCanvas(w, h)
const ctx = canvas.getContext('2d')

await Promise
  .all(imgs.map(img => loadImage(img)))
  .then(arr => {
    arr.forEach((image, index) => {
      ctx.drawImage(image, 0, 0, w, h)
      encoder.setDelay(delay) // frame delay in ms
      encoder.setQuality(quatity) // image quality. 10 is default
      encoder.addFrame(ctx) // 添加帧
    })
    // 接触gif创建
    encoder.finish()
  })
```

## 测试服务

启动 node-server

* [测试demo:gif-vue](http://localhost:3100/gif-vue.html)
* [测试demo:gif](http://localhost:3100/gif.html)
* [createGif.js](/test/node-server/createGif.js)