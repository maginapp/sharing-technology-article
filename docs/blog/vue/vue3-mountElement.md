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
setupComponent=>operation: setupComponent，初始化数据(setup|beforeCreate|created执行)
setupRenderEffect=>operation: setupRenderEffect，创建依赖
instanceUpdate=>operation: instance.update创建与执行
renderComponentRoot=>operation: 格式化实例instance.subTree = renderComponentRoot(instance)
patch2=>operation: patch-subTree
processElement=>operation: processElement
mountElement=>operation: mountElement
end=>end: End (beforeMount等钩子执行)

start->createApp(right)->mount(bottom)->createNode(left)->render(bottom)->patch(right)->processComponent(bottom)->mountComponent(right)->setupComponent(bottom)->setupRenderEffect(right)->instanceUpdate(bottom)->renderComponentRoot(left)->patch2(bottom)->processElement(right)->mountElement->end
```
1. patch组件 => mountComponent
2. 初始化数据，创建effect
3. 内部effect执行
    * 未挂载: 生成subtree 进行patch挂载
    * 已挂载: 由数据变更触发，patch(prevTree, nextTree)
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

## mountComponent

`mountComponent`会执行`setupRenderEffect`，创建依赖

```ts
const mountComponent: MountComponentFn = (
    initialVNode,
    container,
    anchor,
    parentComponent,
    parentSuspense,
    isSVG,
    optimized
  ) => {
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

## setupRenderEffect设置effect

内部会格式化的实例，调用响应式数据，渲染页面
## renderComponentRoot格式化模板
