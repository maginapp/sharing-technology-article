---
meta:
  - name: keywords
    content: 前端,git,git commit,规范
---

# git提交注释规范

## 格式

``` cmd
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

示例

```
fix #251: add DataValidation

修复了#251号bug

bug连接 http://bug.bug

```

## 格式说明

### type

`fix`

* `feat`【新增功能】-【新的功能点、新的需求】
* `fix` 【Bug修复】-【修复的Bug:现网发散Bug、测试阶段的Bug、验收阶段的Bug】
* `docs`【文档修改】-【只是修改了文档:注释、README.md等】.
* `style` 【样式修改】-【不影响代码功能的修改:CSS样式、代码格式化等】
* `refactor`【代码重构】-【代码更改既不修复错误也不添加功能】
* `perf` `optimize`【性能优化】-【代码更改可以提高性能, 提升用户体验】
* `test`【测试代码】-【添加缺失测试或更正现有测试】
* `chore` 【构建编译】- 【改版构建流程、增加依赖库、工具】
* ~~`build`【编译代码】-【影响构建系统或外部依赖项的更改:build.gradle、package.json、Podfile等 glup，webpack，rollup的配置等~~
* ~~`ci`【持续集成】-【我们的CI配置文件和脚本的更改:Jenkinsfile，Travis，GitLab CI,Circle~~
* `revert` 【回退更改】-【代码回退提交更改】
* `other` 【其他提交】-【除以上所有类型之外的提交更改】

### scope（可选）

`#251`

用于说明 `commit` 影响的范围，比如数据层、控制层、视图层、bug编号等

### subject

是 `commit` 目的的简短描述，不超过50个字符。

* 以现在时词开头

* 第一个字母小写

* 结尾不加句号（.）

### body （可选）

对 `commit` 的具体描述，可以分成多行

### footer （可选）

通常是备注信息，与上一版本不兼容/修复bug(关闭Issue)的连接

## 引用

* [Git代码提交规范](https://blog.csdn.net/weixin_34067049/article/details/91474127)

* [Git 注释规范](https://blog.csdn.net/m0_37726449/article/details/90901611)

* [廖雪峰 git](https://www.liaoxuefeng.com/wiki/896043488029600)