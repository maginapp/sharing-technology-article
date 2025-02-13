---
meta:
  - name: keywords
    content: execCommand,Clipboard,copy
  - name: description
    content: 文本复制方法简介:execCommand,Clipboard,复制操作添加版权信息
---

# 文本复制方法简介

## CopyEvent/CutEvent

1. 监听`cut`/`copy`事件
2. 调用`window.getSelection()`获取选中内容
3. 添加/修改自定义文本
4. 调用`e.clipboardData.setData`设置最新文本
5. `e.preventDefault()`阻止默认行为


```js
let box = document.querySelector('body');
box.addEventListener('cut', function(e) {
    console.log('cut')
    copyText(e)
})
box.addEventListener('copy', function(e) {
    console.log('copy')
    copyText(e)
})

function copyText (e) {
    const msg = window.getSelection() + '\n// 来源：maginapp\n// 链接：' + location.origin + location.pathname + '\n//商业转载请联系授权，非商业转载请注明出处'
    e.clipboardData.setData("text/plain", msg)
    e.preventDefault()
}
```

### DataTransfer

`clipboardData`是一个[DataTransfer](https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer)对象

`DataTransfer`对象常用于保存拖动并放下（drag and drop）过程中的数据。它可以保存一项或多项数据，这些数据项可以是一种或者多种数据类型

### tips

`IE`: `clipboardData`是`window`的属性
`Chrome 42+`/`Safari 29+`/`Firefox 41+`: clipboardData对象是event对象(click, keydown, etc)的属性。

## 调整复制文本选区/光标

`selection`是一个[Selection](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection)对象
`range`是一个[Range](https://developer.mozilla.org/en-US/docs/Web/API/Range)对象

### Selection

[Selection/modify](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection/modify)

> sel.modify(alter, direction, granularity)

```js
// 扩展选区
document.body.onCopy = function modifySelection () {
  var selection = window.getSelection()
  selection.modify("extend", "forward", "word")
}
// 调整光标
document.body.onCopy = function modifyCursorPosition () {
  var selection = window.getSelection()
  selection.modify("move", "forward", "character")
}
```
### Range

[SeleRangection/setStart](https://developer.mozilla.org/en-US/docs/Web/API/Range/setStart)

```js
function modifyRange () {
  var selection = window.getSelection()
  var range  = selection.getRangeAt(0)
  // 光标后移一位
  r.setStart(r.commonAncestorContainer, r.startOffset + 1)
  // 自动调用Selection.toString()生成字符串
  window.alert(selection)
}
```

## 自定义点击复制功能-1

`navigator.clipboard`

```js
navigator.clipboard.writeText(text).then(
  () => {
    console.log('success')
  },
  () => {
    console.log('fail')
  }
)
```

## 自定义点击复制功能-2

> [vue-clipboard2](https://github.com/Inndy/vue-clipboard2)

### 元素创建

1. 创建目标元素`element`
2. 添加style样式，利用定位隐藏元素
3. 添加待复制信息，`element`添加到`container`中

```js
// 文档方向
const isRTL = document.documentElement.getAttribute('dir') == 'rtl' // ltr rtl

const element = document.createElement('textarea')
// Prevent zooming on iOS
element.style.fontSize = '12pt'
// Reset box model
element.style.border = '0'
element.style.padding = '0'
element.style.margin = '0'
// Move element out of screen horizontally
element.position = 'absolute'
element[ isRTL ? 'right' : 'left' ] = '-9999px'
// Move element to the same position vertically
let yPosition = window.pageYOffset || document.documentElement.scrollTop
element.style.top = `${yPosition}px`

element.setAttribute('readonly', '')
element.value = text

container.appendChild(element)
```

### 获取文本信息

1. 创建`selection`/`range`
2. 添加目标元素`element`到`range`
3. 清除旧`ranges`并添加新的`selection`
4. 获取数据

```js
var selection = window.getSelection()
var range = document.createRange()

range.selectNodeContents(element)
selection.removeAllRanges()
selection.addRange(range)

selectedText = selection.toString()
```
### 执行复制

```js
document.execCommand('copy')
```

## 引用

[Selection](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection)

[Range](https://developer.mozilla.org/en-US/docs/Web/API/Range)

[ClipboardEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/ClipboardEvent)

[Navigator-clipboard](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/clipboard)

[Clipboard](https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard)

[vue-clipboard2](https://github.com/Inndy/vue-clipboard2)

[execCommand](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/execCommand)
