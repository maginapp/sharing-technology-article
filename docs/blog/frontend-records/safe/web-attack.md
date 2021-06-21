---
meta:
  - name: keywords
    content: 前端攻击简介
  - name: description
    content: 前端攻击简介,xss,csrf,sql
---

# 前端攻击简介

## XSS

Cross Site Script，跨站脚本攻击，为了与 CSS 区别开来称为 XSS

XSS 攻击是指往页面恶意的注入脚代码本， 浏览器是无法区分这些脚本是否是被恶意注入的还是正常的页面脚本，所以恶意注入 JavaScript 脚本也拥有所有的脚本权限。

### 攻击行为
1. 获取Cookie信息，通过 XMLHttpRequest 或 [Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API) 将数据发送给恶意服务器
2. 监听用户行为，通过 addEventListener 监听用户行为，获取用户输入的银行卡支付密码等信息
3. 更改 DOM 结构，伪造登录、输入支付秘密等窗口，获取用户私密信息
4. 在页面内生成浮窗广告
5. 劫持流量实现恶意跳转

### XSS分类

1. 存储型 XSS 攻击

> 持久化，代码是存储在服务器中的

存储型 XSS 攻击是指黑客利用站点漏洞将一段恶意 JavaScript 代码提交到网站的数据库中 存储 ，当用户访问网站的时候，网站将恶意脚本同正常页面一起返回，浏览器解析执行了网站中的恶意脚本，将用户的 Cookie 信息等数据上传到恶意服务器

存储型 XSS 攻击经常出现在个人信息或发表文章等地方，插入代码，如果没有过滤或过滤不严，那么这些代码将储存到服务器中，用户访问该页面的时候触发代码执行。这种 XSS 比较危险，容易造成蠕虫，盗窃 cookie 等

2. 反射型 XSS 攻击

>  非持久化，需要欺骗用户自己去点击链接才能触发 XSS 代码（服务器中没有这样的页面和内容），一般容易出现在搜索页面

反射型 XSS 一般是黑客通过特定的手段（例如电子邮件等），诱导用户去访问一个包含恶意脚本的 URL，当用户访问这个带有恶意脚本的 URL 时，网站又把恶意 JavaScript 脚本返回给用户执行

反射型 XSS 通常出现在网站的搜索栏、用户登录口等地方，常用来窃取客户端 Cookies 或进行钓鱼欺骗

3. 基于 DOM 的 XSS 攻击

> 不经过后端，纯粹发生在客户端的攻击，属于前端 JavaScript 自身的安全漏洞

基于 DOM 的 XSS 攻击是指通过恶意脚本修改页面的 DOM 结构，是纯粹发生在客户端的攻击。

DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞。

### 攻击方式

1. 利用`<>`/`<script>`标记注射HTML/js

2. 利用HTML标签属性值执行xss，`<table background="javascript:alert(0)"></table>`

3. 空格回车Tab，在javascript引擎中，空格除了**在引号中分隔单词和强制结束语句**之外，额外的空白无论以何种方式添加都无所谓

4. 对标签属性值转码，`javascrip&#116&#58alert(0)`

5. 产生自己的事件，如图片不存在就会触发`onerror`事件

6. 利用css跨站剖析

```html
<link rel="stylesheet" href="http://www.evil.com/attack.css">
<style type='text/css'>@import url(http://www.evil.com/xss.css);</style>
<div style="background-image:url(javascript:alert('xss')">
<style>
  body {background-image:url("javascript:alert('xss')");}
  p {background-image: expression(alert("xss"));}
</style>
```

> 过滤含expression、import等敏感字符的样式表

7. 扰乱过滤规则

```html
大小写混淆，不使用引号<iMg sRC="jaVasCript:alert(0);">
全角字符<div style="{left: ｅｘｐｒｅｓｓｉｏｎ（ａｌｅｒｔ(0)）}">
/**/会被浏览器忽略 <div style="wid/****/th: expre/*XSS*/ssion(alert('xss'));">
\和\0 被浏览器忽略@\0im\port'\0ja\vasc\ript:alert("xss");
e转换成\65 <p style="xss:\65xpression(alert(/xss/))">
```

### 防范方式

1. 过滤特殊字符，或对特定字符进行编译转码，如`</script>`

2. 对重要的 cookie 设置 httpOnly，防止客户端，JavaScript通过 document.cookie 读取 cookie

