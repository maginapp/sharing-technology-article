---
meta:
  - name: keywords
    content: vscode,tab栏多行配置,Custom CSS and JS Loader
  - name: description
    content: vscode-tab多行配置
---

# VSCode配置多行标签栏

> 修改`workbench.main.css`后，VSCode可能会警告VScode的完整性已损坏，请忽略该消息

VSCode打开多个文件时是在同一行滚动显示的，可以通过添加css样式的方法，修改tab栏样式。

## 方法一：修改`workbench.main.css`

1. 打开文件`[VSCode 安装目录]/resources/app/out/vs/workbench/workbench.main.css`，添加如下css样式

```css
/* 多行 */
.tabs-and-actions-container > .monaco-scrollable-element {
	height: auto !important;
	display: flex;
}

.tabs-and-actions-container > .monaco-scrollable-element > .tabs-container {
	height: auto !important;
	flex-wrap: wrap;
}

/* 设置最大高度 */
.tabs-container {
	max-height: 100px !important;
	overflow: auto !important;
}

/* 调整高度 */
.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab {
	height: 25px;
	line-height: 25px;
	padding-left: 4px;
	font-size: 0.9em;
}

.monaco-workbench .part.editor>.content .editor-group-container>.title .tabs-container>.tab .tab-label {
	line-height: 25px;
}

.monaco-workbench .part.editor > .content .editor-group-container > .title .tabs-container > .tab .label-name {
	font-size: inherit !important;
}

/* 调整侧边工具栏 */
.tabs-and-actions-container > .monaco-scrollable-element + div {
	max-width: 200px;
	height: auto !important;
	display: flex;
	flex-wrap: wrap;
	overflow: auto!important;
	background: #000;
}

.tabs-and-actions-container > .monaco-scrollable-element + div::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #666; /* or add it to the track */
}

.tabs-and-actions-container > .monaco-scrollable-element + div::-webkit-scrollbar-thumb {
    background: #333;
}

/* 面包屑修改
.monaco-breadcrumbs {
	font-size:0.8em;
}
*/
 
/* 侧边栏测试代码

 .tabs-and-actions-container > .monaco-scrollable-element + div  > div  {
   height: 90%!important;
   // background: #0000aa;
 }

 .tabs-and-actions-container > .monaco-scrollable-element + div  > div > div{
   background: #000066;
   width: 80px;
   height: 50px;
   display: flex;
   flex-wrap: wrap;
   overflow: auto!important;
}

.tabs-and-actions-container > .monaco-scrollable-element + div  > div > div  div{
   background: red;
}

.tabs-and-actions-container > .monaco-scrollable-element + div::-webkit-scrollbar {
  display: none;
} 
*/

```

2. 重新打开窗口：`cmd+shift+p`呼出命令框，输入`reload`，点击`Reload Window`

<ImgWithBase src="/sharp/vscode-multi-column.webp" alt="vscode-multi-column" style="width:100%"/>

## 方法二：自定义css文件

> 此方法测试未成功，自定义的css文件无法生效

1. 安装vscode插件 `Custom CSS and JS Loader`

2. 创建css文件，css样式同上

3. 打开`setting.json`添加css文件配置：`cmd+shift+p`呼出命令框，输入`setting`，点击`Open Settings(JSON)`，添加以下配置：

```json
"vscode_custom_css.imports": [
    "ile:///C:/vscode/custom.css"
],
"vscode_custom_css.policy": true,
```

4. 按`cmd+shift+p`呼出命令框，输入`Reload Custom CSS and JS`

5. 重新打开窗口

## 存在问题

标签栏多行每次开始换行时，标签栏高度有时不会调整到合适的高度，显示内容会折叠，处理方法：

1. 拖动侧边栏，调整顶部标签栏高度，触发高度自动调整
2. 需要点击收起/展开侧边栏，调整高度
3. reload vscode

## 引用

* [VSCode的多行选项卡](https://qastack.cn/programming/42462777/multirow-tabs-for-vscode)
* [VSCode打开多个文件时实现标签栏多行显示](https://blog.csdn.net/tangyang8941/article/details/107169763)