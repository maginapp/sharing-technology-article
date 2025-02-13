# 博客分享-MAGINA

[博客首页](https://maginapp.github.io/sharing-technology-article)

## 分类

:point_right:[个人笔记](https://maginapp.github.io/sharing-technology-article/blog/) | :point_right:[文章分享](https://maginapp.github.io/sharing-technology-article/sharing/) | :point_right:[面试题](https://maginapp.github.io/sharing-technology-article/interview/)

> 网站基于Markdown/Vue开发，travis集成发布，github提供静态服务器与域名 :point_right:[网站](https://maginapp.github.io/sharing-technology-article/) :point_right:[仓库](https://github.com/maginapp/sharing-technology-article)

## test

测试demo与测试服务器位置 [:point_right:](/test) 

### node-server

*/test/node-server/*: 

`服务端测试`/`图片在线压缩`/`gif在线生成`/`在线编译ts`等功能

依赖安装

```bash
# /test/node-server 目录
npm install
```

运行服务

```bash
npm run test
```

### node-crawler

*/test/node-crawler/*: 支持`本项目仓库github-issue抓取`等功能

```bash
# /test目录
npm install
# /test/node-crawler 目录
npm install
```

### ts

*/test/ts/*: `TypeScript`测试

```bash
npm install -g typescript
# /test/ts 目录 编译ts文件
npm run tsc
```

## 记录

* `2020/05/31` 添加pwa模块，确定网站模板
* `2020/06/01` pwa测试成功，增加了添加网页到桌面功能
* `2020/01/10` 测试服务搭建 [test/node-server](/test/node-server)
* `2020/04/07` github-issue抓取 [test/node-crawler](/test/node-crawler)
* `2020/04/07` 新增[图片仓库](https://github.com/maginapp/static-website)，利用travis搭建网站，减小本项目仓库图片数量
* `2020/04/14` 新增code区域代码复制功能
* `2020/04/15` 新增`typescrit`测试文件
* `2020/04/19` 基于`vssue`添加评论功能
