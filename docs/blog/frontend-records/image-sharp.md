---
meta:
  - name: keywords
    content: node,图片转化,sharp
  - name: description
    content: nodejs使用sharp转化图片
---

# sharp图片转化

sharp 可以方便地实现常见的图片编辑操作，如裁剪、格式转换、旋转变换、滤镜添加等

实际业务中，可用于图片压缩，格式转化，添加logo等

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

## 添加水印

[api-composite](https://sharp.pixelplumbing.com/api-composite)

要合成的图像必须要比处理后的图像相同或更小。`composite`图片优先在底部显示，提供了`top`和`left`选项则根据参数显示。

```js
// composite img
const imgBuffer = await sharp('./test.png').resize(500, 700).toBuffer()

// logo img => 处理后的图片
sharp('./logo.png')
  .resize(500, 700)
  .flatten( { background: '#ffffff' } )
  .composite([{ input: imgBuffer, gravity: 'southeast', top: 0, left: 0 }])
  .sharpen()
  .withMetadata()
  .png( { quality: 90 } )
  .toFile('./test-logo.png')
  .then( data => ... )
  .catch( err => ... )
```

## 引用

* [sharp](https://sharp.pixelplumbing.com/)
