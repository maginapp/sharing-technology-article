---
meta:
  - name: keywords
    content: vue3源码解析,vue3简介
  - name: description
    content: vue3源码解析-vue3简介
---

# vue3简介

## 简介

vue3设计目标: 

* 更小 Tree shaking

`Tree shaking` 是一种通过清除多余代码方式来优化项目打包体积的技术，专业术语叫 `Dead code elimination`，[小红书面试官：介绍一下 tree shaking 及其工作原理](https://segmentfault.com/a/1190000038962700)

* 更快
    * 使用[`Proxy`](./vue3-reactive.html#createreactiveobject)替代之前的`Object.defineProperty`，速度更快
        * 对于引用类型的子数据，访问时，再会继续构造子`Proxy`数据，使得初始化更快
    * Vdom优化（待完成）
    * 模板代码优化，区分动态和静态代码（待完成）
    * 进行了更加高效的组件初始化（待完成）

* TypeScript支持

## vue3-rfcs

[尤雨溪: Vue Function-based API RFC](https://zhuanlan.zhihu.com/p/68477600)

[vuejs/rfcs/active-rfcs/](https://github.com/vuejs/rfcs/tree/master/active-rfcs)

* componsition api
* 去除 filter
* 去除 data object declaration
* render api 修改
* Remove keyCode support 
* `Fragments`，不限制 `template` 只有一个根节点

<ImgWithBase src="/sharp/vue3-rfcs-1.webp" alt="vscode-multi-column" styleData="width:100%;max-width:1200px;"/>
<ImgWithBase src="/sharp/vue3-rfcs-2.webp" alt="vscode-multi-column" styleData="width:100%;max-width:1200px;"/>


## 源码学习

基于 `vue3@3.0.9` ~~基于 `vue3@3.0.0-rc.5`~~


* */packages/reactivity* 响应式核心代码
* */packages/runtime-core* 核心代码