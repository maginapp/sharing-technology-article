(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{215:function(s,t,a){"use strict";a.r(t);var e=a(2),n=function(s){s.options.__data__block__={mermaid_64a5709e:"gantt\n        dateFormat  YYYY-MM-DD\n        title Adding GANTT diagram functionality to mermaid\n        section 现有任务\n        已完成               :done,    des1, 2014-01-06,2014-01-08\n        进行中               :active,  des2, 2014-01-09, 3d\n        计划一               :         des3, after des2, 5d\n        计划二               :         des4, after des3, 5d\n",mermaid_64a5709a:"sequenceDiagram\n张三 ->> 李四: 你好！李四, 最近怎么样?\n李四--\x3e>王五: 你最近怎么样，王五？\n李四--x 张三: 我很好，谢谢!\n李四-x 王五: 我很好，谢谢!\nNote right of 王五: 李四想了很长时间, 文字太长了<br/>不适合放在一行.\n\n李四--\x3e>张三: 打量着王五...\n张三->>王五: 很好... 王五, 你怎么样?\n",mermaid_64a5706e:"graph LR\nA[长方形] -- 链接 --\x3e B((圆))\nA --\x3e C(圆角长方形)\nB --\x3e D{菱形}\nC --\x3e D\n",flowchart_64a57060:"st=>start: 启1动11 <ImgWIthBase /> $\\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,.$ \ne=>end: 结束\nop=>operation: 我的操作\ncond=>condition: 确认？\n\nst->op->cond\ncond(yes)->e\ncond(no)->op"}},r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress搭建网站踩坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress搭建网站踩坑"}},[s._v("#")]),s._v(" vuepress搭建网站踩坑")]),s._v(" "),a("h2",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("node.js >= 8.6 本地开发环境搭建")])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.vuepress.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[s._v("markdown语法")])])]),s._v(" "),a("h3",{attrs:{id:"获取token，用于travis构建发布权限配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取token，用于travis构建发布权限配置"}},[s._v("#")]),s._v(" 获取token，用于travis构建发布权限配置")]),s._v(" "),a("blockquote",[a("p",[s._v("个人账户 > developer settings > Personal access tokens > add")])]),s._v(" "),a("p",[s._v("配置token，暂时未研究具体权限需求，提供了除删除仓库外的所有权限")]),s._v(" "),a("p",[a("img",{attrs:{src:"/webstatic/2020-05-01-token-get.png",alt:"token"}})]),s._v(" "),a("h3",{attrs:{id:"travis-ci注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci注册"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://travis-ci.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("travis-ci"),a("OutboundLink")],1),s._v("注册")]),s._v(" "),a("p",[s._v("使用github同步账户数据")]),s._v(" "),a("blockquote",[a("p",[s._v("setting页配置需要同步到travis的仓库 > 进入对应的仓库settings配置 Environment Variables（键值对）")])]),s._v(" "),a("p",[s._v("配置的键名: 项目中的"),a("a",{attrs:{href:"#travis-%E9%83%A8%E7%BD%B2"}},[s._v(".travis.yml")]),s._v("文件中 github_token所配置的变量名对应\n值：上一步的token，考虑到安全性问题，设置为不可见")]),s._v(" "),a("h2",{attrs:{id:"开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[s._v("#")]),s._v(" 开始")]),s._v(" "),a("h3",{attrs:{id:"github创建仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github创建仓库"}},[s._v("#")]),s._v(" github创建仓库")]),s._v(" "),a("h3",{attrs:{id:"项目仓库设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目仓库设置"}},[s._v("#")]),s._v(" 项目仓库设置")]),s._v(" "),a("blockquote",[a("p",[s._v("settings > options > GitHub Pages > sources修改访问资源 "),a("code",[s._v("gh-pages")])])]),s._v(" "),a("p",[s._v("使用travis构建后，会自动想仓库推送打包后的gh-pages分钟，切换到该分支后，即可访问  "),a("code",[s._v("https://<username>.github.io/<repository name>/")])]),s._v(" "),a("h3",{attrs:{id:"vuepress-config-js设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-config-js设置"}},[s._v("#")]),s._v(" .vuepress > config.js设置")]),s._v(" "),a("p",[s._v("base: 设置为仓库名 "),a("code",[s._v("<repository name>")])]),s._v(" "),a("p",[s._v("dest: 打包后的地址 默认 "),a("code",[s._v("<资源文件夹>/.vuepress/dist")])]),s._v(" "),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),a("h3",{attrs:{id:"travis-部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#travis-部署"}},[s._v("#")]),s._v(" travis 部署")]),s._v(" "),a("blockquote",[a("p",[s._v("本项目使用 "),a("code",[s._v("travis")]),s._v(" 部署")])]),s._v(" "),a("p",[s._v("项目添加.travis.yml文件，"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node_js\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("node_js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" lts/*\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm ci\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm run build\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" pages\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("skip_cleanup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("local_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("github_token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $GITHUB_TOKEN "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("keep_history")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"deploy-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-sh"}},[s._v("#")]),s._v(" deploy.sh")]),s._v(" "),a("p",[s._v("配置 deploy.sh ，"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是发布到自定义域名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'www.example.com' > CNAME")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@github.com:maginapp/sharing-technology-article.git master:gh-pages\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h2",{attrs:{id:"vuepress非官方插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress非官方插件"}},[s._v("#")]),s._v(" vuepress非官方插件")]),s._v(" "),a("p",[s._v("为同步博客到csdn，添加了对"),a("code",[s._v("katex数学公式")]),s._v("、"),a("code",[s._v("甘特图")]),s._v("和"),a("code",[s._v("flowchart")]),s._v("的支持")]),s._v(" "),a("h3",{attrs:{id:"maginapp-vuepress-plugin-katex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maginapp-vuepress-plugin-katex"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://github.com/maginapp/vuepress-plugin-katex",target:"_blank",rel:"noopener noreferrer"}},[s._v("@maginapp/vuepress-plugin-katex"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("行内公式:  "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[s._v("Γ")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mi",[s._v("z")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")]),a("mo",[s._v("=")]),a("msubsup",[a("mo",[s._v("∫")]),a("mn",[s._v("0")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("∞")])],1),a("msup",[a("mi",[s._v("t")]),a("mrow",[a("mi",[s._v("z")]),a("mo",[s._v("−")]),a("mn",[s._v("1")])],1)],1),a("msup",[a("mi",[s._v("e")]),a("mrow",[a("mo",[s._v("−")]),a("mi",[s._v("t")])],1)],1),a("mi",[s._v("d")]),a("mi",[s._v("t")]),a("mtext"),a("mi",{attrs:{mathvariant:"normal"}},[s._v(".")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,.")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[s._v("Γ")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.04398em"}},[s._v("z")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.215112em","vertical-align":"-0.35582em"}}),a("span",{staticClass:"mop"},[a("span",{staticClass:"mop op-symbol small-op",staticStyle:{"margin-right":"0.19445em",position:"relative",top:"-0.0005599999999999772em"}},[s._v("∫")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8592920000000001em"}},[a("span",{staticStyle:{top:"-2.34418em","margin-left":"-0.19445em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[s._v("0")])])]),a("span",{staticStyle:{top:"-3.2579000000000002em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[s._v("∞")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.35582em"}},[a("span")])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("t")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.04398em"}},[s._v("z")]),a("span",{staticClass:"mbin mtight"},[s._v("−")]),a("span",{staticClass:"mord mtight"},[s._v("1")])])])])])])])])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.7935559999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[s._v("−")]),a("span",{staticClass:"mord mathdefault mtight"},[s._v("t")])])])])])])])])]),a("span",{staticClass:"mord mathdefault"},[s._v("d")]),a("span",{staticClass:"mord mathdefault"},[s._v("t")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[s._v(".")])])])])])],1),s._v(" "),a("section",[a("eqn",[a("span",{staticClass:"katex-display"},[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",{attrs:{mathvariant:"normal"}},[s._v("Γ")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("mi",[s._v("z")]),a("mo",{attrs:{stretchy:"false"}},[s._v(")")]),a("mo",[s._v("=")]),a("msubsup",[a("mo",[s._v("∫")]),a("mn",[s._v("0")]),a("mi",{attrs:{mathvariant:"normal"}},[s._v("∞")])],1),a("msup",[a("mi",[s._v("t")]),a("mrow",[a("mi",[s._v("z")]),a("mo",[s._v("−")]),a("mn",[s._v("1")])],1)],1),a("msup",[a("mi",[s._v("e")]),a("mrow",[a("mo",[s._v("−")]),a("mi",[s._v("t")])],1)],1),a("mi",[s._v("d")]),a("mi",[s._v("t")]),a("mtext"),a("mi",{attrs:{mathvariant:"normal"}},[s._v(".")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("\n\\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,.\n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[s._v("Γ")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.04398em"}},[s._v("z")]),a("span",{staticClass:"mclose"},[s._v(")")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[s._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"2.326242em","vertical-align":"-0.9119499999999999em"}}),a("span",{staticClass:"mop"},[a("span",{staticClass:"mop op-symbol large-op",staticStyle:{"margin-right":"0.44445em",position:"relative",top:"-0.0011249999999999316em"}},[s._v("∫")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.414292em"}},[a("span",{staticStyle:{top:"-1.7880500000000001em","margin-left":"-0.44445em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[s._v("0")])])]),a("span",{staticStyle:{top:"-3.8129000000000004em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[s._v("∞")])])])]),a("span",{staticClass:"vlist-s"},[s._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.9119499999999999em"}},[a("span")])])])])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("t")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.864108em"}},[a("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.04398em"}},[s._v("z")]),a("span",{staticClass:"mbin mtight"},[s._v("−")]),a("span",{staticClass:"mord mtight"},[s._v("1")])])])])])])])])]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[s._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.843556em"}},[a("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mtight"},[s._v("−")]),a("span",{staticClass:"mord mathdefault mtight"},[s._v("t")])])])])])])])])]),a("span",{staticClass:"mord mathdefault"},[s._v("d")]),a("span",{staticClass:"mord mathdefault"},[s._v("t")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[s._v(".")])])])])])])],1),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("行内公式:  $\\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,.$ \n\n$$\n\\Gamma(z) = \\int_0^\\infty t^{z-1}e^{-t}dt\\,.\n$$\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"vuepress-plugin-mermaidjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-mermaidjs"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://github.com/eFrane/vuepress-plugin-mermaidjs",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-plugin-mermaidjs"),a("OutboundLink")],1)]),s._v(" "),a("Mermaid",{attrs:{id:"mermaid_64a5709e",graph:s.$dataBlock.mermaid_64a5709e}}),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[s._v("\\```mermaid\ngantt\n        dateFormat  YYYY-MM-DD\n        title Adding GANTT diagram functionality to mermaid\n        section 现有任务\n        已完成               :done,    des1, 2014-01-06,2014-01-08\n        进行中               :active,  des2, 2014-01-09, 3d\n        计划一               :         des3, after des2, 5d\n        计划二               :         des4, after des3, 5d\n\\```\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("Mermaid",{attrs:{id:"mermaid_64a5709a",graph:s.$dataBlock.mermaid_64a5709a}}),a("Mermaid",{attrs:{id:"mermaid_64a5706e",graph:s.$dataBlock.mermaid_64a5706e}}),a("h3",{attrs:{id:"maginappvuepress-plugin-flowchart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maginappvuepress-plugin-flowchart"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://github.com/maginappvuepress/vuepress-plugin-flowchart",target:"_blank",rel:"noopener noreferrer"}},[s._v("@maginappvuepress-plugin-flowchart"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("基于(ulivz/vuepress-plugin-flowchart)[https://github.com/ulivz/vuepress-plugin-flowchart\n]做了改写，兼容了csdn博客的flowchart模板")]),s._v(" "),a("FlowChart",{attrs:{id:"flowchart_64a57060",code:s.$dataBlock.flowchart_64a57060,preset:"vue"}}),a("h2",{attrs:{id:"tips-md语法扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips-md语法扩展"}},[s._v("#")]),s._v(" tips/md语法扩展")]),s._v(" "),a("h3",{attrs:{id:"sidebar-路径设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sidebar-路径设置"}},[s._v("#")]),s._v(" sidebar 路径设置")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("'/test/': 查找test文件夹下的index.html")])]),s._v(" "),a("li",[a("p",[s._v("'/test': test.html test/index.html")])])]),s._v(" "),a("h3",{attrs:{id:"静态资源-图片路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态资源-图片路径"}},[s._v("#")]),s._v(" 静态资源/图片路径")]),s._v(" "),a("ul",[a("li",[s._v("根据vuepress官网配置了alias，没能生效，最后选择了使用相对地址")])]),s._v(" "),a("p",[s._v("使用此写法会打包到"),a("code",[s._v("assets/img/")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("放置在"),a("code",[s._v(".vuepress/public")]),s._v("中的资源会直接打包到根目录中，以"),a("code",[s._v(".vuepress/public")]),s._v("为根目录写地址即可")])]),s._v(" "),a("li",[a("p",[s._v("由于项目config.js配置了base参数，需要使用$withbase调整地址，此处使用了图片组件完成")])])]),s._v(" "),a("p",[s._v("此处使用了vue的方法，$withbase被注入到vue原型上，需要使用vue的语法书写才能调用成功")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token blockquote punctuation"}},[s._v(">")]),s._v(" 失败\n"),a("span",{pre:!0,attrs:{class:"token url"}},[s._v("!["),a("span",{pre:!0,attrs:{class:"token content"}},[s._v("2020-5-1-token账户进入")]),s._v("]($withBase('/webstatic/2020-05-01-token-get.png')")]),s._v(")\n"),a("span",{pre:!0,attrs:{class:"token blockquote punctuation"}},[s._v(">")]),s._v(" 成功\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("img")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v(":src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("$withBase('/webstatic/2020-05-01-token-get.png')"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("alt")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("2020-5-1-token账户进入"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token blockquote punctuation"}},[s._v(">")]),s._v(" 成功\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("ImgWithBase")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("/webstatic/2020-05-01-token-get.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# .vuepress/public\ntest.png\n\n# md文件\n![图片 来自 public](/test.png)\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"favivon-设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#favivon-设置"}},[s._v("#")]),s._v(" favivon 设置")]),s._v(" "),a("p",[s._v("config.js 设置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'shortcut icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"image/x-icon"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("/favicon.ico")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"代码高亮显示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码高亮显示"}},[s._v("#")]),s._v(" 代码高亮显示")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("``` type{行号,行号}\n1\n3\n测试\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"emoji"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emoji"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"}},[s._v("emoji"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(":tada: :100:\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("🎉 💯")]),s._v(" "),a("h3",{attrs:{id:"自定义容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义容器"}},[s._v("#")]),s._v(" 自定义容器")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[s._v("::: tip\n这是一个提示\n:::\n\n::: warning\n这是一个警告\n:::\n\n::: danger 提示标题 \n这是一个危险警告\n:::\n\n类似 "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("summary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("details")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n::: details 标题\n这是一个详情块，在 IE / Edge 中不生效\n:::\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("这是一个提示")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("这是一个警告")])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("error")]),s._v(" "),a("p",[s._v("这是一个危险警告")])]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("点击查看代码")]),s._v(" "),a("p",[s._v("这是一个详情块，在 IE / Edge 中不生效")])]),s._v(" "),a("h2",{attrs:{id:"引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[s._v("#")]),s._v(" 引用")]),s._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/morang/p/7228488.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用travis-ci自动部署github上的项目"),a("OutboundLink")],1)])]),s._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/hanziyuan08/article/details/82919454",target:"_blank",rel:"noopener noreferrer"}},[s._v("travis ci 自动部署"),a("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);"function"==typeof n&&n(r);t.default=r.exports}}]);