const { lock, unlock } = require('./lockFile')


lock('./3', (err) => {
  console.log(err)
})

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
  unlock('./3', (err) => {
    console.log(err, 'file2 - unlock')
  })  
}, 4000);



const http = require('http')

http.createServer(()=> {}).listen('8892')


setTimeout(() => {
  process.exit()
}, 6000);