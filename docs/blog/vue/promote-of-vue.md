---
meta:
  - name: keywords
    content: vue优化,函数式组件,this
  - name: description
    content: vue常用性能优化
---


# Vue的常用优化点

## v-if/v-show

频繁切换适合使用`v-show`，减少dom节点的销毁和重建

* `v-if` 如果初始条件为假，不执行编译渲染，直到首次为真时，才会进行局部编译，`v-show`始终会被编译保留，
* 切换显示时，使用`v-if`的组件，会被移出dom树，生命周期每次都会被触发，`v-show`是样式的显示与隐藏，生命周期只会执行一次


## 函数式组件

### 介绍

一个无状态和无实例(没有this)的组件，没有管理任何状态，也没有监听任何传递给它的状态，也没有生命周期方法(没有钩子函数，没有响应式数据)，它只是一个接受一些 prop 的函数：

* Stateless(无状态)：组件自身是没有状态的
* Instanceless(无实例)：组件自身没有实例，也就是没有this

### v2/v3 差异

在v2中函数式组件常用于：

* 性能优化，它们的初始化速度比有状态组件快得多
* 可以返回多个根节点

v3中：

* 对比v2，函数式组件的性能提升可以忽略不计
* 有状态组件的组件支持了返回多节点
* 有状态组件的性能已经有了极大的提升
* functional attribute 在 `<template>` 中移除
* listeners 现在作为 $attrs 的一部分传递，可以将其删除


### v2用法

使用渲染函数

```js
export default {
  functional: true,
  props: ['level'],
  render(h, { props, data, children }) {
    return h(`h${props.level}`, data, children)
  }
}
```

使用template

```vue
<template functional>
  <component
    :is="`h${props.level}`"
    v-bind="attrs"
    v-on="listeners"
  />
</template>

<script>
export default {
  props: ['level']
}
</script>
```

### v3用法

```js
import { h } from 'vue'
const DynamicTitle = (props, context) => {
  return h(`h${props.level}`, context.attrs, context.slots)
}
DynamicTitle.props = ['level']
export default DynamicHeading

```

单文件组件

在 3.x 中，有状态组件和函数式组件之间的性能差异已经大大减少，并且在大多数用例中是微不足道的。因此，在 SFCs 上使用 functional 的开发人员的迁移路径是删除该 attribute，并将 props 的所有引用重命名为 $props，将 attrs 重命名为 $attrs。

```vue {1,3,4}
<template>
  <component
    v-bind:is="`h${$props.level}`"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  props: ['level']
}
</script>
```

主要的区别在于：

1. `functional` attribute 在 `<template>` 中移除
2. `listeners` 现在作为 `$attrs` 的一部分传递，可以将其删除

## this的使用与替代

### 说明

vue会对数据进行响应式处理，添加setter/getter：

* 读取值时，调用getter方法，收集依赖（watch/computed/模板渲染）
* 设置值时，调用setter方法，触发

```js
// observer.js
function defineReactive (obj: Object,key: string,val: any,customSetter?: ?Function,shallow?: boolean) {

  const dep = new Dep()

  Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter () {
        const value = getter ? getter.call(obj) : val
        if (Dep.target) {
          dep.depend()
          if (childOb) {
            childOb.dep.depend()
            if (Array.isArray(value)) {
              dependArray(value)
            }
          }
        }
        return value
      },
      set: function reactiveSetter (newVal) {
        const value = getter ? getter.call(obj) : val
        /* eslint-disable no-self-compare */
        if (newVal === value || (newVal !== newVal && value !== value)) {
          return
        }
        /* eslint-enable no-self-compare */
        if (process.env.NODE_ENV !== 'production' && customSetter) {
          customSetter()
        }
        // #7981: for accessor properties without setter
        if (getter && !setter) return
        if (setter) {
          setter.call(obj, newVal)
        } else {
          val = newVal
        }
        childOb = !shallow && observe(newVal)
        dep.notify()
      }
    })
}
```

```js
// dep.js
  depend () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }
```

频繁使用`this.`获取属性值，就会多次getter方法，收集依赖(实际收集时，会记录依赖id，不会重复收集的依赖)，重复调用setter方法就存在了性能损耗

```js
 // watcher.js 
  addDep (dep: Dep) {
    const id = dep.id
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id)
      this.newDeps.push(dep)
      if (!this.depIds.has(id)) {
        dep.addSub(this)
      }
    }
  }
```

### 优化方法

使用`局部变量`或者`结构赋值`，减少依赖收集方法执行次数

```js {4,7}
{
  computed: {
    msg() {
      const data = this.data
      return `${data}` 
    },
    count({num}) {
      return num + num
    }
  }
}
```

整合模板中使用的数据

```vue
<template>
  <ul>
    <!-- 整合前 -->
    <li v-for="(item, index) in list" :key="index">
      {{arr[index].name}} - {{item.id}} - {{obj[item.id].num}}
    </li>
    <!-- 整合后 -->
    <li v-for="(item, index) in listData" :key="index">
      {{item.name}} - {{item.id}} - {{item.num}}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      obj: {},
      arr: []
    },
    computed: {
      listData ({list, arr, obj}) {
        list.forEach(item => {
          item.name = arr[item.index].name
          item.num = obj[item.id].num
        })
        return list
      }
    }
  }
}
</script>
```


