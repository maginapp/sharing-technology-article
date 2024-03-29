---
meta:
  - name: keywords
    content: vue3解析,computed,watch/watchEffect
  - name: description
    content: vue3的effect-api相关解析
---

# vue3-effect-api相关解析
`packages/runtime-core/`

## computed
### usage

```js
// ref
const num = ref(1)
const numAdd = computed(() => num.value + 1) // numAdd 2
num.value++ // num 2 => numAdd 3

// setter getter
const count = ref(1)
let msg = computed({
  set(value) {
    count.value = value + 3
  },
  get() {
    return 'count is ' + count.value
  }
})
count.value = 5 // count is 5
msg._setter(6) /// count is 9

const data = reactive({a: 1})
const a = computed(() => data.a + 1) // 2
```

### 解析

`computed`会调用`ComputedRefImpl`生成 ref的包装对象，如果调用参数无`setter`函数时，则生成的是**只读对象**

```ts
export function computed<T>(
  getterOrOptions: ComputedGetter<T> | WritableComputedOptions<T>
) {
  let getter: ComputedGetter<T>
  let setter: ComputedSetter<T>

  if (isFunction(getterOrOptions)) {
    getter = getterOrOptions
    setter = NOOP
  } else {
    getter = getterOrOptions.get
    setter = getterOrOptions.set
  }

  return new ComputedRefImpl(
    getter,
    setter,
    isFunction(getterOrOptions) || !getterOrOptions.set // 无setter 只读
  ) as any
}

```

1. 生成computed，基于`getter`创建effct实例(以下称为`computedEffect`)，`_dirty: true`

2. 模板渲染获取computed
3. 执行get value
4. `_dirty: true` => 需要更新computed值

    1. 执行computedEffect，调用时会执行track，收集computed对内部响应式数据(以下称为`reactive`)的依赖
    2. computedEffect执行结果赋值给computed，使用computed._value缓存结果
    3. `_dirty: true` =>  `_dirty: false`， 避免重复调用`getter`
5. 模板渲染收集computedEffect

6. `reactive`数据变更
7. 执行`computedEffect`的options.scheduler

    1. `_dirty: false` => `_dirty: true` 标识computed需要更新了
    2.  触发依赖computed的所有`effect`
    3. 这些`effect`内部执行调用get value，重复第3步


```ts
class ComputedRefImpl<T> {
  private _value!: T
  private _dirty = true

  public readonly effect: ReactiveEffect<T>

  public readonly __v_isRef = true;
  public readonly [ReactiveFlags.IS_READONLY]: boolean

  constructor(
    getter: ComputedGetter<T>,
     // 此处的private _setter 会编译为
     // this._setter = _setter
    private readonly _setter: ComputedSetter<T>,
    isReadonly: boolean
  ) {
    // 创建effect 且不立即执行
    this.effect = effect(getter, {
      lazy: true, // 不会立即执行
      scheduler: () => {
        // computed内部依赖的响应式数据变更 => trigger触发scheduler 
        //    _dirty:false => 依赖数据已经更新 => 记录需要执行effect=>getter
        // _dirty:true => 结果已缓存
        if (!this._dirty) { 
          this._dirty = true // => dirty变更为true
          trigger(toRaw(this), TriggerOpTypes.SET, 'value') // 触发依赖computed的effect
        }
      }
    })

    this[ReactiveFlags.IS_READONLY] = isReadonly
  }
  // 获取value值时
  //   _dirty为真触发effect(computedEffect)
  //     computedEffect进入栈顶
  //     执行回调函数getter
  //         执行时 内部用到的响应式数据收集computedEffect
  //     computedEffect出栈
  //     _dirty置false
  //   track收集当前computed响应式数据的对应的activeffect
  get value() {
    // the computed ref may get wrapped by other proxies e.g. readonly() #3376
    const self = toRaw(this)
    if (self._dirty) { // 初始为真 执行effect()
      self._value = this.effect()
      self._dirty = false
    }
    track(self, TrackOpTypes.GET, 'value')
    return self._value
  }
  // _setter修改数据
  set value(newValue: T) {
    this._setter(newValue)
  }
}
```

