const blogSideBar = [
  {
    title: '配置构建',
    // collapsable: false,
    sidebarDepth: 2,
    children: [
      '/blog/about-config/vuepress-github-website',
      // { 
      //   title: '规范',   // 必要的
      //   path: '/blog/about-config/node-server', 
      //   children: [
      //     '/blog/standard/git-commit'
      //   ]
      // }
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
    title: 'node',
    sidebarDepth: 2,
    children: [
      '/blog/node-server/koa-server-init',
      '/blog/node-server/koa-middleware',
      '/blog/node-server/koa-router',
      '/blog/node-server/koa-mysql',
      '/blog/node-server/koa-bodyParser-myself'
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
      '/blog/html-test/hash-test',
      '/blog/html-test/just-test',
    ],
    // children: [
    //   '/',
    //   '/blog/',
    //   '/audition/'
    // ]
  }
]

module.exports = {
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
