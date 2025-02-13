---
meta:
  - name: keywords
    content: vscode,markdown,Sequence Diagram
  - name: description
    content: markdown Sequence Diagram
---

# Sequence Diagram

时序图简要用法

> vuepress未支持

```sequence
title: 这是标题
participant 对象A
Note left of 对象A: left消息
Note over 对象A: over消息
Note right of 对象A: right消息
对象A->对象B:How are you?
对象A-->对象B:How are you?
participant 对象C
```