## watch/watchEffect

### usage

```ts
const data = reactive({a: 1})
const num = ref(1)

const onBtnClick= () => {
  num.value += 1
  data.a += 1
}

watchEffect(() => {
    console.log('watchEffect', data.a) // 1
})

watch(() => num.value, (val, preVal) => {
    console.log('watch cb => ref', val, preVal) //  3 2
})
watch(num, (val, preVal) => {
    console.log('watch ref', val, preVal) // 3 2
})
watch(() => data.a, (val, preVal) => {
    console.log('watch cb => reactive', val == preVal, val, preVal) // false  2 1
})
watch(data, (val, preVal) => {
    console.log('watch reactive', val == preVal, val, preVal) // true Proxy {a: 2} Proxy {a: 2}
})

watch([num, () => data.a], ([num, a], [numOld, aOld]) => {
    console.log('watch array', num, a, numOld, aOld) // 3 2 2 1
})
```

### 解析

`watch`/`watchEffect`都是调用`doWatch`方法，创建`effect`

```ts
// watch
export function watch<T = any, Immediate extends Readonly<boolean> = false>(
  source: T | WatchSource<T>,
  cb: any,
  options?: WatchOptions<Immediate>
): WatchStopHandle {
  return doWatch(source as any, cb, options)
}

// watchEffect
export function watchEffect(
  effect: WatchEffect,
  options?: WatchOptionsBase
): WatchStopHandle {
  return doWatch(effect, null, options)
}
```

#### doWatch

1. 将传入的`watch source` 转化成 `getter`函数
    * watch source 只能是 `getter/effect function` , `ref`数据 , `reactive`数据，这些数据格式的`array`，`doWatch`内部是统一生成`getter`函数
2. 创建 `runner`: 基于getter 生成的`effect`
3. 创建 `job: SchedulerJob`，内部执行 runner 和`cb`
    * 无`cb`，直接执行runner
    * 有`cb`，runner()后，再调用 callWithAsyncErrorHandling 执行 `cb`
4. 创建`scheduler: ReactiveEffectOptions['scheduler']`，确定`job`的调用时间，[副作用刷新时机](https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E5%89%AF%E4%BD%9C%E7%94%A8%E5%88%B7%E6%96%B0%E6%97%B6%E6%9C%BA)
    * `flush:pre` 默认
    * `flush:post` 在组件更新后触发，这样你就可以访问更新的 DOM，注意：这也将推迟副作用的初始运行，直到组件的首次渲染完成。
    * `flush:sync` 强制始终同步触发。然而，这是低效的，应该很少需要
5. recordInstanceBoundEffect 记录 effects和component，方便卸载组件是处理
6. 根据doWatch 传入参数，确定执行 `runner` 和 `cb`
7. 返回watch清除方法

> [`scheduler`机制详见](./vue3-scheduler.html)

