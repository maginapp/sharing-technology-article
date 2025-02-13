const a = require('./a.js');
const b = {
  b1: 1
}
module.exports = b
console.log('in b, b.b1 = %j', b.b1);
b.b1++
console.log('in b, a.a1 = %j, a.a2 = %j', a.a1, a.a2);