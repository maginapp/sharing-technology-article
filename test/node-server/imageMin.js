
/*
https://github.com/lovell/sharp
https://blog.lcddjm.com/sharp-documents-cn/
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
                console.log(newPath, err)
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

const solveImg = images => {
  images.forEach(map => {
    const imgPath = map.o
    const newPath = map.n
    const quality = 70
    const list =  newPath.split('.')
    const type = list[list.length - 1]
    let promise = sharp(imgPath)
    if (['jpeg', 'jpg'].includes(type)) {
      promise = promise.jpeg({ quality, chromaSubsampling: '4:4:4' })
    }
    if (['png', 'webp', 'tiff'].includes(type)) {
      promise = promise[type]({ quality })
    }
    promise.toFile(newPath)
      .then( data => { 
        // console.log(data)
      })
      .catch( err => { 
        console.log(err, map)
      })
  })
}

const params = {
  webp: [baseWebpPath, newBasePath, '/**/*', 'webp'],
  min: [basePath, newBasePath, '/**/*'],
}

let envImgType = process.env.imgType || ''
envImgType = envImgType.trim()

const fnParams = envImgType && params[envImgType] ? { [envImgType]: params[envImgType] } : params

for (let k in fnParams) {
  getImagasMap(...fnParams[k]).then(solveImg)
}



