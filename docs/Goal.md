## 网络通信

## 浏览器渲染

## 迭代器 await 

## vue 权限控制 https://www.cnblogs.com/ssh-007/p/10295575.html

## node事件循环

## ios重影

## 语法解析 预编译 执行 => 遇到函数执行 预编译 执行


## pwa 

https://www.jianshu.com/p/098af61bbe04

https://segmentfault.com/a/1190000015828713

https://segmentfault.com/a/1190000013156728

## git 熟悉

[git cherry-pick 教程](https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html)

[git 200](vue-cli-plugin-style-resources-loader)


## css

### 全局变量配置

[sass-resources-loader](https://segmentfault.com/a/1190000020392688?utm_source=sf-related)

```js
  // 增加vue.config.js文件配置css
  css: {
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        prependData: '@import "@/styles/variables.scss";'
      }
    }
  }
  
```

[style-resources-loader / vue-cli-plugin-style-resources-loader]()

```js
  // 增加vue.config.js文件配置css
  css: {
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        prependData: '@import "@/styles/variables.scss";'
      }
    }
  }
```

## 错误处理