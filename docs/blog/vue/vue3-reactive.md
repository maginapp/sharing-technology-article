---
meta:
  - name: keywords
    content: vue3源码解析,响应式数据解析
  - name: description
    content: vue3源码解析-响应式原理
---

# vue3 reactivity解析

vue3解析基于 `vue3@3.0.9`版本

## ref

`ref`常用于基本类型，基本数据类型无法追踪，因此需要将js的基本类型包装为响应式数据。

### createRef

如果传入的值是引用类型，`ref`内部会调用`reactive`

```ts
/**
 * createRef  创建ref数据
 * @param rawValue 待处理数据
 * @param shallow 是否对引用类型做递归劫持
 * @returns 
 */
function createRef(rawValue: unknown, shallow = false) {
  if (isRef(rawValue)) {
    return rawValue
  }
  return new RefImpl(rawValue, shallow)  // RefImpl 包装数据
}

// 创建基础数据的包装对象
class RefImpl<T> {
  private _value: T
  public readonly __v_isRef = true  // ref数据标识

  constructor(private _rawValue: T, public readonly _shallow = false) {
    // convert会判断数据类型，对引用类型进行reactive处理
    this._value = _shallow ? _rawValue : convert(_rawValue)
  }

  get value() {
    track(toRaw(this), TrackOpTypes.GET, 'value')  // 收集依赖
    return this._value
  }

  set value(newVal) {
    if (hasChanged(toRaw(newVal), this._rawValue)) { // 判断数据是否变更
      this._rawValue = newVal
      this._value = this._shallow ? newVal : convert(newVal) // 源数据重新赋值
      trigger(toRaw(this), TriggerOpTypes.SET, 'value', newVal) // 数据更新触发副作用
    }
  }
}
```

#### utils函数

`convert`判断数据类型；`hasChanged`判断数据变更

```ts
// 判断是否是引用类型
const convert = <T extends unknown>(val: T): T =>
  isObject(val) ? reactive(val) : val

// 获取源数据
export function toRaw<T>(observed: T): T {
  return (
    (observed && toRaw((observed as Target)[ReactiveFlags.RAW])) || observed
  )
}

// `reactivity/baseHandlers.ts` 文件
function createGetter(isReadonly = false, shallow = false) {
  return function get(target: Target, key: string | symbol, receiver: object) {
    if (key === ReactiveFlags.IS_REACTIVE) {
      return !isReadonly
    } else if (key === ReactiveFlags.IS_READONLY) {
      return isReadonly
    } else if (key === ReactiveFlags.RAW) {
      return target // ReactiveFlags.RAW 获取 源数据 target
    }
    // ...
  }
}
```

