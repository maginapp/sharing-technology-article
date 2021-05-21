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