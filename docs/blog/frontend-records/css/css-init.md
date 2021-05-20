---
meta:
  - name: keywords
    content: css,初始化
  - name: description
    content: css样式初始化
---

# css常用初始化样式

## input 

默认样式去除

```css
input {
  border: none;
  /* 取消ie浏览器下点击a标签时出现的虚线 */
  outline: none; 
  -web-kit-appearance: none;
  -moz-appearance: none;
}
```

默认填充样式清除，背景色设置白色

```css
input:-webkit-autofill {
 box-shadow: 0 0 0px 1000px white inset !important;
}  
input:-webkit-autofill:focus {
 box-shadow: 0 0 0px 1000px white inset !important;
} 
```

设置选择与预览状态输入框样式

```css
input:-internal-autofill-previewed,
input:-internal-autofill-selected {
    -webkit-text-fill-color: #FFFFFF !important; 
    /*支持使用background-color */ 
    transition: background-color 5000s ease-in-out 0s !important;
}
```
## 移动端A标签点击高亮

```css
html {
  -webkit-tap-highlight-color: rgba(255,0,0,0.5);
  -webkit-tap-highlight-color: transparent;
}
```

## -webkit-text-size-adjust

1. 当样式表里font-size<12px时，中文版chrome浏览器里字体显示仍为12px

`html { -webkit-text-size-adjust: none; }`

2、`-webkit-text-size-adjust`放在body上会导致页面缩放失效

3、body会继承定义在html的样式

4、用`-webkit-text-size-adjust`不要定义成可继承的或全局的


## 引用

> https://www.cnblogs.com/libin-1/p/5903350.html