# performance

## 指标定义

### 加载速度

#### LCP

#### TTFB

#### FP

#### FCP

### 视觉稳定性

#### CLS

### 网站响应性

#### FID(First Input Delay)

它是一个真实用户网页性能指标，用于追踪用户在进入网页后首次与网页进行交互的时间，直到浏览器开始处理该交互（即浏览器的主线程空闲时）。

* TTI衡量的是页面完全可交互所需的时间，而FID则追踪页面完全可交互之前的用户输入。

> https://juejin.cn/post/7260506612971274296

#### TBT(Total Blocking Time)

TBT 表示从页面首次开始渲染内容到用户可交互时，被阻塞时间的总和，即长任务（任务执行时间超过 50ms）阻塞主线程的总时间。影响用户体验和FID。

* 阻塞时间：浏览器主线程任务超过 50ms 的部分


#### INP

#### TTI

* 页面已显示有用内容
* 页面上的可见元素关联的事件响应函数已经完成注册
* 事件响应函数可以在事件发生后的50ms内开始执行

TTI 主要是通过跟踪耗时较长的任务来确定，设置PerformanceObserver观察类型为 longtask 的条目， 然后可以根据耗时较长的条目的startTime和duration，来大致确认页面处于idle的时间，从而确定 TTI 指标。 Google希望将 TTI 指标标准化，并通过 PerformanceObserver 在浏览器中公开，但目前并不支持。 目前只能通过一个 polyfill，检测目前的 TTI，适用于所有支持 Long Tasks API 的浏览器。 该 polyfill 公开 getFirstConsistentlyInteractive() 方法，后者返回使用 TTI 值进行解析的 promise。 

> quote: https://zhuanlan.zhihu.com/p/584767348

(Time to Interactive)

Time to Interactive的简写，中文名称可交互时间。

它用于衡量网页加载完成后，用户可以与页面进行交互的时间。它是页面加载过程中的一个关键度量标准，更准确地反映了用户实际体验的时间点。

TTI指标包含两个要素：

* 加载完成时间 (Load Event End)：指浏览器完成文档加载的时间点。也就是整个网页及其所有资源（如CSS、JavaScript、图像等）都已下载完成，但不一定是所有资源都已经执行完毕。
* 主线程空闲时间 (Main Thread Idle Time)：指主线程空闲并且可以响应用户输入的时间点。这意味着网页的JavaScript执行已经完成，没有长时间的阻塞操作，并且页面可以对用户的交互事件作出快速响应。

> TTI可以视为用户可以与网页完全交互的时间点，而不会感到页面过于卡顿或响应缓慢。更短的TTI意味着用户能够更快地开始浏览、点击按钮或输入内容，提高用户体验和页面的互动性。

> https://juejin.cn/post/7260506612971274296

```js
// 首先是在中设置PerformanceObserver，并指定监控类型为longtask。
// collect the longtask
if (PerformanceLongTaskTiming) {
    window.__tti = {e: []};
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            // observe the longtask to get the time to interactive (TTI)
            if (entry.entryType === 'longtask') {
                window.__tti.e.concat(entry);
            }
        }
    });
    observer.observe({entryTypes: ['longtask']});
}

// 然后引入tti-polyfill.js(可通过npm包获取)，获取到tti的值。

import ttiPolyfill from 'tti-polyfill.js';

ttiPolyfill.getFirstConsistentlyInteractive().then((tti) => {
  // ...
});
```

## 优化方法

### 加载阶段

核心是快

#### 减小体积

#### 提高请求速度

#### 减小请求次数

### 渲染运行时

#### css

#### js

#### ssr

### 编译阶段


