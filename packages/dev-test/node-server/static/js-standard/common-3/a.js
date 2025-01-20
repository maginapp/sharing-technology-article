module.exports = {
  a: 'a',
  b: require('./b'),
  c: require('./c')
}

console.log(require.cache)