```ts
function doWatch(
  source: WatchSource | WatchSource[] | WatchEffect | object,
  cb: WatchCallback | null,
  { immediate, deep, flush, onTrack, onTrigger }: WatchOptions = EMPTY_OBJ,
  instance = currentInstance
): WatchStopHandle {
  
  // 生成getter函数  ==>
  let getter: () => any
  let forceTrigger = false
  if (isRef(source)) {
    getter = () => (source as Ref).value
    forceTrigger = !!(source as Ref)._shallow
  } else if (isReactive(source)) {
    getter = () => source
    deep = true // Reactive强制deep
  } else if (isArray(source)) {
    getter = () =>
      source.map(s => {
        if (isRef(s)) {
          return s.value
        } else if (isReactive(s)) {
          return traverse(s) // 数组中的Reactive递归处理数据
        } else if (isFunction(s)) {
          return callWithErrorHandling(s, instance, ErrorCodes.WATCH_GETTER, [
            instance && (instance.proxy as any)
          ])
        } else {
          __DEV__ && warnInvalidSource(s)
        }
      })
  } else if (isFunction(source)) { // 函数类型处理
    if (cb) {
      // getter with cb
      getter = () =>
        callWithErrorHandling(source, instance, ErrorCodes.WATCH_GETTER, [
          instance && (instance.proxy as any)
        ])
    } else {
      // no cb -> simple effect
      getter = () => {
        ...
        return callWithAsyncErrorHandling( source,instance,ErrorCodes.WATCH_CALLBACK,)
      }
    }
  } else { getter = NOOP; ... }
  
  if (cb && deep) { // cb && deep 包装getter数据
    const baseGetter = getter
    getter = () => traverse(baseGetter())
  }

  ...

  // job生成 ==>
  let oldValue = isArray(source) ? [] : INITIAL_WATCHER_VALUE
  const job: SchedulerJob = () => {
    if (!runner.active) {
      return
    }
    if (cb) {
      // watch(source, cb)
      const newValue = runner()
      if (deep || forceTrigger || hasChanged(newValue, oldValue)) {
        // cleanup before running cb again
        ...
        callWithAsyncErrorHandling(cb, instance, ErrorCodes.WATCH_CALLBACK, [
          newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue,
          onInvalidate
        ])
        oldValue = newValue
      }
    } else {
      // watchEffect
      runner()
    }
  }

  // important: mark the job as a watcher callback so that scheduler knows
  // it is allowed to self-trigger (#1727)
  job.allowRecurse = !!cb

  // scheduler创建 ==> 包装job
  let scheduler: ReactiveEffectOptions['scheduler']
  if (flush === 'sync') {
    scheduler = job
  } else if (flush === 'post') {
    scheduler = () => queuePostRenderEffect(job, instance && instance.suspense)
  } else {
    // default: 'pre'
    scheduler = () => {
      if (!instance || instance.isMounted) {
        queuePreFlushCb(job)
      } else {
        // with 'pre' option, the first call must happen before
        // the component is mounted so it is called synchronously.
        job()
      }
    }
  }

  // runner 基于getter 生成effect ==>
  const runner = effect(getter, {lazy: true,onTrack, onTrigger,scheduler})
  // 绑定当前computedEffect和实例instance ==>
  recordInstanceBoundEffect(runner, instance)

  // runner cb的执行 ==>
  if (cb) {
    if (immediate) {
      job() // 依次执行 runner cb
    } else {
      oldValue = runner() // 只执行runner
    }
  } else if (flush === 'post') {
    queuePostRenderEffect(runner, instance && instance.suspense)
  } else {
    runner()
  }

  // 返回watch清除方法 ==>
  return () => {
    stop(runner)
    if (instance) {
      remove(instance.effects!, runner)
    }
  }
}
```

## setupRenderEffect


*renderer.ts*: `mountComponent`中会调用`setupRenderEffect`，创建`effect`，收集依赖，并赋值到`intance.update`

