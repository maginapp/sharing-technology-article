const basePath = 'sharing-technology-article'

const blogSideBar = [
  {
    title: '配置构建',
    // collapsable: false,
    sidebarDepth: 2,
    children: [
      '/blog/about-config/vuepress搭建踩坑'
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
    path: '/blog/html-test/测试页面汇总',
    // children: [
    //   { title: '测试汇总', path:'/test-func/'},
    //   { title: '锚点功能测试', path:'/test-func/锚点功能测试/'}
    // ]
    children: [
      '/blog/html-test/锚点功能测试'
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
  title: 'magina',
  description: '路阻且长，行则至',
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
        title: '博客',  path: '/',
      }]
    }
  },
  // 配置搜索
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
  // 代码添加行号
  markdown: {
    lineNumbers: true
  }
}