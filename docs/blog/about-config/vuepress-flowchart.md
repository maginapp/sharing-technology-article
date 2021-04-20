---
meta:
  - name: keywords
    content: vuepress,flowchat
  - name: description
    content: vuepress搭建网站踩坑
---

# flowchart绘图简要说明


## 常用元素

* start 开始
* end 结束
* operation 操作
* condition 判断
* inputoutput 输入输出
* subroutine 子程序

```md
flowchat
st=>start: 开始
e=>end: 结束
op=>operation: 我的操作
cond=>condition: 确认？
inout=>inputoutput: 输入
sub=>subroutine: 子程序

st->op->cond
cond(yes)->inout->sub->e
cond(no)->op
```

```mermaid
flowchat
st=>start: 开始
e=>end: 结束
op=>operation: 我的操作
cond=>condition: 确认？
inout=>inputoutput: 输入
sub=>subroutine: 子程序

st->op->cond
cond(yes)->inout->sub->e
cond(no)->op
```

## 箭头指向

left、right、bottom、top

> condition中top未生效??

```mdmd{14-16}
flowchat
st=>start: 开始
e=>end: 结束
op1=>operation: 操作1
op2=>operation: 操作2
op3=>operation: 操作3
op4=>operation: 操作4
cond=>condition: 确认1？
cond2=>condition: 确认2？
inout=>inputoutput: 输入
sub=>subroutine: 子程序

st->op1->cond
cond(no)->op2->op3(left)->op1
cond2(no, top)->op4(top)->op1
cond(yes, right)->cond2(yes, bottom)->inout->sub(right)->e
```

```mermaid
flowchat
st=>start: 开始
e=>end: 结束
op1=>operation: 操作1
op2=>operation: 操作2
op3=>operation: 操作3
op4=>operation: 操作4
cond=>condition: 确认1？
cond2=>condition: 确认2？
inout=>inputoutput: 输入
sub=>subroutine: 子程序

st->op1->cond
cond(no)->op2->op3(left)->op1
cond2(no, top)->op4(top)->op1
cond(yes, right)->cond2(yes, bottom)->inout->sub(right)->e
```

## 箭头颜色

支持`简写`和`hex`颜色写法

> cond2@>op4({"stroke":"#ff0000"})@>op1({"stroke":"#f0f"})@>cond({"stroke":"orange"})

```md{17,18}
st=>start: 开始|past
e=>end: 结束
op1=>operation: 操作1|current
op2=>operation: 操作2|future
op3=>operation: 操作3|approved
op4=>operation: 操作4|rejected
cond=>condition: 确认1？|invalid
cond2=>condition: 确认2？
inout=>inputoutput: 输入
sub=>subroutine: 子程序

st->op1->cond
cond(no)->op2->op3(left)->op1
cond2(no, top)->op4(top)->op1
cond(yes, right)->cond2(yes, bottom)->inout->sub(right)->e

st@>op1({"stroke":"Red"})@>cond({"stroke":"blue"})
cond2@>op4({"stroke":"#ff0000"})@>op1({"stroke":"#f0f"})@>cond({"stroke":"orange"})
```

```mermaid
flowchat
st=>start: 开始|past
e=>end: 结束
op1=>operation: 操作1|current
op2=>operation: 操作2|future
op3=>operation: 操作3|approved
op4=>operation: 操作4|rejected
cond=>condition: 确认1？|invalid
cond2=>condition: 确认2？
inout=>inputoutput: 输入
sub=>subroutine: 子程序

st->op1->cond
cond(no)->op2->op3(left)->op1
cond2(no, top)->op4(top)->op1
cond(yes, right)->cond2(yes, bottom)->inout->sub(right)->e

st@>op1({"stroke":"Red"})@>cond({"stroke":"blue"})
cond2@>op4({"stroke":"#ff0000"})@>op1({"stroke":"#f0f"})@>cond({"stroke":"orange"})
```

## 模块高亮

> vuepress自动为各模块添加了高亮效果，此处配置无效

* past
* current
* future
* approved
* rejected
* invalid


## flowchart-vuepress配置

[官网](http://flowchart.js.org/)

```js
['@maginapp/vuepress-plugin-flowchart', {'???????????': 'test'}]
```

```mermaid
flowchat
st=>start: 启动
e=>end: 结束
op=>operation: 我的操作
cond=>condition: 确认？

st->op->cond
cond(yes)->e
cond(no)->op
```

