---
meta:
  - name: keywords
    content: vue3源码解析,diff算法
  - name: description
    content: vue3源码解析-diff算法
---

# vue3-diff算法解析

> *packages/runtime-core/src/renderer.ts*: 基于 `baseCreateRenderer` => `patch`函数

浏览器中DOM的创建与操作是很耗费性能的，vue3组件更新时，会先对新旧`vnode`进行比较，确定不需要更新的节点和可以重复利用的节点，以避免不必要的DOM创建与操作。

上述过程中，会使用`patch`函数对比`new vnode`和`old vnode`，patch过程中根据vnode的[*`PatchFlags`*](#patchflags)标识的确定具体使用的diff方法。

1. 仅进行同级比较
2. 标识数vdom类型patchflags，确定具体的diff方法
3. vdom添加key，diff时通过判断key与type，确定可复用的节点

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
  // 例如，1. 在renderSlot()创建的块片段上，遇到非编译器生成的插槽（即手写的render函数，应该始终fully diffed）； 2. manually cloneVNodes(手动克隆节点)
  BAIL = -2
```

### ELEMENT-processElement

核心*patchElement*

> if (n1 == null) {  mountElement(...res)  } else { patchElement(...res) }

### COMPONENT-processComponent

触发实例的upate方法

## patchChildren

`processElement | processFragment`方法的核心就是`patchChildren`

```mermaid
flowchat
start=>start: 开始
end=>end: 结束
patch=>condition: Fragment/Element(Element?)
processElement=>subroutine: processElement
processFragment=>subroutine: processFragment
patchElement=>subroutine: patchElement
patchChildren=>condition: patchChildren (children有无key)
patchUnkeyedChildren=>subroutine: patchUnkeyedChildren
patchKeyedChildren=>subroutine: patchKeyedChildren
patchBlockChildren=>subroutine: patchBlockChildren
dynamicChildren=>condition: dynamicChildren

start->patch
patch(yes)->processElement->processElement->dynamicChildren
patch(no)->processFragment->dynamicChildren
dynamicChildren(yes)->patchBlockChildren->patch
dynamicChildren(no)->patchChildren(no)->patchUnkeyedChildren->end
patchChildren(yes)->patchKeyedChildren->end
```


```ts
const patchChildren = () => {
  const c1 = n1 && n1.children
  const prevShapeFlag = n1 ? n1.shapeFlag : 0
  const c2 = n2.children

  const { patchFlag, shapeFlag } = n2
  if (patchFlag > 0) {
    // fully-keyed or mixed (some keyed some not)
    if (patchFlag & PatchFlags.KEYED_FRAGMENT) { patchKeyedChildren(...)  return }
    // // unkeyed
    else if (patchFlag & PatchFlags.UNKEYED_FRAGMENT) { patchUnkeyedChildren(...) return }
  // children可能是 text、array、或者null
  // new:text
  if (shapeFlag & ShapeFlags.TEXT_CHILDREN) {
    // prev:array => new:text 先卸载
    if (prevShapeFlag & ShapeFlags.ARRAY_CHILDREN) {
      unmountChildren(c1 as VNode[], parentComponent, parentSuspense)
    }
    // c1|c2不相等 直接处理新数据
    if (c2 !== c1) {
      hostSetElementText(container, c2 as string)
    }
  } else {
    if (prevShapeFlag & ShapeFlags.ARRAY_CHILDREN) {
      // prev:array => array
      if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
        // 新旧都是array，直接full diff
        patchKeyedChildren(...)
      } else {
        // 新的是text|null，直接卸载
        unmountChildren(...)
      }
    // prev: text|null
    // new: arr|null
    } else {
      // prev:text 设置text = ''
      if (prevShapeFlag & ShapeFlags.TEXT_CHILDREN) {
        hostSetElementText(container, '')
      }
      // new: array 直接挂载
      if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
        mountChildren(...)
      }
    }
  }
}
```

## patchUnkeyedChildren

对于无key的children，直接遍历逐个节点执行`patch`

```ts
const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR
    c2 = c2 || EMPTY_ARR
    const oldLength = c1.length
    const newLength = c2.length
    // 获取公共长度，遍历
    const commonLength = Math.min(oldLength, newLength)
    let i
    for (i = 0; i < commonLength; i++) {
      // 获取c2节点，逐个patch `c1`, `c2`
      const nextChild = (c2[i] = optimized ? cloneIfMounted(c2[i] as VNode) : normalizeVNode(c2[i]))
      patch(c1[i], nextChild, ...)
    }
    // 移除多余节点或者新增节点
    if (oldLength > newLength) {
      // remove old
      unmountChildren(c1,parentComponent,parentSuspense, true, false, commonLength)
    } else {
      // mount new
      mountChildren(c2,container,anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized,commonLength)
    }
  }
