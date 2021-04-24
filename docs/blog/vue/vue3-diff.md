---
meta:
  - name: keywords
    content: vue3源码解析,diff算法
  - name: description
    content: vue3源码解析-diff算法
---

# vue3-diff算法解析

> *packages/runtime-core/src/renderer.ts*: 基于 `baseCreateRenderer` => `patch`函数

浏览器中DOM的创建与操作是很耗费性能的，vue3组件更新时，会先对新旧`vnode`进行比较，确定不需要更新的节点和可以重复利用的节点，以避免不必要的DOM创建与操作

上述过程中，会使用`patch`函数对比`new vnode`和`old vnode`，patch过程中根据vnode的[*`PatchFlags`*](#patchflags)标识的确定具体使用的diff方法

## patch

```ts
const patch: PatchFn = (
  n1, // old vnode   VNode | null
  n2, // new vnode
  container, // container => dom元素  container._vnode = vnode
  anchor = null, // 锚
  parentComponent = null, // 父组件
  parentSuspense = null, // 父级组件包含Suspense
  isSVG = false,
  slotScopeIds = null,
  optimized = false // ???是否使用 优化模式
) => {
  // 存在旧节点，SameVNodeType => vode.type vnode.key相等
  if (n1 && !isSameVNodeType(n1, n2)) {
    anchor = getNextHostNode(n1)
    unmount(n1, parentComponent, parentSuspense, true) // 卸载
    n1 = null // 清除n1
  }

  if (n2.patchFlag === PatchFlags.BAIL) {
    optimized = false
    n2.dynamicChildren = null
  }

  const { type, ref, shapeFlag } = n2
  // 根据 type/shapeFlag确定diff方法
  switch (type) {
    case Text:
      processText(n1, n2, container, anchor)
      break
    case Comment:
      processCommentNode(n1, n2, container, anchor)
      break
    case Static:
      if (n1 == null) {
        mountStaticNode(n2, container, anchor, isSVG)
      } else if (__DEV__) {
        patchStaticNode(n1, n2, container, isSVG)
      }
      break
    case Fragment:
      // 处理多节点组件
      processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)
      break
    default:
      if (shapeFlag & ShapeFlags.ELEMENT) {
        // optimized 传递
        // processElement => patchElement => patchProps
        //                => mountElement => mountChildren => patch
        // 处理element
        processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)
      } else if (shapeFlag & ShapeFlags.COMPONENT) {
        // optimized 传递
        // processComponent => instabce.ctx.activate
        //                  => mountComponent => setupRenderEffect => updateComponentPreRender => updateProps
        // 内部触发实例的upate方法
        processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)
      } else if (shapeFlag & ShapeFlags.TELEPORT) {
        ;(type as typeof TeleportImpl).process(
          n1 as TeleportVNode,
          n2 as TeleportVNode,
          container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, 
          internals
        )
      } else if (__FEATURE_SUSPENSE__ && shapeFlag & ShapeFlags.SUSPENSE) {
        ;(type as typeof SuspenseImpl).process(
          n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized
          internals
        )
      } else if (__DEV__) {
        warn('Invalid VNode type:', type, `(${typeof type})`)
      }
  }
  // 设置ref
  if (ref != null && parentComponent) {
    setRef(ref, n1 && n1.ref, parentSuspense, n2)
  }
}
```

### isSameVNodeType

> n1.type === n2.type && n1.key === n2.key

### PatchFlags

> *packages/shared/src/patchFlags.ts*

> 翻译：
>
> `PatchFlags`是编译时生成的优化提示。
>
> 当diff过程中遇到`dynamicChildren `时，算法进入“优化模式”。在这种模式下，我们知道vdom是编译时的render函数生成的，因此算法只需要处理由`PatchFlags`显式标记的更新。

```ts
export const enum PatchFlags {
  TEXT = 1, // dynamic textContent
  CLASS = 1 << 1, //  dynamic class binding.
  STYLE = 1 << 2, // dynamic style
  PROPS = 1 << 3, //  non-class/style dynamic props => vnode has a dynamicProps array
  FULL_PROPS = 1 << 4, // dynamic keys 与 CLASS, STYLE and PROPS 互斥
  HYDRATE_EVENTS = 1 << 5, // event listeners (which need to be attached during hydration)
  STABLE_FRAGMENT = 1 << 6, // 子级顺序不变的FRAGMENT 
  KEYED_FRAGMENT = 1 << 7, // 子级有key或部分有key的FRAGMENT 
  UNKEYED_FRAGMENT = 1 << 8, //  a fragment with unkeyed children
  NEED_PATCH = 1 << 9, //  an element that only needs non-props patching, e.g. ref or  directives (onVnodeXXX hooks)
  DYNAMIC_SLOTS = 1 << 10, // a component with dynamic slots
  DEV_ROOT_FRAGMENT = 1 << 11,
  HOISTED = -1, // static vnode.
  // 一个特殊的标志，标识diff算法应跳出优化模式。
  // 例如，在renderSlot()创建的块片段上，遇到非编译器生成的插槽（即手写的render函数，应该始终fully diffed） 例如，手动关闭节点
  BAIL = -2
```

### ELEMENT-processElement

核心*patchElement*

> if (n1 == null) {  mountElement(...res)  } else { patchElement(...res) }

### COMPONENT-processComponent

触发实例的upate方法


## patchChildren

以下几个方法的核心就是`patchChildren`

* processElement
* processFragment


```mermaid
flowchat
start=>start: 开始
end=>end: 结束
patch=>condition: Fragment/Element(yes)
processElement=>subroutine: processElement
processFragment=>subroutine: processFragment
patchElement=>subroutine: patchElement
patchChildren=>subroutine: patchChildren
patchBlockChildren=>subroutine: patchBlockChildren
dynamicChildren=>condition: dynamicChildren

start->patch
patch(yes)->processElement->processElement->dynamicChildren
patch(no)->processFragment->dynamicChildren
dynamicChildren(yes)->patchBlockChildren->patch
dynamicChildren(no)->patchChildren->end
```

待补充源码

