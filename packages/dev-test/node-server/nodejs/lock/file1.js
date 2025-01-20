const { lock, unlock } = require('./lockFile')
lock('./1', (err) => {
  console.log(err)
})

lock('./1', (err) => {
  console.log(err)
})

lock('./1', (err) => {
  console.log(err)
})

lock('./2', (err) => {
  console.log(err)
})

lock('./2', (err) => {
  console.log(err)
})

setTimeout(() => {
  lock('./3', (err) => {
    console.log(err, 'file1')
  })  
}, 10000);
const http = require('http')

http.createServer(()=> {}).listen('8891')


setTimeout(() => {
  process.exit()
}, 1200);