> tips: [createGetter详见](#proxy处理器对象)

### toRef

`toRef`可以将 引用类型（含`reactive`对象）的键值数据转化成 `ref`对象

```ts
export function toRef<T extends object, K extends keyof T>(
  object: T,
  key: K
): ToRef<T[K]> {
  // object[key] 非ref类型，调用 ObjectRefImpl 方法
  return isRef(object[key])
    ? object[key]
    : (new ObjectRefImpl(object, key) as any)
}

// 判断是否响应式
export function isRef(r: any): r is Ref {
  return Boolean(r && r.__v_isRef === true)
}

// 创建Ref类型数据
class ObjectRefImpl<T extends object, K extends keyof T> {
  public readonly __v_isRef = true // ref标识

  constructor(private readonly _object: T, private readonly _key: K) {}

  get value() {
    return this._object[this._key]
  }

  set value(newVal) {
    this._object[this._key] = newVal
  }
}
```

### toRefs

`toRefs`可以将`reactive`对象转化成`refs`对象

```ts
export function toRefs<T extends object>(object: T): ToRefs<T> {
  // 元数据非响应式类型数据 触发告警
  if (__DEV__ && !isProxy(object)) {
    console.warn(`toRefs() expects a reactive object but received a plain one.`)
  }
  const ret: any = isArray(object) ? new Array(object.length) : {}
  for (const key in object) {
    ret[key] = toRef(object, key)
  }
  return ret
}
```

### 其他

* unref

`unref` 获取源数据，`ref`类型获取其`value`属性值

```ts
export function unref<T>(ref: T): T extends Ref<infer V> ? V : T {
  return isRef(ref) ? (ref.value as any) : ref
}
```

## reactive

**WeakMap**创建 键名弱引用对象，用于缓存响应式处理结果

```ts
export const reactiveMap = new WeakMap<Target, any>() // 存储源数据和proxy
export const shallowReactiveMap = new WeakMap<Target, any>()
export const readonlyMap = new WeakMap<Target, any>()
export const shallowReadonlyMap = new WeakMap<Target, any>()
```

### createReactiveObject

```ts
export function reactive(target: object) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (target && (target as Target)[ReactiveFlags.IS_READONLY]) {
    return target // 只读数据返回源数据
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  )
}
```

`createReactiveObject` 使用Proxy包装数据

```ts
function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>,
  proxyMap: WeakMap<Target, any>
) {
  if (!isObject(target)) { // 处理不合法数据
    return target
  }
  // Proxy数据执行返回 => 除了以下情况：从reactive对象中获取 只读对象
  if (
    target[ReactiveFlags.RAW] &&
    !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
  ) {
    return target
  }
  // 读取proxyMap已经缓存数据
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }
  // only a whitelist of value types can be observed.
  const targetType = getTargetType(target)
  if (targetType === TargetType.INVALID) {
    return target // 不支持的数据类型 返回源数据
  }
  // 核心代码 collectionHandlers/baseHandlers ==>  mutableCollectionHandlers/mutableHandlers
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  )
  proxyMap.set(target, proxy) // proxyMap添加target缓存
  return proxy
}

// 是否对象判断
export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

// 获取target类型
function getTargetType(value: Target) {
  return value[ReactiveFlags.SKIP] || !Object.isExtensible(value) // ReactiveFlags.SKIP 或者不可扩展
    ? TargetType.INVALID
    : targetTypeMap(toRawType(value)) // TargetType.COMMON => Object/Array;TargetType.COLLECTION => Map/Set/WeakMap/WeakSet
}

// 获取数据类型
export const toRawType = (value: unknown): string => {
  // extract "RawType" from strings like "[object RawType]"
  return  Object.prototype.toString.call(value).slice(8, -1)
}
```

### **Proxy**处理器对象

*packages\reactivity\src\baseHandlers.ts*: 
`mutableCollectionHandlers` / `mutableHandlers`，其中`mutableHandlers`用于处理 **Array**和**Object**数据

`mutableHandlers`是**Proxy**是处理器对象

```ts
export const mutableHandlers: ProxyHandler<object> = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
}

const set = /*#__PURE__*/ createSetter()
```

#### createSetter

触发依赖（触发`trigger`方法）时区分是首次赋值，还是修改数据，

```ts
function createSetter(shallow = false) {
  return function set(
    target: object, // 源数据
    key: string | symbol,
    value: unknown,
    receiver: object // Proxy<源数据>
  ): boolean {
    const oldValue = (target as any)[key] // 获取旧数据
    if (!shallow) {
      value = toRaw(value)
      // target非数组 => 旧数据是ref类型 且新数据不是ref类型 ==> 直接赋值 ????
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value
        return true
      }
    } else {
      // in shallow mode, objects are set as-is regardless of reactive or not
    }

    // 判断是否有该key 用于设置trigger是否有原值
    const hadKey =
      isArray(target) && isIntegerKey(key)
        ? Number(key) < target.length
        : hasOwn(target, key)
    // 赋值    
    const result = Reflect.set(target, key, value, receiver)
    // don't trigger if target is something up in the prototype chain of original
    if (target === toRaw(receiver)) { // targer 与receiver 源数据相同
      if (!hadKey) {
        trigger(target, TriggerOpTypes.ADD, key, value)
      } else if (hasChanged(value, oldValue)) {
        trigger(target, TriggerOpTypes.SET, key, value, oldValue)
      }
    }
    return result
  }
}
```

#### createGetter

获取键值时，会触发`track`方法收集依赖

1. 部分数组的方法会进行特殊处理
2. 子数据首次获取值时，才会进行响应式处理，提升性能
3. 部分属性名特殊处理[`ReactiveFlags`](#utils函数)


```ts
function createGetter(isReadonly = false, shallow = false) {
  return function get(target: Target, key: string | symbol, receiver: object) {
    // ...
    const targetIsArray = isArray(target)
    // 数组部分方法处理
    if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver)
    }
    // 获取数据
    const res = Reflect.get(target, key, receiver)

    if (
      isSymbol(key)
        ? builtInSymbols.has(key as symbol)
        : isNonTrackableKeys(key)
    ) {
      return res
    }
    // 依赖收集
    if (!isReadonly) {
      track(target, TrackOpTypes.GET, key)
    }

    if (shallow) {
      return res
    }

    if (isRef(res)) {
      // ref unwrapping - 非数组 或者 非int键名 ????非int键名 {1:2}
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key)
      return shouldUnwrap ? res.value : res
    }
    // 引用类型 获取数时才会对子数据进行劫持 ==> vue3的优化🔶
    if (isObject(res)) {
      return isReadonly ? readonly(res) : reactive(res)
    }

    return res
  }
}
```

#### 数组的特殊处理

`arrayInstrumentations` 重写部分数组方法

1. 调用 `'includes', 'indexOf', 'lastIndexOf'` 添加对所有值的依赖收集
2. `'push', 'pop', 'shift', 'unshift', 'splice'`  需要避免对length的依赖收集


```ts
const arrayInstrumentations: Record<string, Function> = {}

;(['includes', 'indexOf', 'lastIndexOf'] as const).forEach(key => {
  const method = Array.prototype[key] as any
  arrayInstrumentations[key] = function(this: unknown[], ...args: unknown[]) {
    const arr = toRaw(this)
    for (let i = 0, l = this.length; i < l; i++) {
      track(arr, TrackOpTypes.GET, i + '')
    }
    // we run the method using the original args first (which may be reactive)
    const res = method.apply(arr, args)
    if (res === -1 || res === false) {
      // if that didn't work, run it again using raw values.
      return method.apply(arr, args.map(toRaw))
    } else {
      return res
    }
  }
})
// instrument length-altering mutation methods to avoid length being tracked
// which leads to infinite loops in some cases (#2137)
;(['push', 'pop', 'shift', 'unshift', 'splice'] as const).forEach(key => {
  const method = Array.prototype[key] as any
  arrayInstrumentations[key] = function(this: unknown[], ...args: unknown[]) {
    pauseTracking()
    const res = method.apply(this, args)
    resetTracking()
    return res
  }
})
```

## 依赖处理

### track

`track`函数会搜集当前的依赖，`targetMap`存储依赖，`activeEffect`是当前的触发effct

```ts
const targetMap = new WeakMap<any, KeyToDepMap>()

export function track(target: object, type: TrackOpTypes, key: unknown) {
  // createReactiveEffect内部为 activeEffect 赋值
  if (!shouldTrack || activeEffect === undefined) {
    return
  }
  // 获取target的deps Map集合
  let depsMap = targetMap.get(target) // Map
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  // 获取target=>key对应的effect set集合
  let dep = depsMap.get(key) // set
  if (!dep) {
    depsMap.set(key, (dep = new Set()))
  }
  // 避免重复添加
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect) // object => key => dep添加effect
    activeEffect.deps.push(dep) // effect => deps添加dep
  }
}
```

### trigger

1. 根据 `type:TriggerOpTypes` 统计需要触发的 `effct`
2. 遍历`effects`，使用`run`函数，逐一执行`effect`函数

```ts
export function trigger(
  target: object,
  type: TriggerOpTypes,
  key?: unknown,
  newValue?: unknown,
  oldValue?: unknown,
  oldTarget?: Map<unknown, unknown> | Set<unknown>
) {
  const depsMap = targetMap.get(target)
  if (!depsMap) {
    // never been tracked
    return
  }

  const effects = new Set<ReactiveEffect>()  // 存储effect
  // effects.add(effect)
  const add = (effectsToAdd: Set<ReactiveEffect> | undefined) => {
    if (effectsToAdd) {
      effectsToAdd.forEach(effect => {
        if (effect !== activeEffect || effect.allowRecurse) {
          effects.add(effect)
        }
      })
    }
  }

  if (type === TriggerOpTypes.CLEAR) {
    // collection being cleared  => Map Set集合类型处理
    depsMap.forEach(add) // 遍历清除target的所有键名的的dep
  } else if (key === 'length' && isArray(target)) { // Array length
    depsMap.forEach((dep, key) => { // length 或者 将被删除的值
      if (key === 'length' || key >= (newValue as number)) {
        add(dep)
      }
    })
  } else {
    // schedule runs for SET | ADD | DELETE
    if (key !== void 0) {
      add(depsMap.get(key))
    }

    // ADD | DELETE | Map.SET 需要触发遍历器相关方法 的依赖
    // ['keys', 'values', 'entries', Symbol.iterator] 集合遍历的依赖
    // Array => length
    switch (type) {
      case TriggerOpTypes.ADD:
        if (!isArray(target)) {
          add(depsMap.get(ITERATE_KEY))
          if (isMap(target)) {
            add(depsMap.get(MAP_KEY_ITERATE_KEY))
          }
        } else if (isIntegerKey(key)) {
          // 数组新增值，长度增加
          add(depsMap.get('length'))
        }
        break
      // TriggerOpTypes.DELETE 不会导致数组长度变化
      // const a = [1, 2]; delete a[1]; => [1, empty]
      case TriggerOpTypes.DELETE: 
        if (!isArray(target)) {
          add(depsMap.get(ITERATE_KEY))
          if (isMap(target)) {
            add(depsMap.get(MAP_KEY_ITERATE_KEY))
          }
        }
        break
      case TriggerOpTypes.SET:
        if (isMap(target)) {
          add(depsMap.get(ITERATE_KEY))
        }
        break
    }
  }

  const run = (effect: ReactiveEffect) => {
    if (effect.options.scheduler) { // 执行effect.options的scheduler收集依赖
      effect.options.scheduler(effect) // apiWatch => doWatch
    } else {
      effect() // 执行副作用方法
    }
  }

  effects.forEach(run)
}
export const ITERATE_KEY = Symbol(__DEV__ ? 'iterate' : '')
export const MAP_KEY_ITERATE_KEY = Symbol(__DEV__ ? 'Map key iterate' : '') // 仅获取key值
```

## effect

执行`computed`，`watch`，`tempale模板渲染`等的过程中，生成`effect`

```ts
export function effect<T = any>(
  fn: () => T,
  options: ReactiveEffectOptions = EMPTY_OBJ
): ReactiveEffect<T> {
  // effect函数 获取原值
  if (isEffect(fn)) {
    fn = fn.raw
  }
  // 创建副作用函数
  const effect = createReactiveEffect(fn, options)
  if (!options.lazy) { // 立即执行
    effect()
  }
  return effect
}
```

### createReactiveEffect

`effectStack`是存储`effect`的栈，`effct`执行时，会将当前的`effect`推到栈的顶部，执行完回调函数`fn`后，再进行出栈

```ts
const effectStack: ReactiveEffect[] = [] // 存储effct的栈
let activeEffect: ReactiveEffect | undefined
let uid = 0 // effect 唯一id

function createReactiveEffect<T = any>(
  fn: () => T,
  options: ReactiveEffectOptions
): ReactiveEffect<T> {
  const effect = function reactiveEffect(): unknown {
    if (!effect.active) {
      return options.scheduler ? undefined : fn()
    }
    // effectStack避免重复执行effct  fn()
    if (!effectStack.includes(effect)) { 
      cleanup(effect)
      try {
        enableTracking()
        effectStack.push(effect) // 入栈
        activeEffect = effect
        return fn() // => 执行时activeEffect对于当前effct
      } finally {
        // 执行完成后，stack清除当前effect，activeEffect指向前一个effct
        effectStack.pop()  // 出栈
        resetTracking()
        activeEffect = effectStack[effectStack.length - 1]
      }
    }
  } as ReactiveEffect
  effect.id = uid++
  effect.allowRecurse = !!options.allowRecurse
  effect._isEffect = true
  effect.active = true
  effect.raw = fn
  effect.deps = []
  effect.options = options
  return effect
}

// 清除effect.deps中 每个dep绑定的当前effct
// 删除后，无依赖，deps置空
function cleanup(effect: ReactiveEffect) {
  const { deps } = effect
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect)
    }
    deps.length = 0
  }
}
```
