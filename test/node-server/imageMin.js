
/*
https://github.com/lovell/sharp
https://blog.lcddjm.com/sharp-documents-cn/
https://sharp.pixelplumbing.com/
*/

const sharp = require('sharp')
const glob = require('glob')
const fs = require('fs')

const basePath = './static/images-base-min'
const baseWebpPath = './static/images-base-to-webp'
const newBasePath = './static/images'

const getImagasMap = async (basePath, newBasePath, fileType, formType) => {
  const imagesOrigin = glob.sync(basePath + fileType)
  await new Promise((resolve) => {
    fs.stat(newBasePath, (err => {
      if (err) {
        fs.mkdir(newBasePath, (err) => {
          resolve()
        })
      } else {
        resolve()
      }
    }))
  })
  return new Promise((resolve) => {
    let list = [], count = 0
    imagesOrigin.map(imgPath => {
      let newPath = imgPath.replace(basePath, newBasePath)
      fs.stat(imgPath, (err, stat) => {
        if (stat.isDirectory()) {
          fs.stat(newPath, (err => {
            if (err) {
              fs.mkdir(newPath, (err) => {
                if (err) console.log(err)
                if (!err) count++
                judegEnd()
              })
            } else {
              count++
              judegEnd()
            }
          }))
        } else {
          count++
          if (formType) {
            const list =  newPath.split('.')
            const type = list[list.length - 1]
            newPath = newPath.replace(new RegExp('\\.' + type + '$'), '.' + formType)
          }
          list.push({
            o: imgPath,
            n: newPath
          })
          judegEnd()
        }
      })
    })
    const judegEnd = () => {
      if (count === imagesOrigin.length) {
        resolve(list)
      }
    }
  })
}

const solveImg = (images, quality = 70) => {
  images.forEach(map => {
    const imgPath = map.o
    const newPath = map.n
    const list =  newPath.split('.')
    const type = list[list.length - 1]
    const listOld =  imgPath.split('.')
    const typeOld = listOld[listOld.length - 1]
    let promise = sharp(imgPath)
    if (['jpeg', 'jpg'].includes(type)) {
      promise = promise.jpeg({ quality, chromaSubsampling: '4:4:4' })
    }
    if (['png'].includes(type)) {
      promise = promise[type]({ quality, compressionLevel: 9, palette: true })
    }
    if (['webp', 'tiff'].includes(type)) {
      promise = promise[type]({ quality })
    }
    if (typeOld !== type) {
      promise = promise.toFile(newPath).then((data) => {})
    } else {
      promise = promise.toBuffer()
      .then( data => {
        fs.stat(imgPath, (err, stat) => {
          if (stat.size < data.length) {
            let readStream = fs.createReadStream(imgPath)
            let writeStream = fs.createWriteStream(newPath)
            readStream.pipe(writeStream)
          } else {
            fs.writeFile(newPath, data, () =>{})
          }
        })
        // console.log(data)
      })
    }
    promise
      .catch( err => { 
        console.log(err, map)
      })
  })
}

const docsNewBasePath = './../../docs/.vuepress/public/sharp'

const params = {
  webpT: [baseWebpPath, newBasePath, '/**/*', 'webp'],
  minT: [basePath, newBasePath, '/**/*'],
  min: [ './../../docs/.vuepress/public-wait-min', docsNewBasePath, '/**/*', '', 80],
  webp: ['./../../docs/.vuepress/public-wait-webp', docsNewBasePath, '/**/*', 'webp', 80]
}


let envImgType = process.env.imgType || ''
envImgType = envImgType.trim()

const fnParams = envImgType && params[envImgType] ? { [envImgType]: params[envImgType] } : params

for (let k in fnParams) {
  getImagasMap(...fnParams[k]).then((images) => {
    return solveImg(images, fnParams[k][4])
  })
}