```

## patchKeyedChildren

设置遍历指针：i, e1, e2

```ts
const patchKeyedChildren = (
    c1: VNode[],
    c2: VNodeArrayChildren,
    container: RendererElement,
    parentAnchor: RendererNode | null,
    parentComponent: ComponentInternalInstance | null,
    parentSuspense: SuspenseBoundary | null,
    isSVG: boolean,
    slotScopeIds: string[] | null,
    optimized: boolean
  ) => {
    let i = 0
    const l2 = c2.length
    let e1 = c1.length - 1 // prev ending index
    let e2 = l2 - 1 // next ending index
  }
```

### 1. sync from start

从初始节点开始，逐对遍历对比c1&c2：
1. `isSameVNodeType`节点进行`patch`，开始指针i--
2.  不符合直接跳出循环，进入下一步

```ts
// 1. sync from start
// (a b) c
// (a b) d e
while (i <= e1 && i <= e2) {
  const n1 = c1[i]
  const n2 = (c2[i] = optimized
    ? cloneIfMounted(c2[i] as VNode)
    : normalizeVNode(c2[i]))
  if (isSameVNodeType(n1, n2)) {
    patch(n1, n2, container, null, parentComponent,
    parentSuspense, isSVG, slotScopeIds, optimized)
  } else {
    break
  }
  i++
}
```

### 2. sync from end

从尾节点开始，逐对遍历对比c1&c2：
1. `isSameVNodeType`节点进行`patch`，开始指针e2--，e2--
2. 不符合直接跳出循环，进入下一步

```ts
// 2. sync from end
// a (b c)
// d e (b c)
while (i <= e1 && i <= e2) {
  const n1 = c1[e1]
  const n2 = (c2[e2] = optimized
    ? cloneIfMounted(c2[e2] as VNode)
    : normalizeVNode(c2[e2]))
  if (isSameVNodeType(n1, n2)) {
    patch(n1, n2, container, null, parentComponent,
    parentSuspense, isSVG, slotScopeIds, optimized)
  } else {
    break
  }
  e1--
  e2--
}
```

### 3-4. common sequence + mount 、 unmount

c1或者c2其有任一个遍历完成执行这一步：
1. c1先遍历完成(i > e1)，如果仍有c2未处理(i <= e2)，调用patch直接挂载剩余节点，i++
2. c2先遍历完成(i > e2)，如果仍有c2未处理(i <= e1)，直接调用unmount卸载多余节点，i++

```ts
// 3. common sequence + mount
// (a b)
// (a b) c
// i = 2, e1 = 1, e2 = 2
// (a b)
// c (a b)
// i = 0, e1 = -1, e2 = 0
if (i > e1) {
  if (i <= e2) {
    const nextPos = e2 + 1
    const anchor = nextPos < l2 ? (c2[nextPos] as VNode).el : parentAnchor
    while (i <= e2) {
      patch(
        null, 
        (c2[i] = optimized? cloneIfMounted(c2[i] as VNode): normalizeVNode(c2[i])),
        container, anchor, parentComponent,  parentSuspense,
        isSVG, slotScopeIds, +optimized
      )
      i++
    }
  }
}
// 4. common sequence + unmount
// (a b) c
// (a b)
// i = 2, e1 = 2, e2 = 1
// a (b c)
// (b c)
// i = 0, e1 = 0, e2 = -1
else if (i > e2) {
  while (i <= e1) {
    unmount(c1[i], parentComponent, parentSuspense, true)
    i++
  }
}
else { /* 5 */ }
```

### 5. unknown sequence

1. 遍历c2剩余节点i-e2，如果新节点存在key，则使用`map`存储节点-索引({key: i})

2. 生成新旧节点的索引对照数组：[ newIndex - s2] : [oldIndex + 1]

    1. unmount多余旧节点
    2. 旧节点为匹配到新节点，unmount
    3. 根据索引大小，判断节点是否移动
    4. 匹配的新旧节点patch

3. move and mount，获取最大增长长度，对应的dom，不用变更
    1. 倒序遍历c2
    2. 未匹配到的节点，patch新增
    3. 匹配到的节点，判断是否是最大增长长度对应的节点，不是改类型节点，直接移动

``` ts
// 5. unknown sequence
// [i ... e1 + 1]: a b [c d e] f g
// [i ... e2 + 1]: a b [e d c h] f g
// i = 2, e1 = 4, e2 = 5
else {
  const s1 = i // prev starting index
  const s2 = i // next starting index

  // 5.1 build key:index map for newChildren
  const keyToNewIndexMap: Map<string | number, number> = new Map()
  for (i = s2; i <= e2; i++) {
    const nextChild = (c2[i] = optimized ? cloneIfMounted(c2[i] as VNode) : normalizeVNode(c2[i]))
    if (nextChild.key != null) { // 存在key，则记录key对应的索引
      keyToNewIndexMap.set(nextChild.key, i)
    }
  }

  // 5.2 loop through old children left to be patched and try to patch
  // matching nodes & remove nodes that are no longer present
  let j
  let patched = 0
  const toBePatched = e2 - s2 + 1 // c2剩余数量
  let moved = false
  // 用于追踪 节点是否move
  let maxNewIndexSoFar = 0
  // 创建新旧节点对照索引标识，长度为待patch的新节点长度 
  // [newIndex - s2] : [oldIndex + 1]
  const newIndexToOldIndexMap = new Array(toBePatched)
  for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0
  // s1 => e1 遍历剩余旧节点
  for (i = s1; i <= e1; i++) {
    const prevChild = c1[i]
    if (patched >= toBePatched) {
      // 新的都已被patched，多余的旧节点移除
      unmount(prevChild, parentComponent, parentSuspense, true)
      continue
    }
    let newIndex
    if (prevChild.key != null) { 
      // 旧数据存在key，直接查询新节点map是否有同样的key，并获取其索引
      newIndex = keyToNewIndexMap.get(prevChild.key)
    } else {
      // key-less node, try to locate a key-less node of the same type
      // 遍历剩余新节点
      for (j = s2; j <= e2; j++) {
        // eq(0) && isSameVNodeType
        if (
          // j - s2 => 新节点的在索引标识中的 index
          newIndexToOldIndexMap[j - s2] === 0 &&
          isSameVNodeType(prevChild, c2[j] as VNode)
        ) {
          newIndex = j
          break
        }
      }
    }
    if (newIndex === undefined) {
      // 未匹配对应的新节点，卸载旧节点
      unmount(prevChild, parentComponent, parentSuspense, true)
    } else {
      // 新旧节点已匹配
      // i + 1 => 旧节点index + 1，=> 避免index = 0时，无法区分是否匹配过
      newIndexToOldIndexMap[newIndex - s2] = i + 1
      if (newIndex >= maxNewIndexSoFar) {
        // newIndex>=记录值(默认0)，重新赋值
        maxNewIndexSoFar = newIndex
      } else {
        // 新索引小于上次记录值，说明节点相对上一个节点前后位置移动了
        moved = true
      }
      patch(prevChild, c2[newIndex] as VNode, container, null,
        parentComponent, parentSuspense, isSVG, slotScopeIds, optimized)
      // 已匹配数量+1
      patched++
    }
  }

  // 5.3 move and mount
  // generate longest stable subsequence only when nodes have moved
  const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR
  j = increasingNewIndexSequence.length - 1
  // looping backwards so that we can use last patched node as anchor
  for (i = toBePatched - 1; i >= 0; i--) {
    const nextIndex = s2 + i
    const nextChild = c2[nextIndex] as VNode
    const anchor =
      nextIndex + 1 < l2 ? (c2[nextIndex + 1] as VNode).el : parentAnchor
    if (newIndexToOldIndexMap[i] === 0) {
      // mount new
      patch( null, nextChild, container, anchor, parentComponent,
        parentSuspense, isSVG, slotScopeIds, optimized)
    } else if (moved) {
      // move if:
      // There is no stable subsequence (e.g. a reverse)
      // OR current node is not among the stable sequence
      if (j < 0 || i !== increasingNewIndexSequence[j]) {
        move(nextChild, container, anchor, MoveType.REORDER)
      } else {
        j--
      }
    }
  }
}
```

### getSequence

???

[最大增加序列](https://en.wikipedia.org/wiki/Longest_increasing_subsequence)

```js
function getSequence(arr: number[]): number[] {
  const p = arr.slice()
  const result = [0]
  let i, j, u, v, c
  const len = arr.length
  for (i = 0; i < len; i++) {
    const arrI = arr[i]
    if (arrI !== 0) {
      j = result[result.length - 1]
      // arrJ < arrI
      if (arr[j] < arrI) {
        p[i] = j
        result.push(i)
        continue
      }
      u = 0
      v = result.length - 1
      while (u < v) {
        c = ((u + v) / 2) | 0 // 取中间数
        if (arr[result[c]] < arrI) {
          u = c + 1
        } else {
          v = c
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1]
        }
        result[u] = i
      }
    }
  }
  u = result.length
  v = result[u - 1]
  while (u-- > 0) {
    result[u] = v
    v = p[v]
  }
  return result
}

```

待补充源码

