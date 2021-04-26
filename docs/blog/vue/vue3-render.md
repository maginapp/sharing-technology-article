---
meta:
  - name: keywords
    content: vue3源码解析,render流程简析
  - name: description
    content: vue3源码解析-render流程简析
---

# vue3-render简析

基于createApp了解vue3的DOM渲染主流程：

## 执行流程简要说明

```js
createApp({}).mount()
```

1. 执行`createApp`，创建实例
2. 执行`mount`方法
    1. 执行`createVNode`，创建虚拟DOM
    2. 执行`render`渲染页面
        1. `patch`更新内容，执行过程中会创建`effect`，执行渲染时会进行依赖收集
        2. `flushPostFlushCbs`执行任务

### 1. `createRenderer`创建`renderer` 

> renderer = createRenderer(rendererOptions)

```ts
const renderer = {
  render, // 渲染时使用
  hydrate,
  createApp: createAppAPI(render, hydrate)
}
function createAppAPI( render: RootRenderFunction, hydrate?: RootHydrateFunction) {
  return function createApp(rootComponent, rootProps = null) {}
}
```

### 2. `Vue.createApp`创建实例

`renderer.createApp` 创建实例*app*，重写`app.mount`方法

```ts
export const createApp = ((...args) => {
  const app = ensureRenderer().createApp(...args)
  const { mount } = app
  app.mount = (containerOrSelector: Element | ShadowRoot | string): any => {...}
  return app
})
```

### 3. 执行`mount`，获取模板，挂载实例

```ts
app.mount = (containerOrSelector) => {
  // ...  添加template模板
  component.template = container.innerHTML 
  // ... 执行挂载 => 执行createApp内mount
  const proxy = mount(container, false, container instanceof SVGElement);
  // ...
}
```

### 4. 执行createApp内mount

1. `createVNode`创建vnode
2. 执行`render`渲染

```ts
context.app = {
  mount(...): any {
    if (!isMounted) {
      // ... 创建vnode
      const vnode = createVNode(rootComponent as ConcreteComponent,rootProps)
      // ... 执行渲染  其中render是调用createAppAPI时，传入的参数
      render(vnode, rootContainer, isSVG)
    }
  }
}
```

### 5. render渲染


1. 执行`patch`方法，内部会依次触发`setup`,`beforeCreate`,`created`, `beforeMount` 这些钩子
2. 执行`flushPostFlushCbs`渲染页面

渲染完成后触发 `mounted`钩子

> [vue3-diff算法解析](./vue3-diff)

```ts
const render: RootRenderFunction = (vnode, container, isSVG) => {
  if (vnode == null) {
    if (container._vnode) {
      unmount(container._vnode, null, null, true)
    }
  } else {
    patch(container._vnode || null, vnode, container, null, null, null, isSVG)
  }
  flushPostFlushCbs()
  container._vnode = vnode
}
```

### 6. mountElement

`patch`过程中会执行DOM的创建与修改：`baseCreateRenderer`的私有方法[`mountElement`](./vue3-mountelement)就是用于DOM创建的


<hr />

>
> 以下为部分源码
>

## createApp

*packages/runtime-dom/src/index.ts*:

