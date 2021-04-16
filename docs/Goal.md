# goal

## pwa 

https://www.jianshu.com/p/098af61bbe04

https://segmentfault.com/a/1190000015828713

https://segmentfault.com/a/1190000013156728

## git 熟悉

[git cherry-pick 教程](https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html)

[git 200](vue-cli-plugin-style-resources-loader)


## webpack

### 流程

https://mp.weixin.qq.com/s/2-zNlGrKUngWdQNvlcgESw

### scope hoisting 是 webpack3 的新功能，直译过来就是「作用域提升」

https://ssshooter.com/2019-02-20-webpack-scope-hoisting/

https://segmentfault.com/a/1190000018220850

### css 全局变量配置

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



## github

[github克隆失败提示“443：Timed out”怎么解决？](https://www.zhihu.com/question/401499640)
[解决连不上GitHub，也ping不通](https://blog.csdn.net/believe_s/article/details/81539747)

## next
### 网络通信

### 浏览器渲染

### node事件循环

### 语法解析 预编译 执行 => 遇到函数执行 预编译 执行

### 错误处理