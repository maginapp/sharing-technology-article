let b = 1
b++

const data = {
  a: 1
}

module.exports = {
  b,
  fn() {
    return ++b
  },
  data,
  addData() {
    return ++data.a
  },
}