1. 调用 `ensureRenderer()`的[`createApp`](#createappapI)方法， 创建实例
2. 重写 `mount` 方法，将实例挂载到dom上

```ts
export const createApp = ((...args) => {
  const app = ensureRenderer().createApp(...args)
  // 获取初始的mount方法
  const { mount } = app
  // 重写ount方法，内部会调用上面的mount
  app.mount = (containerOrSelector: Element | ShadowRoot | string): any => {
    const container = normalizeContainer(containerOrSelector)
    if (!container) return
    const component = app._component
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML
    }
    // clear content before mounting
    container.innerHTML = ''
    // 1. 创建vnode
    // 2. 挂载
    const proxy = mount(container, false, container instanceof SVGElement)
    if (container instanceof Element) {
      container.removeAttribute('v-cloak')
      container.setAttribute('data-v-app', '')
    }
    return proxy
  }

  return app
}) as CreateAppFunction<Element>
```

### ensureRenderer

*packages/runtime-dom/src/index.ts*: 获取`renderer`函数，tree shakeing相关???

```ts
// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer: Renderer<Element> | HydrationRenderer
function ensureRenderer() {
  return renderer || (renderer = createRenderer<Node, Element>(rendererOptions))
}

```

## createRenderer

*packages/runtime-core/src/renderer.ts*: createRenderer仅仅是内部调用baseCreateRenderer

```ts
export function createRenderer<
  HostNode = RendererNode,
  HostElement = RendererElement
>(options: RendererOptions<HostNode, HostElement>) {
  return baseCreateRenderer<HostNode, HostElement>(options)
}
```

## baseCreateRenderer

*packages/runtime-core/src/renderer.ts*: 调用`createAppAPI`生成 `createApp`、`hydrate`、`render`方法

> 为方面阅读，已去除`baseCreateRenderer`内部的私有方法

创建时传入的参数[`options`](#options)

1. patchProp，forcePatchProp： props处理

2. node节点处理

> const rendererOptions = extend({ patchProp, forcePatchProp }, nodeOps)

```ts
function baseCreateRenderer(
  options: RendererOptions,
  createHydrationFns?: typeof createHydrationFunctions
): any {

  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    forcePatchProp: hostForcePatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    cloneNode: hostCloneNode,
    insertStaticContent: hostInsertStaticContent
  } = options

  ...
  const setupRenderEffect = (...) => {...} // 创建effct
  // 组件挂载，最终会在patch方法中执行
  const mountComponent = (...) => {
    ...
    setupRenderEffect()
    ...
  }
  ...

  const render: RootRenderFunction = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true)
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG)
    }
    flushPostFlushCbs()
    container._vnode = vnode
  }

  const internals: RendererInternals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  }

  let hydrate: ReturnType<typeof createHydrationFunctions>[0] | undefined
  let hydrateNode: ReturnType<typeof createHydrationFunctions>[1] | undefined
  if (createHydrationFns) { // create暂未涉及
    ;[hydrate, hydrateNode] = createHydrationFns(internals as RendererInternals<
      Node,
      Element
    >)
  }

  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  }

```


### setupRenderEffect

创建渲染effect，其scheduler是[queueJob](./vue3-scheduler.html#queuejob)

```ts
const setupRenderEffect: SetupRenderEffectFn = (
    instance,
    initialVNode,
    container,
    anchor,
    parentSuspense,
    isSVG,
    optimized
  ) => {
    // create reactive effect for rendering
    instance.update = effect(
      function componentEffect() { ... },
      __DEV__ ? createDevEffectOptions(instance) : prodEffectOptions
    )
  }
const prodEffectOptions = {
  scheduler: queueJob,
  // #1801, #2043 component render effects should allow recursive updates
  allowRecurse: true
}
```

## createAppAPI

*packages/runtime-core/src/apiCreateApp.ts*: createAppAPI是生成***createApp***的工厂函数

`createApp`内部会根据参数初始化`context`，并对`context.app(实例)`进行初始化

```ts
export function createAppAPI<HostElement>(
  render: RootRenderFunction,
  hydrate?: RootHydrateFunction
): CreateAppFunction<HostElement> {
  return function createApp(rootComponent, rootProps = null) {
    if (rootProps != null && !isObject(rootProps)) {
      rootProps = null
    }

    const context = createAppContext()
    const installedPlugins = new Set()

    let isMounted = false

    const app: App = (context.app = {
      _uid: uid++,
      _component: rootComponent as ConcreteComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      version,
      get config() {return context.config},
      set config(v) { },
      use(plugin: Plugin, ...options: any[]) { ... },
      mixin(mixin: ComponentOptions) { ... },
      component(name: string, component?: Component): any { ... },
      directive(name: string, directive?: Directive) { ... },
      mount(
        rootContainer: HostElement,
        isHydrate?: boolean,
        isSVG?: boolean
      ): any {
        if (!isMounted) {
          // 创建vnode
          const vnode = createVNode(
            rootComponent as ConcreteComponent,
            rootProps
          )
          // store app context on the root VNode.
          // this will be set on the root instance on initial mount.
          vnode.appContext = context

          if (isHydrate && hydrate) {
            hydrate(vnode as VNode<Node, Element>, rootContainer as any)
          } else {
            // 渲染
            render(vnode, rootContainer, isSVG)
          }
          // 改变挂载状态
          isMounted = true
          app._container = rootContainer
          // for devtools and telemetry
          ;(rootContainer as any).__vue_app__ = app

          return vnode.component!.proxy
        }
      },
      unmount() {
        if (isMounted) {
          render(null, app._container)
          delete app._container.__vue_app__
        }
      },
      provide(key, value) { ... }
    })

    return app
  }
}

```

### createAppContext

生成初始化的context

```ts
export function createAppContext(): AppContext {
  return {
    app: null as any,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      isCustomElement: NO,
      errorHandler: undefined,
      warnHandler: undefined
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null)
  }
}

```


