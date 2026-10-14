---
title: electron入门-常见问题汇总
---


## electron安装失败处理

1. pnpm不执行 postinstall

从 pnpm v8+ 开始，pnpm 引入新的安全特性 `enable-pre-post-scripts: false` 来默认禁用依赖包中的构建脚本（如 preinstall/postinstall），防止供应链攻击

```bash
pnpm approve-builds
```

2. install.js 执行失败，下载资源缓慢或失败

设置npm源
```text
#.npmrc
electron_mirror=https://npmmirror.com/mirrors/electron/
```

3. 本地化安装

访问官网或[npm](https://npmmirror.com/mirrors/electron/)，直接下载

修改pnpm内electron包的install.js文件，去除下载过程，直接进入解压缩流程