```ts
const setupRenderEffect: SetupRenderEffectFn = (instance, initialVNode,
    container, anchor, parentSuspense, isSVG,  optimized ) => {
    // create reactive effect for rendering
    // 创建渲染effect
    instance.update = effect(function componentEffect() {
      // 组件未挂载处理
      if (!instance.isMounted) {
        let vnodeHook: VNodeHook | null | undefined
        const { el, props } = initialVNode
        const { bm, m, parent } = instance

        // beforeMount hook
        if (bm) {
          invokeArrayFns(bm)
        }
        // onVnodeBeforeMount
        if ((vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode)
        }

        // 生成 subtree
        const subTree = (instance.subTree = renderComponentRoot(instance))
        if (el && hydrateNode) {
          // vnode has adopted host node - perform hydration instead of mount.
          hydrateNode(initialVNode.el as Node,
            subTree,instance,parentSuspense,null)
        } else {
          // patch挂载真实节点
          patch(null, subTree, container, anchor, 
            instance, parentSuspense, isSVG)
          initialVNode.el = subTree.el
        }
        // mounted hook
        if (m) {
          queuePostRenderEffect(m, parentSuspense)
        }
        // onVnodeMounted
        if ((vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode
          queuePostRenderEffect(() => {
            invokeVNodeHook(vnodeHook!, parent, scopedInitialVNode)
          }, parentSuspense)
        }
        // activated hook for keep-alive roots.
        // #1742 activated hook must be accessed after first render
        // since the hook may be injected by a child keep-alive
        const { a } = instance
        if (
          a &&
          initialVNode.shapeFlag & ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE
        ) {
          queuePostRenderEffect(a, parentSuspense)
        }
        instance.isMounted = true

        // #2458: deference mount-only object parameters to prevent memleaks
        initialVNode = container = anchor = null as any
      } else {
        // 已挂载 => 组件更新
        // updateComponent
        // This is triggered by mutation of component's own state (next: null)
        // OR parent calling processComponent (next: VNode)
        let { next, bu, u, parent, vnode } = instance
        let originNext = next
        let vnodeHook: VNodeHook | null | undefined

        if (next) {
          next.el = vnode.el
          updateComponentPreRender(instance, next, optimized)
        } else {
          next = vnode
        }

        // beforeUpdate hook
        if (bu) {
          invokeArrayFns(bu)
        }
        // onVnodeBeforeUpdate
        if ((vnodeHook = next.props && next.props.onVnodeBeforeUpdate)) {
          invokeVNodeHook(vnodeHook, parent, next, vnode)
        }
        // 生成新的nextTree
        const nextTree = renderComponentRoot(instance)
        const prevTree = instance.subTree
        instance.subTree = nextTree

        // patch  => prevTree | nextTree 更新DOM
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el!)!,
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance, parentSuspense, isSVG)
          
        next.el = nextTree.el
        if (originNext === null) {
          // self-triggered update. In case of HOC, update parent component
          // vnode el. HOC is indicated by parent instance's subTree pointing
          // to child component's vnode
          updateHOCHostEl(instance, nextTree.el)
        }
        // updated hook
        if (u) {
          queuePostRenderEffect(u, parentSuspense)
        }
        // onVnodeUpdated
        if ((vnodeHook = next.props && next.props.onVnodeUpdated)) {
          queuePostRenderEffect(() => {
            invokeVNodeHook(vnodeHook!, parent, next!, vnode)
          }, parentSuspense)
        }

        
      }
    }, 
    (prodEffectOptions  = {
      scheduler: queueJob,
      // #1801, #2043 component render effects should allow recursive updates
      allowRecurse: true
    }))
  }
```
### mountComponent

组件更新时，会触发`updateComponent`，其内部会调用`intance.update`

> 组件更新时，会对新老vnode数据进行[diff](./vue3-diff)

> [组件挂载流程](./vue3-mountelement)

```ts
const mountComponent: MountComponentFn = (initialVNode,container,anchor, parentComponent,parentSuspense, isSVG,optimized) => {
  // 创建实例
  const instance: ComponentInternalInstance = (initialVNode.component = createComponentInstance(initialVNode,parentComponent,parentSuspense))

  // inject renderer internals for keepAlive
  if (isKeepAlive(initialVNode)) {
    ;(instance.ctx as KeepAliveContext).renderer = internals
  }

  // setup() is async. This component relies on async logic to be resolved
  // before proceeding
  if (__FEATURE_SUSPENSE__ && instance.asyncDep) {
    parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect)

    // Give it a placeholder if this is not hydration
    // TODO handle self-defined fallback
    if (!initialVNode.el) {
      const placeholder = (instance.subTree = createVNode(Comment))
      processCommentNode(null, placeholder, container!, anchor)
    }
    return
  }
  // 创建effect
  setupRenderEffect(instance,initialVNode,container,anchor,parentSuspense,isSVG,optimized)
}

const setupRenderEffect: SetupRenderEffectFn = (instance, initialVNode,container,anchor,parentSuspense,isSVG,optimized) => {
  // create reactive effect for rendering
  instance.update = effect(function componentEffect() {
    if (!instance.isMounted) {...} else {...}
  }, __DEV__ ? createDevEffectOptions(instance) : prodEffectOptions)
}
```