> 此 HTTP 头由服务端设置

3. 进行URLEncode操作，从 URL 参数中获取值一定要进行格式检测

4. Web 安全头支持

浏览器自带的防御能力，一般是通过开启 Web 安全头生效的。具体有以下几个：

  * CSP ：W3C 的 Content Security Policy，简称 CSP，主要是用来定义页面可以加载哪些资源，减少 XSS 的发生。要配置 CSP , 需要对 CSP 的 policy 策略有了解，具体细节可以参考 CSP 是什么。
  * X-Download-Options: noopen ：默认开启，禁用 IE 下下载框 Open 按钮，防止 IE 下下载文件默认被打开 XSS。
  * X-Content-Type-Options: nosniff ：禁用 IE8 自动嗅探 mime 功能例如 text/plain 却当成 text/html 渲染，特别当本站点 server 的内容未必可信的时候。
  * X-XSS-Protection ：IE 提供的一些 XSS 检测与防范，默认开启









防御
确认客户端生成数据的唯一安全方法就是在服务器端实施保护措施
输出编码
白名单、黑名单
URL属性

1. URLEncode 
2. 对重要的 cookie 设置 httpOnly
3. 过滤特殊字符，或对特定字符进行编译转码
4. Web 安全头支持

## CSRF

CSRF(Cross Site Request Forgery)，跨站点伪造请求。是指黑客引诱用户打开黑客的网站，在黑客的网站中，利用用户的登录状态发起跨站请求。这利用了web中用户身份验证的一个漏洞：**简单的身份验证只能保证请求发自某个用户的浏览器，却不能保证请求本身是用户自愿发出的**

### 防范方法

1. 检查`referer`/`origin`字段

`referer`字段用以标明请求来源于哪个地址，利用`referer`验证请求的来源站点，简单易行，工作量低，仅需要在关键访问处增加一步校验

完全依赖浏览器发送正确的referer字段，虽然http协议对此字段的内容有明确的规定，但并无法保证来访的浏览器的具体实现，亦无法保证浏览器没有安全漏洞影响到此字段。存在攻击者攻击某些浏览器，篡改其referer字段的可能

2. 添加校验token/重要操作验证码/返回到客户端的页面增加伪随机数

要求用户浏览器提供不保存在`cookie`中，并且攻击者无法伪造的数据作为校验，那么攻击者就无法再运行CSRF攻击

通过服务端生成`唯一/特殊标识`发送给浏览器，然后将该`标识`放入页面中，请求时添加到`cors`中校验

3. 充分利用好cookie的SameSite属性

SameSite选项通常由Strict、Lax和None三个值

  * Strict最为严格，如果cookie设置了Strict，那么浏览器会完全禁止第三方Cookie。
  * Lax相对宽松一点，在跨站点的情况下，从第三方站点的链接打开和从第三方站点提交Get的表单都会携带cookie.但是如果在第三方站点中使用Post方法或者通过img、iframe等标签加载的URL,都不会携带Cookie。
  * None, 任何情况下都会发送Cookie。

但是现在大部分的网站静态资源都放在单独的域名下，所以通过设置Cookie的SameSite为Strict、Lax是不能正常运行的，所以这个方法只适用**静态资源跟服务器接口在同一个站点下的网站**。


## SQL 注入攻击

主要是后端进行对 SQL 注入攻击的防护，常见的防护机制有：

* 使用 preparestatement 预编译机制： 在sql语句执行前，对其进行语法分析、编译和优化，其中参数位置使用占位符 ? 代替了。当真正运行时，传过来的参数会被看作是一个纯文本，不会重新编译，不会被当做sql指令
*  特殊字符转义： 些特殊字符，比如：%作为like语句中的参数时，要对其进行转义处理
*  使用代码检测工具： 使用sqlMap等代码检测工具，它能检测sql注入漏洞
*  数据库账号增加权限控制、数据库异常监控等等

## DDoS 攻击

> Dos 拒绝服务攻击（Denial of Service attack）是一种能够让服务器呈现静止状态的攻击方式。其原理就是发送大量的合法请求到服务器，服务器无法分辨这些请求是正常请求还是攻击请求，所以会照单全收。海量的请求造成服务器进入停止工作或拒绝服务的状态。

