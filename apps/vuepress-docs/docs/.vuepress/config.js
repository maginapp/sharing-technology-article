const basePath = 'sharing-technology-article'

const sidebar = require('./router/index')

module.exports = {
  // meta
  title: '分享技术资料-magina',
  description: '分享前端博客，面试题，相关标准等 | 路阻且长，行则将至',
  // vuepress config
  // dest: 'public',
  base: `/${basePath}/`,
  serviceWorker: true,
  evergreen: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Sharing', link: '/sharing/' },
      { text: 'Interview', link: '/interview/' },
      { text: 'Issues', link: 'https://github.com/maginapp/sharing-technology-article/issues' },
    ],
    // displayAllHeaders: true,
    sidebar: sidebar
  },
  // 配置搜索
  plugins: [
    // vuepress 官方
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/back-to-top', true],
    ['@vuepress/nprogress'],
    ['@vuepress/medium-zoom', {
      // ==> .theme-default-content :not(a) > img
      // selector: 'img.zoom-custom-imgs',
      selector: '.theme-zoom-content :not(a) > img',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16
      }
    }],
    // ['vuepress-plugin-code-copy', true],
    // ['@mr-hope/vuepress-plugin-copy-code', true],
    // ['vuepress-plugin-copy-code', true],
    ['@maginapp/vuepress-plugin-copy-code', {
      // duration: 20000,
      // successText: 'hi',
      // color: 'red',
      // backgroundColor: '#303030',
      // iconVisible: true
    }],
    // ['@maginapp/vuepress-plugin-code-copy', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    }],
    // maginapp
    ['@maginapp/vuepress-plugin-katex', {delimiters: 'dollars'}],
    ['@maginapp/vuepress-plugin-flowchart', {'???????????': 'test'}], // 测试传参与合并
    // 第三方
    'vuepress-plugin-mermaidjs',
    ['@vssue/vuepress-plugin-vssue', {
      platform: 'github', // v3 => github，v4 => github-v4
      // 其他的 Vssue 配置
      locale: 'zh', // 语言
      owner: 'maginapp', // github账户名
      repo: 'sharing-technology-article-comment', //github项目名称 => 存储 Issue 和评论
      clientId: '0f2080b3708c78f423fb', // Client ID
      clientSecret: 'b37efb67a2abe4e05f13b991922ebddc14d57b3e',// Client Secret 
      autoCreateIssue: false // 自动创建评论，默认是false，避免首次进入页面的时候需要点击创建评论的按钮
    }]
    // 以下替换为magina系列插件
    // ['flowchart', {'???????????': 'test'}],
    // ['@markspec/vuepress-plugin-katex', {ss: 'ss'}]
  ],
  // 代码添加行号
  markdown: {
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon' , href: `/favicon.ico` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '../../../assets/images',
        '@alias-p': '../../assets/images'
      }
    }
  }
}