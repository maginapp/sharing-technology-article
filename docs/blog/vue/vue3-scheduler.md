---
meta:
  - name: keywords
    content: vue3源码解析,scheduler
  - name: description
    content: vue3源码解析-scheduler事务机制解析，$nextTick解析
---

# scheduler

## nextTick

当前任务队列`queue`执行完成后，执行`nextTick`微任务回调

nextTick是基于`Promise.resolve()`执行下次微任务的：
  * `Promise.resolve()`
  * [`resolvedPromise.then(flushJobs)`](#queueFlush): 当前[`flushJobs`](#flushJobs)执行完成后，再使用`then`执行微任务回调`fn`

```ts
const resolvedPromise: Promise<any> = Promise.resolve()
let currentFlushPromise: Promise<void> | null = null
export function nextTick(
  this: ComponentPublicInstance | void,
  fn?: () => void
): Promise<void> {
  // currentFlushPromise = resolvedPromise.then(flushJobs) | null
  const p = currentFlushPromise || resolvedPromise
  return fn ? p.then(this ? fn.bind(this) : fn) : p
}
```

## $nextTick

`$nextTick`是组件实例中绑定的方法，`this` 会自动绑定当前实例

### usage

> demo来源于 [vue3官网](https://v3.cn.vuejs.org/api/instance-methods.html#nexttick)

```js
Vue.createApp({
  // ...
  methods: {
    // ...
    example() {
      // 修改数据
      this.message = 'changed'
      // DOM 尚未更新
      this.$nextTick(function() {
        // DOM 现在更新了
        // `this` 被绑定到当前实例
        this.doSomethingElse()
      })
    }
  }
})
```
### 解析

$nextTick: */packages/runtime-core/src/componentPublicInstance.ts*

```ts
const publicPropertiesMap: PublicPropertiesMap = extend(Object.create(null), {
  $: i => i,
  $el: i => i.vnode.el,
  $data: i => i.data,
  $props: i => (__DEV__ ? shallowReadonly(i.props) : i.props),
  $attrs: i => (__DEV__ ? shallowReadonly(i.attrs) : i.attrs),
  $slots: i => (__DEV__ ? shallowReadonly(i.slots) : i.slots),
  $refs: i => (__DEV__ ? shallowReadonly(i.refs) : i.refs),
  $parent: i => getPublicInstance(i.parent),
  $root: i => getPublicInstance(i.root),
  $emit: i => i.emit,
  $options: i => (__FEATURE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type),
  $forceUpdate: i => () => queueJob(i.update),
  // 此方法会bind 当前实例
  $nextTick: i => nextTick.bind(i.proxy!), // (parameter) i: ComponentInternalInstance
  $watch: i => (__FEATURE_OPTIONS_API__ ? instanceWatch.bind(i) : NOOP)
} as PublicPropertiesMap)

// 生成绑定this的getter函数，
export const PublicInstanceProxyHandlers: ProxyHandler<any> = {
  get({ _: instance }: ComponentRenderContext, key: string) {
    ...
    const publicGetter = publicPropertiesMap[key]
    let cssModule, globalProperties
    // public $xxx properties
    if (publicGetter) {
      if (key === '$attrs') {
        track(instance, TrackOpTypes.GET, key)
        __DEV__ && markAttrsAccessed()
      }
      return publicGetter(instance)
    } 
    ...
  }
}

// 绑定this
export function createRenderContext(instance: ComponentInternalInstance) {
  const target: Record<string, any> = {}
  ....
  // expose public properties
  Object.keys(publicPropertiesMap).forEach(key => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: NOOP
    })
  })
  ...
  return target as ComponentRenderContext
}

```

## scheduler

### 全局变量

```ts
let isFlushing = false // 标识 flushJobs 执行状态
let isFlushPending = false // 标识 queueFlush 执行状态

const queue: SchedulerJob[] = [] // job队列
let flushIndex = 0

const pendingPreFlushCbs: SchedulerCb[] = [] // pre队列
let activePreFlushCbs: SchedulerCb[] | null = null
let preFlushIndex = 0

const pendingPostFlushCbs: SchedulerCb[] = [] // post队列
let activePostFlushCbs: SchedulerCb[] | null = null
let postFlushIndex = 0

let currentPreFlushParentJob: SchedulerJob | null = null

```

### flushJobs

flushJobs: 会执行当前记录的队列
  1. flushPreFlushCbs
  2. 执行`queue`队列
  3. flushPostFlushCbs
  4. 判断`queue`和`pendingPostFlushCbs`队列数据，确定是否需要再次执行 flushJobs

```ts
function flushJobs(seen?: CountMap) {
  isFlushPending = false
  isFlushing = true // 执行jobs flush

  flushPreFlushCbs(seen)

  // flush 前对sort进行排序：
  // 1. 先更新父组件再更新子组件（父组件总是先创建，id小于子组件）
  // 2. 如果父组件更新时，卸载了子组件，那么这个子组件渲染可以被跳过
  queue.sort((a, b) => getId(a) - getId(b))

  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex]
      if (job) {
        callWithErrorHandling(job, null, ErrorCodes.SCHEDULER)
      }
    }
  } finally {
    flushIndex = 0
    queue.length = 0

    flushPostFlushCbs(seen)

    isFlushing = false
    currentFlushPromise = null
    // some postFlushCb queued jobs!
    // keep flushing until it drains.
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen)
    }
  }
}
```

#### queueFlush

```ts
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true
    currentFlushPromise = resolvedPromise.then(flushJobs)
  }
}
```
