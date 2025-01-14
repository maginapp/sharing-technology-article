module.exports = {
  a:1
}
console.log(process.mainModule)
console.log(require.main)

console.log(require.main.__proto__)
// console.log(require.main.__proto__.load('./a.js'))
console.log(require.cache)