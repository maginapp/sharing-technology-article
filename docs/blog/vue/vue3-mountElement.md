---
meta:
  - name: keywords
    content: vue3源码解析,mountElement
  - name: description
    content: vue3源码解析-mountElement
---

# vue3元素渲染流程简介

## 简单渲染流程

以下面这段代码渲染为例：

```js
<div id="app">
  <div>{{a}}</div>
</div>

createApp({
  setup() {
    return {
      a: ref(1)
    }
  }
}).mount('#app')
```

```mermaid
flowchat
start=>start: Start|past:>http://www.google.com[blank]
createApp=>operation: instance=createApp，instance.mount
mount=>operation: instance.mount
createNode=>operation: createNode
render=>operation: render
patch=>operation: patch
processComponent=>operation: processComponent
mountComponent=>operation: mountComponent
createComponentInstance=>operation: createComponentInstance 创建组件实例
setupComponent=>operation: setupComponent，初始化数据(setup|beforeCreate|created执行):>#setupcomponent
setupRenderEffect=>operation: setupRenderEffect，创建依赖
instanceUpdate=>operation: instance.update创建与执行
renderComponentRoot=>operation: 格式化实例instance.subTree = renderComponentRoot(instance)
patch2=>operation: patch-subTree
processElement=>operation: processElement
mountElement=>operation: mountElement:>#mountelement
end=>end: End (beforeMount等钩子执行)

start->createApp(right)->mount(bottom)->createNode(left)->render(bottom)->patch(right)->processComponent(bottom)->mountComponent(right)->createComponentInstance->setupComponent(bottom)->setupRenderEffect(right)->instanceUpdate(bottom)->renderComponentRoot(left)->patch2(bottom)->processElement(right)->mountElement->end
```
1. patch组件 => mountComponent
2. 初始化数据，创建effect
3. 内部effect执行
    * 未挂载: 生成subtree 进行patch挂载
    * 已挂载: 由数据变更触发，patch(prevTree, nextTree)

## mountComponent

`mountComponent`会执行`setupRenderEffect`，创建依赖

```ts
const mountComponent: MountComponentFn = (
    initialVNode, container, anchor, parentComponent,
    parentSuspense, isSVG, optimized ) => {
    // 创建组件实例
    const instance: ComponentInternalInstance = (initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    ))
    ...
    // 性能监控
    startMeasure(instance, `init`)
    // 执行setup
    setupComponent(instance)
    endMeasure(instance, `init`)
    ...
    // setup() is async. This component relies on async logic to be resolved
    // before proceeding
    if (__FEATURE_SUSPENSE__ && instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect)
      ...
      return
    }

    setupRenderEffect(instance, initialVNode,  container,
      anchor, parentSuspense, isSVG, optimized )
    ...
  }
```


## createComponentInstance

创建组件实例，完成初始化

```ts
let uid = 0
export function createComponentInstance(vnode: VNode,
  parent: ComponentInternalInstance | null,
  suspense: SuspenseBoundary | null
) {
  const type = vnode.type as ConcreteComponent
  // inherit parent app context - or - if root, adopt from root vnode
  const appContext =
    (parent ? parent.appContext : vnode.appContext) || emptyAppContext

  const instance: ComponentInternalInstance = {
    uid: uid++, vnode, type, parent, appContext, root: null!, // to be immediately set
    next: null, subTree: null!, // will be set synchronously right after creation
    update: null!, // will be set synchronously right after creation
    render: null, proxy: null, exposed: null, withProxy: null, effects: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null!, renderCache: [],
    // local resovled assets
    components: null, directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext), 
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null as any, // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // state
    ctx: EMPTY_OBJ, data: EMPTY_OBJ, props: EMPTY_OBJ, attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ, refs: EMPTY_OBJ, setupState: EMPTY_OBJ, setupContext: null,
    // suspense related
    ...
    // lifecycle hooks
    // not using enums here because it results in computed properties
    ...
  }
  instance.ctx = { _: instance }
  instance.root = parent ? parent.root : instance
  instance.emit = emit.bind(null, instance)

  return instance
}
```

## setupComponent

1. initProps，initSlots
2. 执行setup，配合`pauseTracking | resetTracking`，不进行依赖收集，生成proxy
3. 执行complier处理template，生成 **instance.render**
    1. `baseParse` 创建带渲染模板的`ast`树
    2. `transform` 将`ast`树转化为`genCode`，其中`createRootCodegen`是处理DOM元素的，会创建`codegenNode`
    3. `generate`生成`with`包裹的可执行代码字符串: 将this修改为当前实例，使用`genNode`处理`codegenNode`，生成对应的vnode方法
4. applyOptions，混合vue2x的方法与属性(data/mixins)，`proxy[[Target]]`添加内容，配合`pauseTracking | resetTracking`，不进行依赖收集

```ts
export function setupComponent(
  instance: ComponentInternalInstance,
  isSSR = false
) {
  isInSSRComponentSetup = isSSR

  const { props, children } = instance.vnode
  const isStateful = isStatefulComponent(instance)
  initProps(instance, props, isStateful, isSSR)
  initSlots(instance, children)

  const setupResult = isStateful
    ? setupStatefulComponent(instance, isSSR)
    : undefined
  isInSSRComponentSetup = false
  return setupResult
}
```