## keep-alive

* `<keep-alive>` 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。
* 和 `<transition>` 相似，`<keep-alive>` 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。


```html
<keep-alive :include="cachedViews">
  <router-view :key="key" />
</keep-alive>
```

`<keep-alive>` 要求同时只有一个子元素被渲染


## 异步组件

在大型应用中，我们可以将应用分割成小一些的代码块，并且只在需要的时候（延迟加载）才从服务器加载一个模块。Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染。

异步组件可以设置loading的选项，在nuxt服务器端渲染的时候我们只输出这个loading组件，后续渲染异步组件的时候，就可以减少回流所带来的性能消耗。 另外组件懒加载了之后，原本的图片懒加载也可以考虑是否要去掉。

```js
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./MyComponent.vue'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})
```

## 分割long task

浏览器GUI渲染线程与JS引擎线程是互斥的，所以如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。因此long task会影响TTI，SPA页面的FCP，或者造成动画延迟，响应延迟，我们需要找出long task，拆分task，设置优先级去执行task。

<img-with-base src="/webstatic/vue-promote-long-task.png" :height="300" />

可以通过`performance`配合`Timings`和`Main`，找到长时间占用主线程的task，并且分析是由哪些方法组成的。尝试将他拆分后，考虑按优先级去执行他。

优化前

```js
longTask({ commit }, { list }) {
    commit('clearLists');
    commit('addLists', list)
    commit('calculateLists', list)
}
```

优化后

```js
longTask({ commit }, { list, splitCount }) {
  commit('clearLists')
  commit('clearChunks')
  const queue = new Queue()
  // 分割列表
  splitList(list, splitCount).forEach(chunk => queue.add(done => {
    // 将分割后的任务逐个添加到队列
    requestAnimationFrame(() => {
      commit('addLists', chunk)
      commit('calcuChunk', chunk)
      done()
    })
  }))
  // 统计分割后计算结果
  queue.add(done => {
    requestAnimationFrame(() => {
      commit('countChunk')
      done()
    })
  })
  // 执行队列
  awiat queue.start()
}
```

## defer延迟加载组件

组件渲染时，同样会执行大量计算或者复杂的渲染，也可以利用requestAnimationFrame，延迟组件加载

```vue
<template>
  <div>
    <h2>I'm an heavy page</h2>

    <template v-if="defer(2)">
      <Heavy v-for="n in 10" :key="n"/>
    </template>

    <Heavy v-if="defer(3)" class="super-heavy" :n="9999999"/>
  </div>
</template>

<script>
import Defer from '@/mixins/Defer'

export default {
  mixins: [
    Defer()
  ]
}
</script>
```

```js
// @/mixins/Defer.js
export default function (count = 10) {
  return {
    data () {
      return {
        displayPriority: 0
      }
    },

    mounted () {
      this.runDisplayPriority()
    },

    methods: {
      runDisplayPriority () {
        const step = () => {
          requestAnimationFrame(() => {
            this.displayPriority++
            if (this.displayPriority < count) {
              step()
            }
          })
        }
        step()
      },

      defer (priority) {
        return this.displayPriority >= priority
      }
    }
  }
}
```


## 分割子组件

将复杂的耗时计算，放在子组件中处理

优化前

```vue
<template>
  <div :style="{ opacity: number / 300 }">
    <div>{{ heavy() }}</div>
  </div>
</template>

<script>
export default {
  props: ['number'],
  methods: {
    heavy () {
      const n = 100000
      let result = 0
      for (let i = 0; i < n; i++) {
        result += Math.sqrt(Math.cos(Math.sin(42)))
      }
      return result
    }
  }
}
</script>
```

优化后

```vue
<template>
  <div :style="{ opacity: number / 300 }">
    <ChildComponents />
  </div>
</template>

<script>
export default {
  props: ['number'],
  components: {
    ChildComponents: {
      methods: {
        heavy () {
          const n = 100000
          let result = 0
          for (let i = 0; i < n; i++) {
            result += Math.sqrt(Math.cos(Math.sin(42)))
          }
          return result
        }
      },
      render(h) {
        return h('div', this.heavy())
      }
    }
  }
}
</script>

```

## 使用非响应式数据

数据冻结，减少响应式劫持

```js
// 方法一
const data = items.map(item => optimizeItem(item))
function optimizeItem (item) {
  Object.defineProperty(item, 'data', {
    // mark as non-reactive
    configurable: false,
    value: item.data
  })
  return item
}
// 方法二
this.items = Object.freeze(items)
```

## 渲染可视化部分

常用于大量数据的渲染，模拟滚动效果，仅展示可视区域内容

## await/Promise.all

没有依赖关系的任务或者请求，可以使用Promise.all处理

```js
const [users, imgs] = await Promise.all([getUsers(), getImgs()])
```

## 引用

* [【vue】组件使用Deferred特性](https://www.cnblogs.com/wuxianqiang/p/10621396.html)
* [动态组件 & 异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html)
