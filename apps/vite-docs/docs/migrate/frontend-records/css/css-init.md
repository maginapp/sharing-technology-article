---
meta:
  - name: keywords
    content: css,初始化
  - name: description
    content: 常用的css样式初始化
---

# css常用初始化样式

## input相关默认样式去除

> 默认样式去除

```css
input {
  /* 边框设置 */
  border: none;
  /* focus边框 */
  outline: none; 
  /* 默认样式去除 */
  -webkit-appearance: none;
  -moz-appearance: none;
}
```

> 默认填充样式清除，背景色设置白色

```css
input:-webkit-autofill {
 box-shadow: 0 0 0px 1000px white inset !important;
}  
input:-webkit-autofill:focus {
 box-shadow: 0 0 0px 1000px white inset !important;
} 
```

> 设置选择与预览状态输入框样式

```css
input:-internal-autofill-previewed,
input:-internal-autofill-selected {
    -webkit-text-fill-color: #FFFFFF !important; 
    /*支持使用background-color */ 
    transition: background-color 5000s ease-in-out 0s !important;
}
```

> 其他

```css
input[type="submit"],button,input[type="button"] {}
input[type="text"], input[type="password"], textarea{}
input[type="number"] {}
button[disabled] {}
```

```scss
@mixin input-style($color, $borderColor, $placeColor, $disableColor) {
  color: $color;
  border-color: $borderColor;
  &:focus {}
  &:disabled, &[disabled] {}
  &::placeholder {}
}
```

## 移动端A标签点击高亮

> 在移动端上，有事件监听的元素被点击的时候会被高亮显示，而-webkit-tap-highlight-color属性会在当用户点击iOS的Safari浏览器中的链接或JavaScript的可点击的元素时，覆盖显示的高亮颜色。

```css
html {
  -webkit-tap-highlight-color: rgba(255,0,0,0.5);
  -webkit-tap-highlight-color: transparent;
}
```

## 禁止选中文字

```css
.no-select {
  -moz-user-select:none; /* Firefox私有属性 */
  -webkit-user-select:none; /* WebKit内核私有属性 */
  -ms-user-select:none; /* IE私有属性(IE10及以后) */
  -khtml-user-select:none; /* KHTML内核私有属性 */
  -o-user-select:none; /* Opera私有属性 */
  user-select:none; /* CSS3属性 */
}
```

## 禁止长按链接与图片弹出菜单

```css
img,
a {
  -webkit-touch-callout: none;
}
```

## 抗锯齿渲染

-webkit-font-smoothing它有三个属性值：

1. `none`：对低像素的文本比较好
2. `subpixel-antialiased`：默认值
3. `antialiased`：抗锯齿很好 


```css
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

## 文字省略

> 单行

```css
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

> 多行

```css
.text-ellipsis {
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

> scss

```scss
@mixin text-ellipsis($line) {
  @if $line >= 2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: $line;
    -webkit-box-orient: vertical;
  }
  @if 1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
```

## 侧边滚动栏

### 去除滚动栏

> css

```scss 
.element {
  -ms-overflow-style: none; /* IE10+ */
  overflow: -moz-scrollbars-none; /* Firefox */
  &::-webkit-scrollbar { /* chrome 和Safari */
    width: 0 !important 
  } 
}
```

> [其他](https://juejin.cn/post/6844903577094209544)

### 滚动栏样式修改

```scss
::-webkit-scrollbar {
  /* 滚动条的宽度 */
  width: 8px;
  height: 10px;
  background-color: #aaa; /* 滚动条颜色 */
}

::-webkit-scrollbar-thumb {
  background-color: #000; /* 滚动按钮的颜色 */
  border-radius: 5px; /* 滚动按钮的边框倒角*/
}
```

## a标签颜色样式

```scss
@mixin a-style($color, $hasUnderline) {
  color: $color;
  border-color: ;
  &:active,
  &:hover,
  &:visited,
  &:disabled,
  &[disabled] {
    color: $color;
  }
  &:hover {
    @if $hasUnderline {
      text-decoration: underline;
    }
  }
}
```

## 文献参考

* [mozilla ::-webkit-scrollbar](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar)

* [3种方法实现CSS隐藏滚动条并可以滚动内容](https://juejin.cn/post/6844903577094209544)