### render函数示例

> [vue3-compiler | render函数解析](./vue3-compiler)

template代码:

```html
<div id="app">
  <h1>juest - test </h1>
  <div>
    <div>{{a}}</div>
    <p :class="[a]">{{a}}</p>
  </div>
  <p :id="a">{{a}}</p>
</div>
```

编译后：

```js
const _Vue = Vue
const { createVNode: _createVNode } = _Vue
// 静态代码
const _hoisted_1 = /*#__PURE__*/_createVNode("h1", null, "juest - test ", -1 /* HOISTED */)

return function render(_ctx, _cache) {
  // 利用with，设置代码内的this指向
  with (_ctx) {
    const { createVNode: _createVNode, toDisplayString: _toDisplayString, Fragment: _Fragment, openBlock: _openBlock, createBlock: _createBlock } = _Vue

    return (_openBlock(), _createBlock(_Fragment, null, [
      _hoisted_1,
      _createVNode("div", null, [
        _createVNode("div", null, _toDisplayString(a), 1 /* TEXT */),
        _createVNode("p", { class: [a] }, _toDisplayString(a), 3 /* TEXT, CLASS */)
      ]),
      _createVNode("p", { id: a }, _toDisplayString(a), 9 /* TEXT, PROPS */, ["id"])
    ], 64 /* STABLE_FRAGMENT */))
  }
}
```

## setupRenderEffect设置effect

内部会格式化的实例，调用响应式数据，渲染页面，详见[effect-api | setupRenderEffect](./vue3-effect-api.html#setuprendereffect)
## renderComponentRoot格式化模板

执行`setupComponent`生成的`render`函数，处理之前生成的vnode：

如添加渲染用数据，生成children，此时会获取响应式数据的值，进行**依赖收集**

## mountElement

```ts
  const mountElement = (
    vnode: VNode,
    container: RendererElement,
    anchor: RendererNode | null,
    parentComponent: ComponentInternalInstance | null,
    parentSuspense: SuspenseBoundary | null,
    isSVG: boolean,
    slotScopeIds: string[] | null,
    optimized: boolean
  ) => {
    let el: RendererElement
    let vnodeHook: VNodeHook | undefined | null
    const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode
    if (
      !__DEV__ &&
      vnode.el &&
      hostCloneNode !== undefined &&
      patchFlag === PatchFlags.HOISTED
    ) {
      // If a vnode has non-null el, it means it's being reused.
      // Only static vnodes can be reused, so its mounted DOM nodes should be
      // exactly the same, and we can simply do a clone here.
      // only do this in production since cloned trees cannot be HMR updated.
      el = vnode.el = hostCloneNode(vnode.el) // 克隆node节点 => el.cloneNode(deep)
    } else {
      el = vnode.el = hostCreateElement(vnode.type as string,isSVG,
        props && props.is,props) // 创建node节点

      // mount children first, since some props may rely on child content
      // being already rendered, e.g. `<select value>`
      // 子节点是 text 或者 children
      if (shapeFlag & ShapeFlags.TEXT_CHILDREN) {
        hostSetElementText(el, vnode.children as string)
      } else if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
        mountChildren(...) // 子元素处理
      }
      // 指令处理
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'created')
      }
      // props
      if (props) {
        for (const key in props) {
          // '"",key,ref,' +
          // 'onVnodeBeforeMount,onVnodeMounted,' +
          // 'onVnodeBeforeUpdate,onVnodeUpdated,' +
          // 'onVnodeBeforeUnmount,onVnodeUnmounted'
          if (!isReservedProp(key)) { 
            // 处理属性
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children as VNode[],
            parentComponent, parentSuspense, unmountChildren)
          }
        }
        if ((vnodeHook = props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode)
        }
      }
      // scopeId
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent)
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount')
    }
    // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
    // #1689 For inside suspense + suspense resolved case, just call it
    const needCallTransitionHooks =
      (!parentSuspense || (parentSuspense && !parentSuspense.pendingBranch)) &&
      transition &&
      !transition.persisted
    if (needCallTransitionHooks) {
      transition!.beforeEnter(el)
    }
    // 插入到父节点中
    hostInsert(el, container, anchor) // parent.insertBefore(child, anchor || null)
    if (
      (vnodeHook = props && props.onVnodeMounted) ||
      needCallTransitionHooks ||
      dirs
    ) {
      // 添加到pendingPostFlushCbs队列???确保了元素是挂载成功的
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode)
        needCallTransitionHooks && transition!.enter(el)
        dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted')
      }, parentSuspense)
    }
  }
```

### invokeVNodeHook

vnode的生命周期hooks的触发函数

```ts
export function invokeVNodeHook(
  hook: VNodeHook, // function | array
  instance: ComponentInternalInstance | null,
  vnode: VNode,
  prevVNode: VNode | null = null
) {
  callWithAsyncErrorHandling(hook, instance, ErrorCodes.VNODE_HOOK, [
    vnode,
    prevVNode
  ])
}
```
