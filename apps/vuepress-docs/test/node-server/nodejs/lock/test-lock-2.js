var lockFile = require('./lockFile');
const fs = require('fs')


lockFile.lock('1.js', function(err) {
    if (err) console.log(err)
    fs.writeFile('1.js', 'test 1', () => {
      lockFile.unlock('1.js', function() {});
    })
})

lockFile.lock('1.js', function(err) {
  if (err) console.log(err)
  fs.writeFile('1.js', 'test 2', () => {
    lockFile.unlock('1.js', function() {});
  })
})

lockFile.lock('1.js', function(err) {
  if (err) console.log(err)
  fs.writeFile('1.js', 'test 3', () => {
    lockFile.unlock('1.js', function() {});
  })
})

lockFile.lock('1.js', function(err) {
  if (err) console.log(err)
  fs.writeFile('1.js', 'test 4', () => {
    lockFile.unlock('1.js', function() {});
  })
})

lockFile.lock('1.js', function(err) {
  if (err) console.log(err)
  fs.writeFile('1.js', 'test 5', () => {
    lockFile.unlock('1.js', function() {});
  })
})


lockFile.lock('1.js', function(err) {
  if (err) console.log(err)
  fs.writeFile('1.js', 'test 6', () => {
    lockFile.unlock('1.js', function() {});
  })
})

setTimeout(() => {

lockFile.lock('1.js', function(err) {
  if (err) console.log(err)
  fs.writeFile('1.js', 'test 2', () => {
    lockFile.unlock('1.js', function() {});
  })
})

lockFile.lock('1.js', function(err) {
  if (err) console.log(err)
  fs.writeFile('1.js', 'test 3', () => {
    lockFile.unlock('1.js', function() {});
  })
})

lockFile.lock('1.js', function(err) {
  if (err) console.log(err)
  fs.writeFile('1.js', 'test 4', () => {
    lockFile.unlock('1.js', function() {});
  })
})

lockFile.lock('1.js', function(err) {
  if (err) console.log(err)
  fs.writeFile('1.js', 'test 5', () => {
    lockFile.unlock('1.js', function() {});
  })
})


lockFile.lock('1.js', function(err) {
  if (err) console.log(err)
  fs.writeFile('1.js', 'test 6', () => {
    lockFile.unlock('1.js', function() {});
  })
})

}, 1000);



const http = require('http')

http.createServer(()=> {}).listen('8891')


