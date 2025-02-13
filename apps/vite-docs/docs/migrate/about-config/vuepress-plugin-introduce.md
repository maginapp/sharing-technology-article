---
meta:
  - name: keywords
    content: vuepress,插件
  - name: description
    content: vuepress实用插件简介
---

# vuepress实用功能及插件简介

## vssue评论功能

[vssue](https://vssue.js.org/zh/): Vue 驱动的、基于 Issue 的评论插件

> 提示
> 在你评论了一个 Issue 之后，每当有新评论，平台都会给你发送邮件提醒。有新用户在这个演示页面留下评论时，这些提醒邮件可能会比较烦人。
> 你可以前往 [Issue]() 页面来取消订阅提醒（unsubscribe the notifications）。


### 配置流程

> 本文是基于github仓库和issues系统，配置的vssue

#### 依赖安装

```bash
npm install @vssue/vuepress-plugin-vssue
# 需要登录
npm install @vssue/api-github-v3
# or 无需登录，调用次数有限制
# npm install @vssue/api-github-v4 
```

#### 基础配置

> [vssue配置](https://vssue.js.org/zh/options/)


```js
['@vssue/vuepress-plugin-vssue', {
  platform: 'github', // v3 => github，v4 => github-v4
  // 其他的 Vssue 配置
  locale: 'zh', // 语言
  owner: 'maginapp', // github账户名
  repo: 'sharing-technology-article-comment', //github项目名称 => 存储 Issue 和评论
  clientId: 'clientId',// Client ID
  clientSecret: 'clientSecret ',// Client Secret
  // autoCreateIssue: true // 自动创建评论，默认是false，避免首次进入页面的时候需要点击创建评论的按钮
}]
```

### Auth Apps设置，获取clientId和clientSecret

1. 登录`github`，进入`OAuth Apps`

> [setteing](https://github.com/settings/profile) => 侧边 [Developer settings](https://github.com/settings/apps) => OAuth Apps

<imgWithBase src="/webstatic/2020-05-01-token-get.png" />

2. 创建新项目，设置仓库名称和仓库

<imgWithBase src="https://maginapp.github.io/static-website/images/images-wait-sharp/about-config/githun-setting-auth-knock-blog-create.png" />

3. 记录设置 `clientId`等相关数据

<imgWithBase src="https://maginapp.github.io/static-website/images/images-wait-sharp/about-config/githun-setting-auth-knock-blog-comment.png" />

### 插件使用

`@vssue/vuepress-plugin-vssue`会注册全局组件`Vssue`，再需要添加的页面中增加`<Vssue />`即可生效

<imgWithBase src="https://maginapp.github.io/static-website/images/images-wait-sharp/about-config/githun-setting-auth-knock-review.png" />

#### 页面自动生成issue

设置配置项`autoCreateIssue`为true，新页面访问后会自动生成对应的issue，不用手动点击创建问题
#### 页面自动添加vssue

利用vuepress的`theme`配置，添加vssue组件


1. `.vuepress`下创建`theme`文件夹

1. 进入目标文件夹拉取`node_modules\@vuepress\theme-default\layouts\Layout.vue`
    * *node_modules/@vuepress/*
    * `git clone https://gitee.com/mirrors/VuePress.git` => *packages/@vuepress/*
2. 将`*/theme-default/layouts/Layout.vue* 复制到*/theme/layouts*下，Layout.vue做如下高亮代码：

```vue {6}
<template>
  <div>
    <Page>
      <template #bottom>
        <slot name="page-bottom" />
        <Vssue />
        <!-- <Vssue v-if="!hideVssuePages.includes($page.path)" /> -->
      </template>
    </Page>
  </div>
</template>
```

3. 将`*/theme-default/util* 文件夹复制到*/theme*下
4. `theme`下创建`index.js`，写入：
```js
module.exports = {
  extend: '@vuepress/theme-default'
}
```

### vussue不更新问题

> 切换页面时，vssue模块未自动更新，还是初始页面的问题与评论
> 检查页面加载，发现切换页面时，会加载新页面js，直接更新网页链接，并不会跳转新页面

为`vssue`组件添加*key*，在`.vuepress/enhanceApp.js`中监听路由变化，进入新页面更新key，触发组件重新初始化渲染

#### **方法一**

> 此方法添加了额外的全局变量，已废弃

*layout.vue*: 添加全局变量`layoutPage`，用于获取issue的key值

```vue
<template>
  <div>
    <Page>
      <Vssue :key="vssueKey" v-if="!hideVssuePages.includes($page.path)" />
    </Page>
  </div>
</template>
<script>

export default {
  name: 'Layout',ata () {
    return {
      hideVssuePages: [], // 不显示vssue的页面$route.path
      vssueKey: 0
    }
  },
  mounted () {
    window.layoutPage = this // 添加全局变量，存储当前页面实例
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  }
}
</script>
```

*enchanceApp.js*: 监听路由变量，进入新页面时，更新`vssueKey`

```js
export default (context) => {
	const { router } = context
	if(typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
		router.beforeEach((to, from, next) => {
			if (to.name !== from.name && window.layoutPage) {
				window.layoutPage.vssueKey++
			}
			next()
		})
	}
}
```

#### 方法二

*layout.vue*中监听`$route.path`改变键值

```js
watch: {
  '$route.path'(to, from) {
    if (to !== from) {
      this.vssueKey++
    }
  }
}
```
## @maginapp/vuepress-plugin-code-copy

[@maginapp/vuepress-plugin-code-copy](https://github.com/maginapp/vuepress-plugin-copy-code)

### usage

```js
module.exports = {
  plugins: [['vuepress-plugin-code-copy']]
  // ...
  plugins: [
    ["@maginapp/vuepress-plugin-code-copy", {
      selector: String, // 代码选择器
      color: String, // icon颜色
      backgroundTransition: Boolean, // 背景动效
      backgroundColor: String, // 背景动效颜色
      successText: String, // 成功文案
      duration: Number, // 成功提示时间
      iconVisible: Boolean, // hover展示或者始终展示
      showInMobile: Boolean, // 移动端显示
      align: Object, // icon定位
    }]
  ]
}
```

## 简易锚点滚动特性

基于原生[`scrollIntoView`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView)开发

在`.vuepress`文件夹下添加`enhanceApp.js`文件，并加入如下代码：

```js
export default ({ router }) => {
	if(typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
		router.onReady(() => {
			const { app } = router;
			app.$once("hook:mounted", () => {
        console.log('hook:mounted')
				setTimeout(() => {
					const { hash } = document.location;
            if (hash.length > 1) {
            const id = decodeURIComponent(hash.substring(1))
            const element = document.getElementById(id)
            if (element) element.scrollIntoView()
          }
				}, 200)
				document.body.addEventListener('click', (e) => {
					if (e.target) {
						const node = e.target
						if (node.href) return
						let url
						try {
							url = new URL(node.href)
						} catch{
							return
						}
						if (node.nodeName === 'A' && url.hash) {
							const local = new URL(location.href)
							if (local.pathname === url.pathname) {
								const id = decodeURIComponent(url.hash.substring(1))
								const element = document.getElementById(id)
								if (element) {
									element.scrollIntoView({behavior: "smooth"})
									e.stopPropagation()
									e.preventDefault()
								}
							}
						}
					}
				}, true)
			})
		})
	}
}
```

## 图片放大

> vuepress官方插件
>
> https://vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html#install

### install

```sh
yarn add -D @vuepress/plugin-medium-zoom
# OR npm install -D @vuepress/plugin-medium-zoom
```

### Usage

```js
module.exports = {
  plugins: ['@vuepress/medium-zoom'],
  // or
  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img.zoom-custom-imgs',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16
      }
    }
  }
}
```

### Options

#### selector

* Type: `string`
* Default: `.theme-default-content :not(a) > img`

需要在父组件上添加类名`theme-default-content`，本页面添加在theme`Page`组件上

#### options

* Type: `object`
* Default: `undefined`

[options](https://github.com/francoischalifour/medium-zoom#options) for [medium-zoom](https://github.com/francoischalifour/medium-zoom)

