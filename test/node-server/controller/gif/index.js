const GIFEncoder = require('gifencoder')
const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')
const path = require('path')

const create = async (context, next) => {
    
    context.response.set("Content-Type", "application/json; charset=utf-8")
    let { w, h, c, r, d, q } = context.request.body
    w = +w || 300
    h = +h || 400
    c = +c || 1
    r = +r || 1
    d = +d || 1000
    q = +q || 100

    const encoder = new GIFEncoder(w, h)
    const fileName = '/gif/' + +new Date() + '.gif'
    encoder.createReadStream().pipe(fs.createWriteStream(path.join('./static', fileName)))
    
    encoder.start();
    encoder.setRepeat(r);   // 0 for repeat, -1 for no-repeat
    encoder.setDelay(d);  // frame delay in ms
    encoder.setQuality(q); // image quality. 10 is default.

    // use node-canvas
    const canvas = createCanvas(w, h);
    const ctx = canvas.getContext('2d');

    // const reader = fs.createReadStream(imgs[0].path);
    // let filePath = `./static/gif/${imgs[0].name}`;
    // // 创建可写流
    // const upStream = fs.createWriteStream(filePath);
    // // 写入
    // reader.pipe(upStream);
    
    let imgs = context.request.files.img
    if (imgs && !imgs.length) {
      imgs = [imgs]
    }
    await Promise
      .all(imgs.map(img => loadImage(img.path)))
      .then(arr => {
        arr.forEach((image, index) => {
          console.log(image)
          if (c) {
            ctx.drawImage(image, 0, 0, w, h)
          } else {
            ctx.drawImage(image, 0, 0)
          }
          encoder.setDelay(500 * (index + 1) * (index + 1) + 500)
          encoder.addFrame(ctx)
        })
        encoder.finish()
        context.response.body = {code: 0, data: {fileName}}
      })
  
}

// 创建文件夹
fs.stat(path.join('./static', 'gif'), (err) => {
  if (err) {
    fs.mkdir(path.join('./static', 'gif'), (err) => {
      // console.log(err)
    })
  }
})

const createVue = async (context, next) => {
  context.response.set("Content-Type", "application/json; charset=utf-8")
  const body = context.request.body
  const files = context.request.files

  const w = +body.w || 300, h = +body.h || 400, r = +body.r || 0, 
    delay = JSON.parse(body.delay), layout = JSON.parse(body.layout), quatity = JSON.parse(body.quatity),
    cut = JSON.parse(body.cut), imgW = JSON.parse(body.imgW), imgH = JSON.parse(body.imgH)

  const bg = body.bg  
  const clear = +body.clear || 1

  const encoder = new GIFEncoder(w, h)
  const fileName = '/gif/' + +new Date() + '.gif'
  encoder.createReadStream().pipe(fs.createWriteStream(path.join('./static', fileName)))
    
  encoder.start()
  encoder.setRepeat(r)

  const canvas = createCanvas(w, h)
  const ctx = canvas.getContext('2d')

  let imgs = files.img
  if (imgs && !imgs.length) {
    imgs = [imgs]
  }

  await Promise
    .all(imgs.map(img => loadImage(img.path)))
    .then(arr => {
      arr.forEach((image, index) => {
        const params = getDrawImageParams(layout[index], w, h, imgW[index], imgH[index], cut[index])
        // ctx.fillStyle = 'transparent'
        // ctx.fillRect(0, 0, canvas.width, canvas.height)

        if (clear) {
          ctx.clearRect(0,0, canvas.width, canvas.height)
        }

        if (bg) {
          ctx.fillStyle = bg
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        }

        ctx.drawImage(image, ...params)
        encoder.setDelay(delay[index])
        encoder.setQuality(quatity[index])
        encoder.addFrame(ctx)
      })
      encoder.finish()
      context.response.body = {code: 0, data: { gif: fileName }}
    })
}

/**
 * 
 * @param {*} layout 0 覆盖 1居中 2自定义
 * @param {*} w 
 * @param {*} h 
 * @param {*} imgW 
 * @param {*} imgH 
 * @param {*} cut 
 */
const getDrawImageParams = (layout, w, h, imgW, imgH, cut,) => {
  if (layout == 0) {
    return [0, 0, w, h]
  } else if (layout == 1) {
    const wh = w/h
    const iWh = imgW / imgH
    if (wh == iWh) {
      return [0, 0, w, h]
    }
    if (wh < iWh) {
      const iH = w / iWh
      return [0, (h - iH) / 2, w, iH]
    }
    if (wh > iWh) {
      const iW = h * iWh
      return [(w - iW) / 2, 0, iW, h]
    }
  } else if (layout == 2) {
    cut = cut.replace(/\s/g, '').replace(/[,，。.-]/g, ',')
    if (!cut) {
      return [0, 0, w, h]
    }
    const list = cut.split(',').map(item => +item.trim() || 0)
    return list
  }
}


module.exports = {
  create,
  createVue
}