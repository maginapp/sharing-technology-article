const blogSideBar = [
  {
    title: '配置构建',
    // collapsable: false,
    sidebarDepth: 2,
    children: [
      '/blog/about-config/vuepress-github-website',
      '/blog/about-config/vscode-multi-column'
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
    sidebarDepth: 2,
    children: [
      '/blog/frontend-records/image-sharp',
      '/blog/frontend-records/image-gif'
    ]
  },
  {
    title: 'Vue',
    sidebarDepth: 2,
    children: [
      '/blog/vue/promote-of-vue',
      '/blog/vue/vue3-reactive'
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
      '/blog/node-server/koa-bodyParser-myself',
      '/blog/node-server/node-crawler'
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
    //   '/interview/'
    // ]
  }
]

// const interview = [{
//   title: '分类',
//   collapsable: false,
//   children: [
//     '/interview/js',
//     '/interview/css',
//     '/interview/html'
//   ]
// }, {
//   title: '专题',
//   collapsable: false,
//   children: [
//     '/interview/vue',
//     '/interview/nodejs',
//     '/interview/react',
//     '/interview/webpack',
//     '/interview/小程序'
//   ]
// }, {
//   title: '历史汇总',
//   collapsable: false,
//   path: '/interview/history'
// }]

const interview = [{
  title: '汇总',
  collapsable: true,
  path: '/interview/',
  sidebarDepth: 2
}, {
  title: '引用',
  collapsable: true,
  path: '/interview/quote',
  sidebarDepth: 2
  // children: [
  //   '/interview/js',
  //   '/interview/css',
  //   '/interview/html'
  // ]
}]

module.exports = {
  '/blog/': blogSideBar,
  '/sharing/': [{
    collapsable: true,
    title: '博客', 
    path: '/sharing/',
    sidebarDepth: 2
  }],
  '/interview/':  interview
}