`DDoS`, `Distributed Denial of Service`, 分布式拒绝服务攻击，亦称作洪水攻击。 利用网络上已被攻陷的电脑，向某一特定的目标电脑发动密集式` Dos 拒绝服务攻击`，用以把目标电脑的网络资源及系统资源耗尽，使之无法向真正正常请求的用户提供服务。

攻击者同样可以通过利用DNS协议中存在的漏洞，恶意创造一个载荷过大的请求，造成目标DNS服务器崩溃。

### 防范

检测技术和清洗技术，检测技术就是检测网站是否正在遭受 DDoS 攻击，而清洗技术就是清洗掉异常流量

## 文件上传漏洞攻击

文件上传漏洞是web安全中经常用到的一种漏洞形式。是对数据与代码分离原则的一种攻击。上传漏洞顾名思义，就是攻击者上传了一个可执行文件如木马，病毒，恶意脚本，WebShell等到服务器执行，并最终获得网站控制权限的高危漏洞。

### 防范

1. 文件上传的目录设置为不可执行。只要web容器无法解析该目录下面的文件，即使攻击者上传了脚本文件，服务器本身也不会受到影响，因此这一点至关重要。
2. 判断文件类型。在判断文件类型时，可以结合使用MIME Type、后缀检查等方式。在文
件类型检查中，强烈推荐白名单方式，黑名单的方式已经无数次被证明是不可靠的。此外，对于图片的处理，可以使用压缩函数或者resize函数，在处理图片的同时破坏图片中可能包含的HTML代码。
3. 使用随机数改写文件名和文件路径。文件上传如果要执行代码，则需要用户能够访问到这个文件。在某些环境中，用户能上传，但不能访问。如果应用了随机数改写了文件名和路径，将极大地增加攻击的成本。再来就是像shell.php.rar.rar和crossdomain.xml这种文件，都将因为重命名而无法攻击。
4. 单独设置文件服务器的域名。由于浏览器同源策略的关系，一系列客户端攻击将失效，比如上传crossdomain.xml、上传包含Javascript的XSS利用等问题将得到解决。
5. 使用安全设备防御。文件上传攻击的本质就是将恶意文件或者脚本上传到服务器，专业的安全设备防御此类漏洞主要是通过对漏洞的上传利用行为和恶意文件的上传过程进行检测。恶意文件千变万化，隐藏手法也不断推陈出新，对普通的系统管理员来说可以通过部署安全设备来帮助防御。


### 防范

* 文件上传后放到独立的存储上，做静态文件处理，杜绝脚本执行的可能

* 对上传文件类型进行白名单校验

* 使用随机数改写文件名和文件路径等等

## 域名劫持

> DNS解析器一旦找到IP地址，它就会将IP地址返回给请求程序。DNS缓存域地址以供将来使用。

域名劫持是通过攻击域名解析服务器（DNS），或伪造域名解析服务器（DNS）的方法，把目标网站域名解析到错误的地址从而实现用户无法访问目标网站的目的

### 防范

* 对DNS服务器需要采取特别的安全保护措施，在防火墙网络中，分开设置内部DNS服务器和外部DNS服务器，连接外部服务的外部DNS服务器上不留有对外禁止访问的内部网络系统的服务器，做到内外网络服务器分割。

* 限制DNS解析器仅响应来自可信源的查询或者关闭DNS服务器的递归查询等

## nat slipstream

[Chrome 91 支持 WebAssembly SIMD，加速 Web 在 AI 等领域的应用](https://mp.weixin.qq.com/s/iyx7-yfTTc_sPvMdWxr1dg)

## 引用


[除了CSRF，你还知道哪些其它的攻击方式吗？](https://mp.weixin.qq.com/s/DipOAVxKSSdbGbkA6CTsng)

[XSS CSS Cross SiteScript 跨站脚本攻击](https://www.cnblogs.com/rsapaper/p/6651022.html)

[跨站请求伪造](https://baike.baidu.com/item/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0)

[Web安全之CSRF攻击](https://zhuanlan.zhihu.com/p/98062456)

[DNS攻击方式的应对办法](https://zhuanlan.zhihu.com/p/179044319)

[DNS攻击](https://blog.csdn.net/qq_22192367/article/details/79517412)

[dns攻击有几种方式?](https://zhidao.baidu.com/question/1447499898336921180.html)

[DNS攻击是怎么实现的](https://jingyan.baidu.com/article/ed15cb1b29f42d5ae269816f.html)

[](https://blog.csdn.net/m0_38103658/article/details/100162185)