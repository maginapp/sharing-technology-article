---
meta:
  - name: keywords
    content: vuepress,插件
  - name: description
    content: vuepress实用插件简介
---

# vuepress实用插件简介

## vssue评论功能

[vssue](https://vssue.js.org/zh/): Vue 驱动的、基于 Issue 的评论插件

> 提示
> 在你评论了一个 Issue 之后，每当有新评论，平台都会给你发送邮件提醒。有新用户在这个演示页面留下评论时，这些提醒邮件可能会比较烦人。
> 你可以前往 [Issue]() 页面来取消订阅提醒（unsubscribe the notifications）。


## 配置流程

> 本文是基于github仓库和issues系统，配置的vssue

### 依赖安装

```bash
npm install @vssue/vuepress-plugin-vssue
# 需要登录
npm install @vssue/api-github-v4 
# or 无需登录，调用次数有限制
# npm install @vssue/api-github-v3
```

### 配置

> [vssue配置](https://vssue.js.org/zh/options/)

```js
['@vssue/vuepress-plugin-vssue', {
  platform: 'github-v4', // v3 => github，v4 => github-v4
  // 其他的 Vssue 配置
  locale: 'zh', // 语言
  owner: 'maginapp', // github账户名
  repo: 'sharing-technology-article-comment', //github项目名称 => 存储 Issue 和评论
  clientId: 'clientId',// Client ID
  clientSecret: 'clientSecret ',// Client Secret
  autoCreateIssue: true // 自动创建评论，默认是false，避免首次进入页面的时候需要点击创建评论的按钮
}]
```

## Auth Apps设置，获取clientId和clientSecret

1. 登录`github`，进入`OAuth Apps`

> [setteing](https://github.com/settings/profile) => 侧边 [Developer settings](https://github.com/settings/apps) => OAuth Apps

<imgWithBase src="/webstatic/2020-05-01-token-get.png" />

2. 创建新项目，设置仓库名称和仓库

<imgWithBase src="https://maginapp.github.io/static-website/images/images-wait-sharp/about-config/githun-setting-auth-knock-blog-create.png" />

3. 记录设置 `clientId`等相关数据

<imgWithBase src="https://maginapp.github.io/static-website/images/images-wait-sharp/about-config/githun-setting-auth-knock-blog-comment.png" />

## 插件使用

`@vssue/vuepress-plugin-vssue`会注册全局组件`Vssue`，再需要添加的页面中增加`<Vssue />`即可生效

<imgWithBase src="https://maginapp.github.io/static-website/images/images-wait-sharp/about-config/githun-setting-auth-knock-review.png" />

### 页面自动添加vssue

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

## vuepress-plugin-code-copy

[znicholasbrown/vuepress-plugin-code-copy](https://github.com/znicholasbrown/vuepress-plugin-code-copy)试下代码复制功能

usage

```js
module.exports = {
    plugins: [['vuepress-plugin-code-copy', true]]
}
module.exports = {
  plugins: [
    ["vuepress-plugin-code-copy", {
        selector: String,
        align: String,
        color: String,
        backgroundTransition: Boolean,
        backgroundColor: String,
        successText: String
        }
    ]
  ]
}
```

