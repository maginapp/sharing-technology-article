---
meta:
  - name: keywords
    content: npm,puhlish
  - name: description
    content: 发布自己的npm包
---

# 发布自己的npm包

## 创建初始化项目

创建空文件夹，执行`npm init`

`package.json`示例：

```json
{
  // 发布的包名，默认是上级文件夹名
  // 不得与已有npm中的包名重复，建议添加个人空间 @userName:packageName
  // 包名不能包含 大写字母/空格/下滑线
  "name": "@maginapp/vuepress-plugin-copy-code",
  // 包的版本 X.Y.Z。
  // 主版本X: 进行不兼容的 API 更改
  // 次版本Y: 向后兼容的方式添加功能
  // 补丁版本Z: 向后兼容的缺陷修复
  "version": "1.0.0",
  "description": "vuepress-plugin-copy-code",
  // 入口文件
  "main": "index.js",
  // 脚本执行命令
  "scripts": {
    "test": "test"
  },
  // 仓库信息
  "repository": {
    "type": "git",
    "url": "git+https://github.com/maginapp/vuepress-plugin-copy-code.git"
  },
  "keywords": [
    "vuepress",
    "copy",
    "copyCode"
  ],
  "author": {
    "name": "maginapp",
    "email": "1075433743@qq.com"
  },
  // 开源文件协议
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/maginapp/vuepress-plugin-copy-code/issues"
  },
  "homepage": "https://github.com/maginapp/vuepress-plugin-copy-code#readme",
  "publishConfig": {
    "access": "public"
  }
}
```

### 包功能开发

`index.js`
```js
module.exports = function() { console.log('hello world') }
```

## 创建npm账号

[npmjs](https://www.npmjs.com/)

## 连接npm

* 首次使用：执行`npm adduser`，添加npm用户信息

* 非首次：执行`npm login`

## 发包

执行`npm publish`

> 每次发布的版本号需要大于之前的版本

## 撤销发布

> 24小时内发布的包才能删除
>
> 删除包24小时后才能重新发布同名包

```bash
// 撤销执行版本
npm unpublish packageName@version
// 撤销整个包
npm unpublish packageName@version --force 
```

```
npm unpublish @maginapp/vuepress-plugin-copy-code@1.0.0
```

## 引用

[使用 npm 的语义版本控制](http://nodejs.cn/learn/semantic-versioning-using-npm)
