---
meta:
  - name: keywords
    content: vue3源码解析,响应式数据解析
  - name: description
    content: vue3源码解析-响应式原理
---

# vue3 reactivity解析

基于 `vue3@3.0.9`

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

utils函数:

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

`createReactiveObject` 包装数据

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

```ts
function createSetter(shallow = false) {
  return function set(
    target: object,
    key: string | symbol,
    value: unknown,
    receiver: object
  ): boolean {
    const oldValue = (target as any)[key]
    if (!shallow) {
      value = toRaw(value)
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value
        return true
      }
    } else {
      // in shallow mode, objects are set as-is regardless of reactive or not
    }

    const hadKey =
      isArray(target) && isIntegerKey(key)
        ? Number(key) < target.length
        : hasOwn(target, key)
    const result = Reflect.set(target, key, value, receiver)
    // don't trigger if target is something up in the prototype chain of original
    if (target === toRaw(receiver)) {
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

