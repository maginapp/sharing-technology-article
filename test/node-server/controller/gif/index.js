const GIFEncoder = require('gifencoder');
const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
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

module.exports = {
  create
}