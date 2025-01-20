---
meta:
  - name: keywords
    content: BEM,css类名规范,BEM思想
  - name: description
    content: css类名规范-BEM思想
---

# BEM-css类名规范


团队开发中，css相关的样式污染，依赖性高等痛点经常出现，因此有统一的css类名命名规范就很重要。本文介绍的`BEM`命名规范很适合基础组件开发使用

对于业务代码，可能会由于项目逐渐变大可读性降低，考虑到人员流动性和业务快速迭代等因素，不推荐使用`BEM`命名规范

## USAGE

使用__连接Element，使用--连接Modifier

> Block__Element--Modifier

## BEM简介


| <span style="color: #76b24f;">Block</span> | <span style="color: #4f91b2">Element</span> |  <span style="color: #d5635d">Modifier</span> |
|:--- |:--- |:---|
| 具有独立意义的独立实体。<br/>`Block`可以嵌套并彼此交互，但从语义上讲，它们保持相等；没有优先级或层次结构。<br/>没有DOM表示的整体实体（例如控制器或模型）也可以是块。 | `Block`的一部分，没有独立的含义，并且在语义上与该`Block`相关。 | `Block`或`Element`上的标志。使用`Modifier`可以更改外观或行为。 |
| 命名 | 
| `Block`名称可包含:<br/>字母，数字和破折号组成 <br/> <br/> .Block |  `Element`名称可包含：<br/>字母，数字，破折号和下划线 <br/><br/> .Block__Element |  `Modifier`名称可包含：<br/>字母，数字，破折号和下划线，<br/>复杂的修饰符中的空格使用-代替 <br/><br/> .Block__Element--Modifier<br/> .Block--Modifier  | 
| Examples | 
| .block, .block-block-2 |  .block__body, .block__body-element-1 |  .block--mod, .block__elem--mod, .block--color-blackd | 
| HTML |
| 如果任何DOM节点接受类名，则可以是一个块。 | **块中**的任何DOM节点都可以是一个元素。 | 修饰符是一个额外的类名称，您可以将其添加到块/元素DOM节点中。仅将修饰符类添加到它们修改的块/元素中，并**保留原始类**。|
| GOOD |
| |  \<div class="block"> <br/>&nbsp;&nbsp;...<br/>&nbsp;&nbsp;\<span class="block__elem">\</span> <br/>\</div>| \<div class="block block--mod">...\</div> <br/> \<div class="block block--size-big block--shadow-yes">...\</div>| 
| BAD |
| |  | \<div class="block--mod">...\</div> |
| CSS |
| Use class name selector only <br/><br/>No tag name or ids<br/><br/>No dependency on other blocks/elements on a page | Use class name selector only <br/><br/>No tag name or ids<br/><br/>No dependency on other blocks/elements on a page | Use modifier class name as selector<br/><br/> To alter elements based on a block-level modifier<br/><br/> Element modifier |
| GOOD | 
| .block {  } | .block__body {  } | Use modifier class name as selector <br/>.block--mod .block__elem  {}   <br/><br/> To alter elements based on a block-level modifier <br/> .block--hidden { } <br/><br/> Element modifier <br/>.block__elem--mod { } |
| BAD | 
| | .block .block__elem {  } , div.block__elem {  }| |
| Examples | 
| `header`, `container`, `menu`, `checkbox`, `input` | `menu item`, `list item`, `checkbox caption`, `header title` | `disabled`, `highlighted`, `checked`, `fixed`, `size big`, `color yellow` |


<ImgWithBase src="/images/quote/bem_css_github_captions.jpg" alt="css-bem" style="max-width:800px;"/>

## 在scss中使用

配合`scss`的`@mixin`, `@include`, `@extend`, `@at-root`等简化css编写

```scss
@mixin flex-center-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
@mixin border-shadow-type($color, $alpha) {
  border: 1px solid $color;
  box-shadow: 0 0 5px rgba($color, $alpha);
}
.layout {
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  &__header {
    width: 100%;
    height: 50px;
  }
  &__body {
    width: 100%;
    &--warning {
      @include border-shadow-type(#ff3333, .5);
    }
    &--center {
      @include flex-center-box;
      @at-root .layout--warning & {
        background: rgba(#ff3333, .9);
      } 
    }
  }
  &--center {
    @include flex-center-box;
  }
  .layout--primary {
    @include border-shadow-type(green, .5);
  }
}
```

编译后

```css
.layout{width:100%;overflow-x:hidden;overflow-y:auto}
.layout__header{width:100%;height:50px}
.layout__body{width:100%}
.layout__body--warning{border:1px solid #ff3333;box-shadow:0 0 5px rgba(255,51,51,0.5)}
.layout__body--center{display:flex;align-items:center;justify-content:center}
.layout--warning .layout__body--center{background:rgba(255,51,51,0.9)}
.layout--center{display:flex;align-items:center;justify-content:center}
.layout .layout--primary{border:1px solid green;box-shadow:0 0 5px rgba(0,128,0,0.5)}
```

## 文献参考

[BEM官网](http://getbem.com/)

[BEM介绍](http://getbem.com/introduction/)

> 本文引用自
>  
> BEM官网
>  
> http://getbem.com/introduction/
> 
> http://getbem.com/naming/
