const basePath = 'sharing-technology-article'

const sidebar = require('./router/sidebar')

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
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/back-to-top', true],
    ['@vuepress/nprogress'],
    ['@maginapp/vuepress-plugin-katex',
    {
      delimiters: 'dollars'
    }],
    ['@maginapp/vuepress-plugin-flowchart', {'???????????': 'test'}], // 测试传参与合并
    'vuepress-plugin-mermaidjs',
    [
      '@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
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