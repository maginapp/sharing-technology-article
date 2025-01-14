const GIFEncoder = require('gifencoder');
const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

const encoder = new GIFEncoder(320, 240);
encoder.createReadStream().pipe(fs.createWriteStream('./static/images/gif/myanimated.gif'));

encoder.start();
encoder.setRepeat(0);   // 0 for repeat, -1 for no-repeat
encoder.setDelay(1000);  // frame delay in ms
encoder.setQuality(100); // image quality. 10 is default.

// use node-canvas
const canvas = createCanvas(320, 240);
const ctx = canvas.getContext('2d');

const images = ['./static/images/pc-b-g.png', './static/images/pc-bd.jpg', './static/images/pic-ali.png']

Promise
  .all(images.map(path => loadImage(path)))
  .then(arr => {
    arr.forEach(image => {
      ctx.drawImage(image, 0, 0, 320, 240)
      encoder.addFrame(ctx)
    })
    encoder.finish()
  })

// red rectangle
// ctx.fillStyle = '#ff0000';
// ctx.fillRect(0, 0, 320, 240);

// green rectangle
// ctx.fillStyle = '#00ff00';
// ctx.fillRect(0, 0, 320, 240);
// encoder.addFrame(ctx);

// // blue rectangle
// ctx.fillStyle = '#0000ff';
// ctx.fillRect(0, 0, 320, 240);
// encoder.addFrame(ctx);

// encoder.finish()

// console.log(process.env)
// console.log(process.mode)