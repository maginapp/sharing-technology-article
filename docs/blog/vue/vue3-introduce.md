---
meta:
  - name: keywords
    content: vue3源码解析,vue3简介
  - name: description
    content: vue3源码解析-vue3简介
---

# vue3

## 简介

vue3设计目标: 

* 更小 Tree shaking

`Tree shaking` 是一种通过清除多余代码方式来优化项目打包体积的技术，专业术语叫 `Dead code elimination`

* 更快

  * Proxy
  * 模板代码，动态和静态代码

* TypeScript支持

## vue3-rfcs

[vuejs/rfcs/active-rfcs/](https://github.com/vuejs/rfcs/tree/master/active-rfcs)

* componsition api

* 去除 filter

* 去除 data object declaration

* render api 修改

* Remove keyCode support 

<ImgWithBase src="/sharp/vue3-rfcs-1.webp" alt="vscode-multi-column" style="width:100%;max-width:1200px;"/>
<ImgWithBase src="/sharp/vue3-rfcs-2.webp" alt="vscode-multi-column" style="width:100%;max-width:1200px;"/>


## 源码学习

基于 `vue3@3.0.0-rc.5`

* `/packages/reactivity` 响应式核心代码