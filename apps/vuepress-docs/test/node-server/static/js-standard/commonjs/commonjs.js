const a = require('./a');
console.log('in main, a.a1 = %j, a.a2 = %j', a.a1, a.a2);
const b = require('./b');
b.b1++
console.log('in main, b.b1 = %j', b.b1);