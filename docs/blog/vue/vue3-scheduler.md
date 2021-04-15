---
meta:
  - name: keywords
    content: vue3源码解析,scheduler
  - name: description
    content: vue3源码解析-scheduler事务机制解析，$nextTick解析
---

# scheduler

## nextTick

当前`flushJobs`执行完成后，再执行回调

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

`this` 会自动绑定当前实例

* usage

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
