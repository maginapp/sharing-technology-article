---
meta:
  - name: keywords
    content: vue3源码解析,scheduler
  - name: description
    content: vue3源码解析-scheduler事务机制解析，$nextTick解析
---

# vue3-scheduler

基于nextTick熟悉vue3的scheduler机制
## nextTick
### usage

nextTick的回调函数会在下一次微任务循环时执行

```js
const fn = async  () => {
  console.log(1)
  await nextTick()
  console.log(3)
  nextTick(() => {
    console.log(4)
  })
}
fn()
console.log(2)
```

### 解析

nextTick是基于`Promise.resolve()`执行nextTick回调`fn`的：
  * [`resolvedPromise.then(flushJobs)`](#queueFlush): 当前[`flushJobs`](#flushJobs)执行完成后，再使用`then`执行回调
  * 如没有任务队列，使用`Promise.resolve()`确保下次微任务中执行nextTick回调

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

### $nextTick

`$nextTick`是组件实例中绑定的方法，`$nextTick`中的`this`会自动绑定当前实例

#### usage

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
#### 解析

$nextTick: */packages/runtime-core/src/componentPublicInstance.ts*：

通过`Object.defineProperty`或者`Proxy`获取绑定this的$nextTick函数

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

## queueFlush

`queueFlush`会执行微任务回调`flushJobs`，并为`currentFlushPromise`赋值

```ts
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true
    currentFlushPromise = resolvedPromise.then(flushJobs)
  }
}
```

### 全局变量

储存三种任务队列，标识任务执行状态

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

## 队列任务执行

### flushJobs

`flushJobs`: 执行当前存储的微任务队列
  1. 执行`flushPreFlushCbs`
  2. 执行`queue`队列
  3. 执行`flushPostFlushCbs`
  4. 判断`queue`和`pendingPostFlushCbs`队列数据，确定是否需要再次执行 flushJobs

```ts
function flushJobs(seen?: CountMap) {
  isFlushPending = false
  isFlushing = true // 标识：执行jobs flush

  flushPreFlushCbs(seen) // 执行PreFlushCbs

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

    flushPostFlushCbs(seen) // 执行PostFlushCbs

    isFlushing = false // 执行完成重置标识
    currentFlushPromise = null // 当前currentFlushPromise置空
    // some postFlushCb queued jobs!
    // keep flushing until it drains.
    if (queue.length || pendingPostFlushCbs.length) { // 确保队列清空
      flushJobs(seen)
    }
  }
}
```

### flushPreFlushCbs

1. 判断是否有有待执行`pendingPreFlushCbs`，有则执行后续步骤
2. `pendingPreFlushCbs`插入`activePreFlushCbs`
3. 按照`job.id`对`activePostFlushCbs`进行排序
4. 逐个执行prejob
5. 调用`flushPreFlushCbs`，重复第一步，直至`pendingPreFlushCbs`清空

```ts
export function flushPreFlushCbs(
  seen?: CountMap,
  parentJob: SchedulerJob | null = null
) {
  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob
    activePreFlushCbs = [...new Set(pendingPreFlushCbs)] // 添加 activePreFlushCbs
    pendingPreFlushCbs.length = 0 // pendingPreFlushCbs清空
    // 执行activePreFlushCbs[]()
    for (
      preFlushIndex = 0;
      preFlushIndex < activePreFlushCbs.length;
      preFlushIndex++
    ) {
      activePreFlushCbs[preFlushIndex]()
    }
    // 重置数据
    activePreFlushCbs = null // activePreFlushCbs清空
    preFlushIndex = 0
    currentPreFlushParentJob = null
    // recursively flush until it drains
    flushPreFlushCbs(seen, parentJob)
  }
}
```

### flushPostFlushCbs

与`flushPostFlushCbs`基本相同，但不会重复执行清空`pendingPostFlushCbs`

此外，已经存在`activePostFlushCbs`时，直接添加`pendingPostFlushCbs`，且不会立即执行

```ts
export function flushPostFlushCbs(seen?: CountMap) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)]
    pendingPostFlushCbs.length = 0

    // 已经存在activePostFlushCbs，直接添加
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped)
      return
    }

    activePostFlushCbs = deduped

    activePostFlushCbs.sort((a, b) => getId(a) - getId(b))

    for (
      postFlushIndex = 0;
      postFlushIndex < activePostFlushCbs.length;
      postFlushIndex++
    ) {
      activePostFlushCbs[postFlushIndex]()
    }
    activePostFlushCbs = null
    postFlushIndex = 0
  }
}
```

## 队列插入

> 新增任务之后都会调用[`queueFlush`](#queueFlush)，执行任务队列

### queueJob

1. 是否继续执行插入
2. job 按序插入queue 
3. 执行[`queueFlush`](#queueFlush)

> [doWatch详见](./vue3-effect-api.html#dowatch)

```ts
export function queueJob(job: SchedulerJob) {
  // flushIndex => 当前正在执行的任务 job.allowRecurse => watchEffect/渲染effect有此参数 =>  doWatch-sync直接执行♦ ==> 官网注释此处指watchEffect
  // 这类情况 从flushIndex + 1检索，允许它递归地触发自身，用户需要避免无限循环调用
  // 非以上情况，当前flushIndex(job)会被剔除
  if (
    (!queue.length ||
      !queue.includes(
        job,
        isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
      )) &&
    job !== currentPreFlushParentJob
  ) {
    const pos = findInsertionIndex(job)
    if (pos > -1) {
      queue.splice(pos, 0, job)
    } else {
      queue.push(job)
    }
    queueFlush()
  }
}
```

### findInsertionIndex

二分法查找当前job的匹配的位置

```ts
function findInsertionIndex(job: SchedulerJob) {
  // the start index should be `flushIndex + 1`
  let start = flushIndex + 1
  let end = queue.length
  const jobId = getId(job)

  while (start < end) {
    const middle = (start + end) >>> 1
    const middleJobId = getId(queue[middle])
    middleJobId < jobId ? (start = middle + 1) : (end = middle)
  }

  return start
}
```

#### findInsertionIndex

二分法插入位置判断

### queueCb

`queuePreFlushCb`/`queuePostFlushCb`核心是使用`queueCb`将job插入到对应的**待执行任务队列**

> 其中`queuePreFlushCb`仅[doWatch](./vue3-effect-api.html#dowatch)中会调用

```ts
function queueCb(
  cb: SchedulerCbs,
  activeQueue: SchedulerCb[] | null,
  pendingQueue: SchedulerCb[],
  index: number
) {
  // activeQueue不包含当前cb，或者已经执行过了，则添加到待执行任务中
  if (!isArray(cb)) {
    if (
      !activeQueue ||
      !activeQueue.includes(
        cb,
        (cb as SchedulerJob).allowRecurse ? index + 1 : index
      )
    ) {
      pendingQueue.push(cb)
    }
  } else {
    // 如果cb是数组,则cb是生命周期钩子，它只能作为一个job被触发，并且它已经从main queue中删除了，此处可以跳过验证，提高性能
    pendingQueue.push(...cb)
  }
  queueFlush() // 执行队列
}
```
