# vuepress搭建踩坑

## 准备

### 获取token，用于travis构建发布权限配置

> 个人账户 > developer settings > Personal access tokens > add

配置token，暂时未研究具体权限需求，提供了除删除仓库外的所有权限

<ImgWithBase src="/webstatic/2020-05-01-token-get.png"/>

### [travis-ci](https://travis-ci.org/)注册

使用github同步账户数据

> setting页配置需要同步到travis的仓库 > 进入对应的仓库settings配置 Environment Variables（键值对）

配置的键名: 项目中的[.travis.yml](#travis-部署)文件中 github_token所配置的变量名对应
值：上一步的token，考虑到安全性问题，设置为不可见


## 开始

### github创建仓库

### 项目仓库设置

> settings > options > GitHub Pages > sources修改访问资源 `gh-pages`

使用travis构建后，会自动想仓库推送打包后的gh-pages分钟，切换到该分支后，即可访问  `https://<username>.github.io/<repository name>/`

### .vuepress > config.js设置

base: 设置为仓库名 `<repository name>`

dest: 打包后的地址 默认 `<资源文件夹>/.vuepress/dist`

## 部署

### travis 部署

项目添加.travis.yml文件，[参考](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)

``` yml{12}
language: node_js
node_js:
  - lts/*
install:
  - npm ci
script:
  - npm run build
deploy:
  provider: pages
  skip_cleanup: true
  local_dir: docs/.vuepress/dist
  github_token: $GITHUB_TOKEN # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable
  keep_history: true
  on:
    branch: master
```

### deploy.sh

配置 deploy.sh ，[参考](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)

``` sh{13,20,23}
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:maginapp/sharing-technology-article.git master:gh-pages

cd -
```
## tips

### sidebar 路径设置

* '/test/': 查找test文件夹下的index.html

* '/test': test.html test/index.html

### 静态资源/图片路径


* 根据vuepress官网配置了alias，没能生效，最后选择了使用相对地址

使用此写法会打包到`assets/img/`

* 放置在`.vuepress/public`中的资源会直接打包到根目录中，以`.vuepress/public`为根目录写地址即可

* 由于项目config.js配置了base参数，需要使用$withbase调整地址，此处使用了图片组件完成

此处使用了vue的方法，$withbase被注入到vue原型上，需要使用vue的语法书写才能调用成功

``` md
> 失败
![2020-5-1-token账户进入]($withBase('/webstatic/2020-05-01-token-get.png'))
> 成功
<img :src="$withBase('/webstatic/2020-05-01-token-get.png')" alt="2020-5-1-token账户进入">
> 成功
<ImgWithBase src="/webstatic/2020-05-01-token-get.png"/>
```

```{2,5}
# .vuepress/public
test.png

# md文件
![图片 来自 public](/test.png)
```

### 代码高亮显示

```{1}
``` type{行号,行号}
1
3
测试
```

### [emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

```
:tada: :100:
```
:tada: :100:

### 自定义容器

``` md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger 提示标题 
这是一个危险警告
:::

类似 <summary> <details>
::: details 标题
这是一个详情块，在 IE / Edge 中不生效
:::
```

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger error
这是一个危险警告
:::

::: details 点击查看代码
这是一个详情块，在 IE / Edge 中不生效
:::