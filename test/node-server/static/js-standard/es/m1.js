export let a = 1
a++

setTimeout(() => {
  a++
  console.log('in m1 100', a)
}, 100)