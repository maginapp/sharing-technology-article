const git = require('./controller/git')
const getContent = git.getContent

const delayTime = 1000 * 30
const errorCount = 3


// const url = 'https://github.com/maginapp/sharing-technology-article'
const baseUrl = 'https://github.com/maginapp/sharing-technology-article/issues?q=is%3Aopen+is%3Aissue+label%3A'
  // const url = 'https://www.baidu.com/?'
  // '小程序' => %E5%B0%8F%E7%A8%8B%E5%BA%8F
const labels = ['html', 'js', 'css', 'vue', 'node', 'react', 'webpack', '%E5%B0%8F%E7%A8%8B%E5%BA%8F']

const getInterviews = async(baseUrl, labels) => {
  const queue = []
  labels.forEach((item, index) => {
    const task = getInterview(baseUrl, item, index * delayTime)
    queue.push(task)
  })
  const interviews = await Promise.all(queue)
  console.log('interviews  ==== >')
  console.log(interviews)
  await writeInterview(interviews, baseUrl)
}

const getInterview = async(url, label, delay, opt = {}) => {
  const task = await new Promise(resolve => {
    setTimeout(async() => {
      try {
        const data = await getContent(url, label)
        resolve(data)
      } catch {
        const err = (opt.err || 0) + 1
        if (err < errorCount) {
          const taskRe = await getInterview(url, label, delayTime * 2, opt)
          resolve(taskRe)
        } else {
          resolve({
            Open: 'error',
            Closed: 'error',
            list: [],
            label
          })
        }
      }
    }, delay)
  })
  return task
}


// const interviews = [{
//   label: 'html',
//   Open: '1',
//   Closed: '0',
//   list: [
//     {
//       title: '[html] cookies，sessionStorage和localStorage的区别？',        
//       link: '/maginapp/sharing-technology-article/issues/12'
//     }
//   ]
// }]

/* 以下为文件写入功能  */
const fs = require('fs')
const os = require('os')

const writeInterview = async(interviews, baseUrl, file = './interview-count.md') => {
  fs.writeFile(file, '', function () {
    var fWriteName = file;
    var fWrite = fs.createWriteStream(fWriteName);

    // # interview
    // ## 汇总
    // |      | Open | Closed |
    // | :--- | :--- | ----- |
    // |      |      |       |
    // |      |      |       |
    // |      |      |       |
    // ## vue
    // * [asd](/dasd)

    const list = []


    list.push('---')
    list.push('  - name: keywords')
    list.push('    content: 前端面试题,maginapp,interview')
    list.push('  - name: description')
    list.push('    content: 前端面试题汇总')
    list.push('---')

    list.push('# interview')
    list.push('')
    list.push('|      | Open | Closed |')
    list.push('| :--- | :--- | ----- |')
    interviews.forEach(item => {
      item.name = decodeURI(item.label)
      const str = `| ${item.name} | ${item.Open} | ${item.Closed} |`
      list.push(str)
    })
    list.push('')

    interviews.forEach(item => {
      list.push(`## ${item.name}`)
      list.push('')
      if (item.list && item.list.length) {
          // * [asd](/dasd)
        item.list.forEach(item => {
          list.push(`* [${item.title}](https://github.com${item.link})`)
        })
      }
      list.push(`* [More](${baseUrl}${item.label})`)
    })

    console.log('list  ===== >')
    console.log(list)

    list.forEach(item => {
      fWrite.write(item + os.EOL);
    })
  })
}

getInterviews(baseUrl, labels)