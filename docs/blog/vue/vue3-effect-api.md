---
meta:
  - name: keywords
    content: vue3,响应式effect-api
  - name: description
    content: vue3 effect相关解析
---

# vue3-effect相关解析
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

1. 生成computed，创建effct实例(以下称为`computedEffect`)，`_dirty: true`

2. 模板渲染获取computed
3. 执行get value
4. `_dirty: true` => 执行computedEffect，收集computed对内部响应式数据`reactive`的依赖
5. `_dirty: true` =>  `_dirty: false`， 避免重复收集???增加watch???
6. 模板渲染收集computedEffect

7. `reactive`变更
8. 执行`computedEffect`的options.scheduler
9. `_dirty: false` => `_dirty: true`
10.  触发依赖computed的所有`effect`

11. 内部执行调用get value，重复第3步


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
        if (!this._dirty) { // _dirty:false => 执行过当前的effect => 内部依赖收集了
          this._dirty = true // => dirty变更为true
          trigger(toRaw(this), TriggerOpTypes.SET, 'value')
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
    console.log(data.a) // just a
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

`watch`/`watchEffect`都是调用`doWatch`方法

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

1. `watch source` 生成 `getter`函数
  * watch source 只能是 `getter/effect function` , `ref`数据 , `reactive`数据，这些数据格式的`array`，`doWatch`内部是统一生成`getter`函数
2. runner 基于getter 生成 effect
3. 创建 `job: SchedulerJob`，内部执行 `getter`和`cb`
  * callWithAsyncErrorHandling 执行 `cb`
4. 创建`scheduler: ReactiveEffectOptions['scheduler']`，确定`job`的调用时间，[副作用刷新时机](https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E5%89%AF%E4%BD%9C%E7%94%A8%E5%88%B7%E6%96%B0%E6%97%B6%E6%9C%BA)
  * `flush:pre` 默认
  * `flush:post` 在组件更新后触发，这样你就可以访问更新的 DOM，注意：这也将推迟副作用的初始运行，直到组件的首次渲染完成。
  * `flush:sync` 强制始终同步触发。然而，这是低效的，应该很少需要

```ts
function doWatch(
  source: WatchSource | WatchSource[] | WatchEffect | object,
  cb: WatchCallback | null,
  { immediate, deep, flush, onTrack, onTrigger }: WatchOptions = EMPTY_OBJ,
  instance = currentInstance
): WatchStopHandle {
  
  // 生成getter函数
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
        if (instance && instance.isUnmounted) {
          return
        }
        if (cleanup) {
          cleanup()
        }
        return callWithAsyncErrorHandling(
          source,
          instance,
          ErrorCodes.WATCH_CALLBACK,
          [onInvalidate]
        )
      }
    }
  } else {
    getter = NOOP
    __DEV__ && warnInvalidSource(source)
  }

  if (cb && deep) {
    const baseGetter = getter
    getter = () => traverse(baseGetter())
  }

  let cleanup: () => void
  let onInvalidate: InvalidateCbRegistrator = (fn: () => void) => {
    cleanup = runner.options.onStop = () => {
      callWithErrorHandling(fn, instance, ErrorCodes.WATCH_CLEANUP)
    }
  }

  // job生成
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
        if (cleanup) {
          cleanup()
        }
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
  // scheduler创建
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

  // runner 基于getter 生成effect
  const runner = effect(getter, {
    lazy: true,
    onTrack,
    onTrigger,
    scheduler
  })

  // 以下暂未开始

  recordInstanceBoundEffect(runner, instance)

  // initial run
  if (cb) {
    if (immediate) {
      job()
    } else {
      oldValue = runner()
    }
  } else if (flush === 'post') {
    queuePostRenderEffect(runner, instance && instance.suspense)
  } else {
    runner()
  }

  return () => {
    stop(runner)
    if (instance) {
      remove(instance.effects!, runner)
    }
  }
}
```

## mountComponent

`renderer.ts`