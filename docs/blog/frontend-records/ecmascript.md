---
meta:
  - name: keywords
    content: js,ECMA,es6
  - name: description
    content: ES6,es7,es8,es9,es10,es11,es12新特性
---

# ES6-12新特性

## 简介

最新提案可见 => [Ecma TC39](https://github.com/tc39)

## ES6（2015）

### 1. 类（class）
```js
class Man {
  constructor(name) {
    this.name = '小豪';
  }
  console() {
    console.log(this.name);
  }
}
const man = new Man('小豪');
man.console(); // 小豪
```

###  2. 模块化(ES Module)

```js
// 模块 A 导出一个方法
export const sub = (a, b) => a + b;
// 模块 B 导入使用
import { sub } from './A';
console.log(sub(1, 2)); // 3
```

### 3. 箭头（Arrow）函数

```js
const func = (a, b) => a + b;
func(1, 2); // 3
```

### 4. 函数参数默认值

```js
function foo(age = 25,){ // ...}
```

### 5. 模板字符串

```js
const name = '小豪';
const str = `Your name is ${name}`;
```

### 6. 解构赋值

```js
let a = 1, b= 2;
[a, b] = [b, a]; // a 2  b 1
```

### 7. 延展操作符Spread operator

展开语法将数组展开为其中的各个元素

```js
let a = [...'hello world']; // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
```

### 8. 对象属性简写

```js
const name='小豪',
const obj = { name };
```

### 9. Promise

```js
Promise.resolve().then(() => { console.log(2); });
console.log(1);
// 先打印 1 ，再打印 2
```
### 10. let和const

```js
let name = '小豪'；
const arr = [];
```

### Symbol

`Symbol`表示独一无二的值，是 js 的第七种数据类型

```js
let s1 = Symbol('1')
let s2 = Symbol('1')
console.log(s1 === s2) // false
```

### 12. map/set/weakmap/weakset

WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名
WeakMap的键名所指向的对象，不计入垃圾回收机制
WeakMap不可遍历

WeakSet 与 WeakMap类型

```js
// WeakMap 可以使用 set 方法添加成员
const wm1 = new WeakMap()
const key = {
    foo: 1
}
wm1.set(key, 2)
wm1.get(key) // 2
key = null
// 下次内存清除时 wm1将为空
```

### 13. Proxy/Reflect

[MDN: Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
[MDN: Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)

```js
let handler = {
    get(obj, key) {
        return Reflect.has(obj, key) ? obj[key] : ''
    }
}
let p = new Proxy(target, handler)
```

## ES7（2016）

### 1. Array.prototype.includes()

```js
[1].includes(1); // true
```

### 2. 幂操作符

```js
2**10; // 1024
```

## ES8（2017）

### 1. async/await
异步终极解决方案

```js
async getData(){
    const res = await api.getTableData(); // await 异步任务
    // do something    
}
```

### 2. Object.values()

```js
Object.values({a: 1, b: 2, c: 3}); // [1, 2, 3]
```

### 3. Object.entries()

```js
Object.entries({a: 1, b: 2, c: 3}); // [["a", 1], ["b", 2], ["c", 3]]
```

### 4. String padding

```js
// padStart
'hello'.padStart(10); // "     hello"
// padEnd
'hello'.padEnd(10) "hello     "
```

### 5. 函数参数列表结尾允许逗号

添加新参数，只用修改单行

```js
funciton (
  a
){}

funciton (
  a,
){}

funciton (
  a,
  b
){}
```

### 6. Object.getOwnPropertyDescriptors()

获取一个对象的所有自身属性的描述符,如果没有任何自身属性，则返回空对象。

### 7. SharedArrayBuffer对象

SharedArrayBuffer 对象用来表示一个通用的，固定长度的原始二进制数据缓冲区

```js
/**
 * 
 * @param {*} length 所创建的数组缓冲区的大小，以字节(byte)为单位。  
 * @returns {SharedArrayBuffer} 一个大小指定的新 SharedArrayBuffer 对象。其内容被初始化为 0。
 */
new SharedArrayBuffer(10)
```

### 8. Atomics对象

```js
Atomics 对象提供了一组静态方法用来对 SharedArrayBuffer 对象进行原子操作。
```

## ES9（2018）

### 1. 异步迭代

```js
await可以和for...of循环一起使用，以串行的方式运行异步操作
async function process(array) {
  for await (let i of array) {
    // doSomething(i);
  }
}
```

### 2. Promise.finally()

```js
Promise.resolve().then().catch(e => e).finally();
```

### 3. Rest/Spread 属性

`Rest`剩余语法是将多个元素收集起来并“凝聚”为单个元素

```js
const values = [1, 2, 3, 5, 6];
console.log( Math.max(...values) ); // 6


function f(...[a, b, c]) {
  return a + b + c;
}
f(1, 2, 3) // 6
```

### 4. 正则表达式命名捕获组

详见 作者*-过客-*:

* [正则基础之——捕获组（capture group）](https://blog.csdn.net/lxcnn/article/details/4146148)
* [正则基础之——反向引用](https://blog.csdn.net/lxcnn/article/details/4476746)

```js
const reg = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
const match = reg.exec('2021-02-23'); // 

var data = "<table id=\"test\"><tr class=\"light\"><td> test </td></tr></table>";
var reg = /<([a-z]+)[^>]*>/ig;
data.replace(reg, "<$1>") //  <table><tr><td> test </td></tr></table>
```

### 5. 正则表达式反向断言

```js
// (?=p)、(?<=p)  p 前面(位置)、p 后面(位置)
// (?!p)、(?<!p>) 除了 p 前面(位置)、除了 p 后面(位置)
('3ab4').match(/\d(?=ab)/) // 3
('3ab4').match(/(?<=ab)\d/) // 4
('3ab4').match(/\d(?!ab)/) // 4
('3ab4').match(/\d(?!acb)/) // 3
('3ab4').match(/(?<!ab)\d/) // 3
```

### 6. 正则表达式dotAll模式

正则表达式中点.匹配除回车外的任何单字符，标记s改变这种行为，允许行终止符的出现

```js
/hello.world/.test('hello\nworld'); // false
/hello.world/s.test('hello\nworld'); // true
```

## ES10（2019）

### 1. Array.flat()和Array.flatMap()

```js
flat()
[1, 2, [3, 4]].flat(Infinity); // [1, 2, 3, 4]
flatMap()
[1, 2, 3, 4].flatMap(a => [a**2]); // [1, 4, 9, 16]
```

###  2. String.trimStart()和String.trimEnd()

去除字符串首尾空白字符

### 3. String.prototype.matchAll

```js
matchAll（）为所有匹配的匹配对象返回一个迭代器
const raw_arr = 'test1  test2  test3'.matchAll((/t(e)(st(\d?))/g)); // type => RegExpStringIterator {}
const arr = [...raw_arr]; // 类似以下结构
// [["test1","e","st1","1"],["test2","e","st2","2"],["test3","e","st3","3"]]
```

### 4. Symbol.prototype.description
只读属性，回 Symbol 对象的可选描述的字符串。

```js
Symbol('description').description; // 'description'
```

### 5. Object.fromEntries()

返回一个给定对象自身可枚举属性的键值对数组

```js
// 通过 Object.fromEntries， 可以将 Map 转化为 Object:
const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
console.log(Object.fromEntries(map)); // { foo: "bar", baz: 42 }
```

### 6. 可选 Catch

> chrome81版本之后，try catch性能有了极大提升，性能影响可以忽略

```js
// es10之前
try {...} catch (err) { ... }
// es10
try {...} catch () { ... }
```


## ES11（2020）

### 1. Nullish coalescing Operator(空值处理)

表达式在 `??` 的左侧 运算符求值为`undefined`或`null`，返回其右侧。

```js
let user = {
    u1: 0,
    u2: false,
    u3: null,
    u4: undefined
    u5: '',
}
let u2 = user.u2 ?? '用户2'  // false
let u3 = user.u3 ?? '用户3'  // 用户3
let u4 = user.u4 ?? '用户4'  // 用户4
let u5 = user.u5 ?? '用户5'  // ''
```

### 2. Optional chaining（可选链）

`?.`用户检测不确定的中间节点

```js
let user = {}
let u1 = user.childer.name // TypeError: Cannot read property 'name' of undefined
let u1 = user.childer?.name // undefined
```

### 3. Promise.allSettled

返回一个在所有给定的promise已被决议或被拒绝后决议的promise，并带有一个对象数组，每个对象表示对应的promise结果

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => reject('我是失败的Promise_1'));
const promise4 = new Promise((resolve, reject) => reject('我是失败的Promise_2'));
const promiseList = [promise1,promise2,promise3, promise4]
Promise.allSettled(promiseList)
.then(values=>{
  console.log(values)
});
```


### 4. Dynamic Import

`import()`语法：按需 import 提案几年前就已提出，如今终于能进入ES正式规范。现代前端打包资源越来越大，但实际前端应用初始化时根本不需要全量加载逻辑资源，为了首屏渲染速度更快，很多时候都是按需加载，比如懒加载图片等。

webpack对该特性已经有了很好的支持，vue也有动态组件功能

```js
const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    import('./ajax').then(ajax => {
        ajax()
    })
})
```

### 5. 新基本数据类型BigInt

js中数字过大精度会出现问题，安全数字是在 `-(2^53-1)至 2^53-1`（`Number.MAX_SAFE_INTEGER`）(`9007199254740991`) 范围

使用`BigInt`数字类型可表示一个任意精度的整数，可以表示超长数据，可以超出2的53次方。

```js
const bigInt = 9007199254740993n
console.log(typeof bigInt) // bigint

console.log(1n == 1) // true
console.log(1n === 1) // false

const bigIntNum = BigInt(9007199254740993n) // 9007199254740993n
const bigIntNum = BigInt(9007199254740993) // 9007199254740992n

```

### 6. globalThis

`globalThis` 提供了一个标准的方式来获取不同环境下的全局 this 对象（也就是全局对象自身）

```js
// 浏览器：window
// worker：self
// node：global
const getGlobal = () => {
    if (typeof self !== 'undefined') {
        return self
    }
    if (typeof window !== 'undefined') {
        return window
    }
    if (typeof global !== 'undefined') {
        return global
    }
    throw new Error('无法找到全局对象')
}
const globalThisMy = getGlobal()
globalThisMy === globalThis // true
```

##  ES12（2021）

### 1. replaceAll

返回一个全新的字符串，所有符合匹配规则的字符都将被替换掉

```js
const str = 'hello world';
str.replaceAll('l', ''); // "heo word"
```

### 2. Promise.any

接收一个Promise可迭代对象，只要其中的一个 promise 成功，就返回那个已经成功的 promise 。如果可迭代对象中没有一个 promise 成功（即所有的 promises 都失败/拒绝），就返回一个失败的 promise

```js
const promise1 = new Promise((resolve, reject) => reject('我是失败的Promise_1'));
const promise2 = new Promise((resolve, reject) => reject('我是失败的Promise_2'));
const promiseList = [promise1, promise2];
Promise.any(promiseList)
.then(values=>{
  console.log(values);
})
.catch(e=>{
  console.log(e); // AggregateError: All promises were rejected
});
```


### 3. WeakRefs

使用WeakRefs的Class类创建对对象的弱引用(对对象的弱引用是指当该对象应该被GC回收时不会阻止GC的回收行为)

### 4. 逻辑运算符和赋值表达式

逻辑运算符和赋值表达式，新特性结合了逻辑运算符（&&，||，??）和赋值表达式而JavaScript已存在的 复合赋值运算符有：

```js
a ||= b
// 等价于
a = a || (a = b)

a &&= b
// 等价于
a = a && (a = b)

a ??= b
// 等价于
a = a ?? (a = b)
```

### 5. 数字分隔符

数字分隔符，可以在数字之间创建可视化分隔符，通过_下划线来分割数字，使数字更具可读性

```js
const money = 1_000_000_000;
const money1 = 1000000000;
1_000_000_000 === 1000000000; // true
money === money1 // true
```

## 文献参考

>本文主要内容摘录自
>
> 追星人小豪
>
> [JS语法 ES6、ES7、ES8、ES9、ES10、ES11、ES12新特性](https://segmentfault.com/a/1190000039272641)