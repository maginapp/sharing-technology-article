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

上述过程中，会使用`patch`函数对比`new vnode`和`old vnode`

## patch

```ts
const patch: PatchFn = (
  n1, // old vnode   VNode | null
  n2, // new vnode
  container, // container => dom元素  container._vnode = vnode
  anchor = null,
  parentComponent = null,
  parentSuspense = null,
  isSVG = false,
  slotScopeIds = null,
  optimized = false
) => {
  // patching & not same type, unmount old tree
  if (n1 && !isSameVNodeType(n1, n2)) {
    anchor = getNextHostNode(n1)
    unmount(n1, parentComponent, parentSuspense, true)
    n1 = null
  }

  if (n2.patchFlag === PatchFlags.BAIL) {
    optimized = false
    n2.dynamicChildren = null
  }

  const { type, ref, shapeFlag } = n2
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
      processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)
      break
    default:
      if (shapeFlag & ShapeFlags.ELEMENT) {
        processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)
      } else if (shapeFlag & ShapeFlags.COMPONENT) {
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

  // set ref
  if (ref != null && parentComponent) {
    setRef(ref, n1 && n1.ref, parentSuspense, n2)
  }
}
```
