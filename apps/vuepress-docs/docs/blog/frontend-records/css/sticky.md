---
meta:
  - name: keywords
    content: css,postion,sticky
  - name: description
    content: postion, sticky
---


# sticky

## 说明

`sticky`元素根据正常文档流进行定位，然后相对它的最近滚动祖先（nearest scrolling ancestor）和 [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) (最近块级祖先 nearest block-level ancestor)，包括table-related元素，基于top, right, bottom, 和 left的值进行偏移。偏移值不会影响任何其他元素的位置。 ===> **未设置偏移属性时，`sticker`元素展现效果与相对定位相同**

该值总是创建一个新的[层叠上下文（stacking context）](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)。注意，一个sticky元素会“固定”在离它最近的一个拥有“滚动机制”的祖先上（当该祖先的overflow 是 hidden, scroll, auto, 或 overlay时），即便这个祖先不是最近的真实可滚动祖先。这有效地抑制了任何“sticky”行为（详情见[Github issue on W3C CSSWG](https://github.com/w3c/csswg-drafts/issues/86)）。 ===> **`sticker`元素不会超出最近的块级祖先**

粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。例如：

```css
#one { position: sticky; top: 10px; }
```

在 viewport 视口滚动到元素 top 距离小于 10px 之前，元素为相对定位。之后，元素将固定在与顶部距离 10px 的位置，直到 viewport 视口回滚到阈值以下。

粘性定位常用于定位字母列表的头部元素。标示 B 部分开始的头部元素在滚动 A 部分时，始终处于 A 的下方。而在开始滚动 B 部分时，B 的头部会固定在屏幕顶部，直到所有 B 的项均完成滚动后，才被 C 的头部替代。

须指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其展现效果与相对定位相同。

## code

```css
.demo-box {
  width: 100%;
  max-width: 800px;
  height: 200px;
  overflow: auto;
}

.demo-box * {
  box-sizing: border-box;
}

dl {
  margin: 0;
  padding: 24px 0 0 0;
}

dt {
  background: #B8C1C8;
  border-bottom: 1px solid #989EA4;
  border-top: 1px solid #717D85;
  color: #FFF;
  font: bold 18px/21px Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

dd {
  font: bold 20px/45px Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0 0 0 12px;
  white-space: nowrap;
}

dd + dd {
  border-top: 1px solid #CCC
}
```

```html
<div>
  <div class="demo-box">
    <dl>
      <dt>A</dt>
      <dd>Andrew W.K.</dd>
      <dd>Apparat</dd>
      <dd>Arcade Fire</dd>
      <dd>At The Drive-In</dd>
      <dd>Aziz Ansari</dd>
    </dl>
    <dl>
      <dt>C</dt>
      <dd>Chromeo</dd>
      <dd>Common</dd>
      <dd>Converge</dd>
      <dd>Crystal Castles</dd>
      <dd>Cursive</dd>
    </dl>
    <dl>
      <dt>E</dt>
      <dd>Explosions In The Sky</dd>
    </dl>
    <dl>
      <dt>T</dt>
      <dd>Ted Leo &amp; The Pharmacists</dd>
      <dd>T-Pain</dd>
      <dd>Thrice</dd>
      <dd>TV On The Radio</dd>
      <dd>Two Gallants</dd>
    </dl>
  </div>
</div>
```

## demo

<style>
.demo-box {
  width: 100%;
  max-width: 800px;
  height: 200px;
  overflow: auto;
}

.demo-box * {
  box-sizing: border-box;
}

dl {
  margin: 0;
  padding: 24px 0 0 0;
}

dt {
  background: #B8C1C8;
  border-bottom: 1px solid #989EA4;
  border-top: 1px solid #717D85;
  color: #FFF;
  font: bold 18px/21px Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

dd {
  font: bold 20px/45px Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0 0 0 12px;
  white-space: nowrap;
}

dd + dd {
  border-top: 1px solid #CCC
}
</style>

<div>
  <div class="demo-box">
    <dl>
      <dt>A</dt>
      <dd>Andrew W.K.</dd>
      <dd>Apparat</dd>
      <dd>Arcade Fire</dd>
      <dd>At The Drive-In</dd>
      <dd>Aziz Ansari</dd>
    </dl>
    <dl>
      <dt>C</dt>
      <dd>Chromeo</dd>
      <dd>Common</dd>
      <dd>Converge</dd>
      <dd>Crystal Castles</dd>
      <dd>Cursive</dd>
    </dl>
    <dl>
      <dt>E</dt>
      <dd>Explosions In The Sky</dd>
    </dl>
    <dl>
      <dt>T</dt>
      <dd>Ted Leo &amp; The Pharmacists</dd>
      <dd>T-Pain</dd>
      <dd>Thrice</dd>
      <dd>TV On The Radio</dd>
      <dd>Two Gallants</dd>
    </dl>
  </div>
</div>

## 文献参考

节选自
> [MDN: position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
