(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{291:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress实用插件简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress实用插件简介"}},[s._v("#")]),s._v(" vuepress实用插件简介")]),s._v(" "),a("h2",{attrs:{id:"vssue评论功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vssue评论功能"}},[s._v("#")]),s._v(" vssue评论功能")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://vssue.js.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vssue"),a("OutboundLink")],1),s._v(": Vue 驱动的、基于 Issue 的评论插件")]),s._v(" "),a("blockquote",[a("p",[s._v("提示\n在你评论了一个 Issue 之后，每当有新评论，平台都会给你发送邮件提醒。有新用户在这个演示页面留下评论时，这些提醒邮件可能会比较烦人。\n你可以前往 "),a("a",{attrs:{href:""}},[s._v("Issue")]),s._v(" 页面来取消订阅提醒（unsubscribe the notifications）。")])]),s._v(" "),a("h2",{attrs:{id:"配置流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置流程"}},[s._v("#")]),s._v(" 配置流程")]),s._v(" "),a("blockquote",[a("p",[s._v("本文是基于github仓库和issues系统，配置的vssue")])]),s._v(" "),a("h3",{attrs:{id:"依赖安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖安装"}},[s._v("#")]),s._v(" 依赖安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @vssue/vuepress-plugin-vssue\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要登录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @vssue/api-github-v4 \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or 无需登录，调用次数有限制")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install @vssue/api-github-v3")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://vssue.js.org/zh/options/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vssue配置"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vssue/vuepress-plugin-vssue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  platform"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'github-v4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// v3 => github，v4 => github-v4")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 其他的 Vssue 配置")]),s._v("\n  locale"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'zh'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 语言")]),s._v("\n  owner"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'maginapp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// github账户名")]),s._v("\n  repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sharing-technology-article-comment'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//github项目名称 => 存储 Issue 和评论")]),s._v("\n  clientId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'clientId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Client ID")]),s._v("\n  clientSecret"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'clientSecret '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Client Secret")]),s._v("\n  autoCreateIssue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自动创建评论，默认是false，避免首次进入页面的时候需要点击创建评论的按钮")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"auth-apps设置，获取clientid和clientsecret"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auth-apps设置，获取clientid和clientsecret"}},[s._v("#")]),s._v(" Auth Apps设置，获取clientId和clientSecret")]),s._v(" "),a("ol",[a("li",[s._v("登录"),a("code",[s._v("github")]),s._v("，进入"),a("code",[s._v("OAuth Apps")])])]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/settings/profile",target:"_blank",rel:"noopener noreferrer"}},[s._v("setteing"),a("OutboundLink")],1),s._v(" => 侧边 "),a("a",{attrs:{href:"https://github.com/settings/apps",target:"_blank",rel:"noopener noreferrer"}},[s._v("Developer settings"),a("OutboundLink")],1),s._v(" => OAuth Apps")])]),s._v(" "),a("imgWithBase",{attrs:{src:"/webstatic/2020-05-01-token-get.png"}}),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("创建新项目，设置仓库名称和仓库")])]),s._v(" "),a("imgWithBase",{attrs:{src:"https://maginapp.github.io/static-website/images/images-wait-sharp/about-config/githun-setting-auth-knock-blog-create.png"}}),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("记录设置 "),a("code",[s._v("clientId")]),s._v("等相关数据")])]),s._v(" "),a("imgWithBase",{attrs:{src:"https://maginapp.github.io/static-website/images/images-wait-sharp/about-config/githun-setting-auth-knock-blog-comment.png"}}),s._v(" "),a("h2",{attrs:{id:"插件使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件使用"}},[s._v("#")]),s._v(" 插件使用")]),s._v(" "),a("p",[a("code",[s._v("@vssue/vuepress-plugin-vssue")]),s._v("会注册全局组件"),a("code",[s._v("Vssue")]),s._v("，再需要添加的页面中增加"),a("code",[s._v("<Vssue />")]),s._v("即可生效")]),s._v(" "),a("imgWithBase",{attrs:{src:"https://maginapp.github.io/static-website/images/images-wait-sharp/about-config/githun-setting-auth-knock-review.png"}}),s._v(" "),a("h3",{attrs:{id:"页面自动添加vssue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面自动添加vssue"}},[s._v("#")]),s._v(" 页面自动添加vssue")]),s._v(" "),a("p",[s._v("利用vuepress的"),a("code",[s._v("theme")]),s._v("配置，添加vssue组件")]),s._v(" "),a("ol",[a("li",[a("p",[a("code",[s._v(".vuepress")]),s._v("下创建"),a("code",[s._v("theme")]),s._v("文件夹")])]),s._v(" "),a("li",[a("p",[s._v("进入目标文件夹拉取"),a("code",[s._v("node_modules\\@vuepress\\theme-default\\layouts\\Layout.vue")])]),s._v(" "),a("ul",[a("li",[a("em",[s._v("node_modules/@vuepress/")])]),s._v(" "),a("li",[a("code",[s._v("git clone https://gitee.com/mirrors/VuePress.git")]),s._v(" => "),a("em",[s._v("packages/@vuepress/")])])])]),s._v(" "),a("li",[a("p",[s._v("将`"),a("em",[s._v("/theme-default/layouts/Layout.vue")]),s._v(" 复制到*/theme/layouts*下，Layout.vue做如下高亮代码：")])])]),s._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("#bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("slot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("page-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Vssue")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('\x3c!-- <Vssue v-if="!hideVssuePages.includes($page.path)" /> --\x3e')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("将`"),a("em",[s._v("/theme-default/util")]),s._v(" 文件夹复制到*/theme*下")]),s._v(" "),a("li",[a("code",[s._v("theme")]),s._v("下创建"),a("code",[s._v("index.js")]),s._v("，写入：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  extend"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vuepress/theme-default'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"vuepress-plugin-code-copy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-code-copy"}},[s._v("#")]),s._v(" vuepress-plugin-code-copy")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/znicholasbrown/vuepress-plugin-code-copy",target:"_blank",rel:"noopener noreferrer"}},[s._v("znicholasbrown/vuepress-plugin-code-copy"),a("OutboundLink")],1),s._v("试下代码复制功能")]),s._v(" "),a("p",[s._v("usage")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vuepress-plugin-code-copy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress-plugin-code-copy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        align"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        backgroundTransition"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Boolean"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        backgroundColor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        successText"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" String\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);