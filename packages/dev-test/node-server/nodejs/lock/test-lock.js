var lockFile = require('./lockFile');
const fs = require('fs')


lockFile.lock('1.js', function(err) {
    if (err) console.log(err)

    /*
    这里可以放心的读取相关文件
    */

    fs.writeFile('1.js', 'test', () => {
      lockFile.unlock('1.js', function() {});
    })
})

lockFile.lock('1.js', function(err) {
  if (err) console.log(err)

  /*
  这里可以放心的读取相关文件
  */

  fs.writeFile('1.js', 'test', () => {
    lockFile.unlock('1.js', function() {});
  })
})

lockFile.lock('2.js', function(err) {
  if (err) console.log(err)
  fs.writeFile('2.js', 'test', () => {
    lockFile.unlock('2.js', function() {});
  })
})

lockFile.lock('3.js', function(err) {
  if (err) console.log(err)
  fs.writeFile('3.js', 'test', () => {
    lockFile.unlock('3.js', function() {});
  })
})

lockFile.lock('4.js', function(err) {
  if (err) console.log(err)
  fs.writeFile('4.js', 'test', () => {
    lockFile.unlock('4.js', function() {});
  })
})

lockFile.lock('5.js', function(err) {
  if (err) console.log(err)
  fs.writeFile('5.js', 'test', () => {
    lockFile.unlock('5.js', function() {});
  })
})

lockFile.lock('6.js', function(err) {
  if (err) console.log(err)
  fs.writeFile('6.js', 'test', () => {
    lockFile.unlock('6.js', function() {});
  })
})



const http = require('http')

http.createServer(()=> {}).listen('8891')


