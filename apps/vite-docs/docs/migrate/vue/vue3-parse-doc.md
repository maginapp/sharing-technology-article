---
meta:
  - name: keywords
    content: vue3源码解析,目录
  - name: description
    content: vue3源码解析-目录
---

# vue3解析

源码阅读笔记，暂未做整体梳理

* [vue3-简介](./vue3-introduce)
* [vue3-reactivity响应式简析](./vue3-reactive)
* [vue3-effect-api相关解析](./vue3-effect-api)
* [vue3-scheduler-nextTick](./vue3-scheduler)
* [vue3-render](./vue3-render)
* [vue3-vnode](./vue3-vnode)
* [vue3-diff算法解析](./vue3-diff)
* [vue3-元素渲染流程简介](./vue3-mountelement)

待完成~

* [vue3-lifecycle生命周期简析](./vue3-lifecycle)
* [vue3-compiler](./vue3-compiler)
    1. `baseParse` 创建带渲染模板的`ast`树
    2. `transform` 将`ast`树转化为`genCode`，其中`createRootCodegen`是处理DOM元素的，会创建`codegenNode`
    3. `generate`生成`with`包裹的可执行代码字符串: 将this修改为当前实例，使用`genNode`处理`codegenNode`，生成对应的vnode方法

> `finishComponentSetup` => `compile`instance.template，创建渲染函数`render`
>
>  编译结果分析，template编译优化

* [vue3-renderComponentRoot](./vue3-rendercomponentroot)
渲染函数执行