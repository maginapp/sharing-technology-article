const basePath = 'sharing-technology-article'

const blogSideBar = [
  {
    title: '配置构建',
    // collapsable: false,
    sidebarDepth: 2,
    children: [
      '/blog/about-config/vuepress-github-website'
    ]
  },
  {
    title: '规范',   // 必要的
    path: '/blog/standard/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    // collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2,    // 可选的, 默认值是 1
    children: [
      '/blog/standard/git-commit'
    ]
  },
  {
    title: '前端笔记',
    // path: '/blog/frontend-records/',
    // collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2,
    children: [
      // '/blog/frontend-records/01-2020-05-11-name'
    ]
  },
  {
    title: '测试',   // 必要的
    // collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 2,    // 可选的, 默认值是 1
    path: '/blog/html-test/summary-test',
    // children: [
    //   { title: '测试汇总', path:'/test-func/'},
    //   { title: '锚点功能测试', path:'/test-func/锚点功能测试/'}
    // ]
    children: [
      '/blog/html-test/hash-test'
    ],
    // children: [
    //   '/',
    //   '/blog/',
    //   '/audition/'
    // ]
  }
]

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
      { text: 'Audition', link: '/audition/' },
      { text: 'Issues', link: 'https://github.com/maginapp/sharing-technology-article/issues' },
    ],
    // displayAllHeaders: true,
    sidebar: {
      '/blog/': blogSideBar,
      '/sharing/': [{
        collapsable: false,
        title: '博客',  path: '/sharing/', sidebarDepth: 2
      }],
      '/audition/':  [{
        title: '分类',
        collapsable: false,
        children: [
          '/audition/js',
          '/audition/css',
          '/audition/html'
        ]
      }, {
        title: '专题',
        collapsable: false,
        children: [
          '/audition/vue',
          '/audition/nodejs',
          '/audition/react',
          '/audition/webpack',
          '/audition/小程序'
        ]
      }, {
        title: '历史汇总',
        collapsable: false,
        path: '/audition/history'
      }]
    }
  },
  // 配置搜索
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/back-to-top', true],
    ['@vuepress/nprogress'],
    ['@maginapp/vuepress-plugin-katex'],
    ['@maginapp/vuepress-plugin-flowchart', {'???????????': 'test'}],
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
        '@alias': '../../../assets/images'
      }
    }
  }
}