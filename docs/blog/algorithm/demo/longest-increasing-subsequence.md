
# 最大递增序列

## 获取最大递增序列长度

## 获取最大递增序列

贪心算发 + 二分法

```ts
function getSequence(arr) {
  // p解析 [index:value] 长度序列中上一个数据的索引
  // 有效数据是从(index=1)开始的
  // 记录了长度序列中，arr[index]前一位的索引值
  const p = arr.slice()
  const result = [0]
  let i, j, u, v, c
  const len = arr.length // arr长度 len
  for (i = 0; i < len; i++) {
    // 遍历arr
    const arrI = arr[i]
    // arrI == 0直接下个 => 默认大于等于0
    if (arrI !== 0) {
      j = result[result.length - 1] // 当前获取的 最大长度的尾数值索引
      if (arr[j] < arrI) {
        // 当前arrI大于最后一位记录值
        p[i] = j // p[i]记录 未添加新纪录前的 最大长度的尾部索引
        result.push(i) // result添加当前索引i
        continue
      }
      // 当前arrI 小于 记录最大值result[result.length - 1]
      // [0, (u = result.length - 1)] 任意位置都有可能
      // 二分法获取arrI在result中的位置
      // u => [0, result.length]范围内
      u = 0
      v = result.length - 1
      while (u < v) {
        c = ((u + v) / 2) | 0 // 二分
        if (arr[result[c]] < arrI) {
          u = c + 1
        } else {
          v = c
        }
      }
      // u:二分法计算结果; result[u]:检索到的索引([0, result,length - 1]); goal=arr[result[u]]
      // arrI <= arr[result[result.length - 1]] => goal必定大于或等于arrI
      // arrI < goal 需要替换 => result[u]值，替换成更小的数字arrI的索引index
      // arrI === goal 不做处理
      if (arrI < arr[result[u]]) {
        // u == 0，不需要记录前一个索引数据
        if (u > 0) {
          p[i] = result[u - 1] // 记录序列中，前一个值的索引
        }
        result[u] = i // result[u]值，替换成更小的数字arrI的索引index
      }
    }
  }
  // result 每个节点都记录了当前位置处(即当前的长度下)，最小尾部数值的索引
  u = result.length
  v = result[u - 1]
  while (u-- > 0) {
    result[u] = v
    v = p[v]
  }
  return result
}
```

## 文献参考

>  https://en.wikipedia.org/wiki/Longest_increasing_subsequence
