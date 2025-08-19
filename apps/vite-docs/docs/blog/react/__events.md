---
title: react事件
---


# Introduce

## 事件执行变更

事件执行顺序变化

1. react 16及之前

事件统一委托在document

```md
原生捕获 -> 原生冒泡 -> React合成捕获 -> React合成冒泡
```

2. react 16及之后

事件委托在应用根容器上

```md
根容器原生捕获 -> React合成捕获 -> 子元素原生捕获 -> 子元素原生冒泡 -> React合成冒泡  > 根容器合成冒泡
```

*React合成捕获*和*React合成冒泡*期间 会完成react虚拟dom树链条下的事件处理。因此createPortal创建的根容器外的元素也会触发根节点的React合成事件

### 结合createPortal

使用createPortal在根节点外，插入元素，只会冒泡到react到虚拟dom树

[![在CodeSandbox中打开](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/devbox/2nrx39)


// 离散事件（DiscreteEvent） 需要立即执行的事件 输入框的 onChange
const SyncLane: Lane = /*  */ 0b0000000000000000000000000000010;
// 空闲事件（IdleEvent）浏览器空闲时执行的事件，如预加载图片
const IdleLane: Lane = /* */ 0b0100000000000000000000000000000;
// 用户交互事件（UserBlockingEvent） 用户交互事件 click 滚动
const InputContinuousLane: Lane = /* */ 0b0000000000000000000000000001000;
// 普通事件（NormalEvent），数据更新、网络请求等，可等待一段时间再执行。
const DefaultLane: Lane = /* */ 0b0000000000000000000000000100000;
