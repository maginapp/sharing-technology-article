---
meta:
  - name: keywords
    content: node,图片转化,sharp
  - name: description
    content: nodejs使用sharp转化图片
---

# sharp图片转化

sharp 可以方便地实现常见的图片编辑操作，如裁剪、格式转换、旋转变换、滤镜添加等

## 基础

```js
const sharp = require('sharp')

sharp('test.png')
  .rotate()
  .resize(200)
  .toBuffer()
  .then( data => ... )
  .catch( err => ... )

sharp('test.png')
  .jpeg({
    quality: 100,
    chromaSubsampling: '4:4:4'
  })
  .rotate()
  .resize(200)
  .toFile('test.jpg')
  .then( data => ... )
  .catch( err => ... )
```


## 引用

* [sharp](https://sharp.pixelplumbing.com/)

## 测试服务

> 启动node-server

* [gif-vue](http://localhost:3100/gif-vue.html)
* [gif](http://localhost:3100/gif.html)