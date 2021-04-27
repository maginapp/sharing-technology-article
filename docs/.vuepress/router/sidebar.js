const blogSidebar = [
  {
    title: '配置构建与规范',
    // collapsable: false,
    sidebarDepth: 2,
    children: [
      { 
        title: 'Vuepress',   // 必要的
        sidebarDepth: 2,
        // collapsable: false, // 打开
        children: [
          '/blog/about-config/vuepress-github-website',
          '/blog/about-config/vuepress-plugin-introduce',
          '/blog/about-config/vuepress-flowchart',
        ]
      },
      '/blog/about-config/vscode-multi-column',
      '/blog/standard/git-commit',
      '/blog/standard/css-BEM',
    ]
  },
  {
    title: '前端笔记',
    sidebarDepth: 2,
    // initialOpenGroupIndex: 1, // 无效的，已经测试
    children: [
      { 
        title: 'CSS',   // 必要的
        sidebarDepth: 2,
        // collapsable: false, // 始终打开
        children: [
          '/blog/frontend-records/special-css',
          '/blog/frontend-records/css/sticky',
        ]
      },
      // { 
      //   title: 'Vue3解析',   // 必要的
      //   sidebarDepth: 2,
      //   // collapsable: false, // 始终打开
      //   path: '/blog/vue/vue3-parse-doc',
      //   children: [
      //     '/blog/vue/vue3-introduce',
      //     '/blog/vue/vue3-reactive',
      //   ]
      // },
      '/blog/frontend-records/image-sharp',
      '/blog/frontend-records/image-gif',
      '/blog/frontend-records/ecmascript'
    ]
  },
  {
    title: 'Vue',
    sidebarDepth: 2,
    // collapsable: false, // 始终打开
    children: [
      { 
        title: 'Vue3解析',   // 必要的
        sidebarDepth: 2,
        // collapsable: false, // 始终打开
        // path: '/blog/vue/vue3-parse-doc', // 去除避免切换时，自动调整
        children: [
          '/blog/vue/vue3-introduce',
          '/blog/vue/vue3-reactive',
          '/blog/vue/vue3-effect-api',
          '/blog/vue/vue3-scheduler',
          '/blog/vue/vue3-render',
          '/blog/vue/vue3-vnode',
          '/blog/vue/vue3-diff', 
          '/blog/vue/vue3-mountElement', 
          // '/blog/vue/vue3-lifecycle'
        ]
      },
      '/blog/vue/promote-of-vue'
    ]
  },
  {
    title: 'node',
    sidebarDepth: 2,
    children: [
      { 
        title: 'Koa入门',   // 必要的
        sidebarDepth: 2,
        // collapsable: false, // 打开
        // path: '/blog/node-server/koa-toc',
        children: [
          '/blog/node-server/koa-server-init',
          '/blog/node-server/koa-middleware',
          '/blog/node-server/koa-router',
          '/blog/node-server/koa-mysql',
          '/blog/node-server/koa-bodyParser-myself',
        ]
      },
      '/blog/node-server/node-crawler'
    ]
  },
  // {
  //   title: '测试',   // 必要的
  //   // collapsable: false, // 可选的, 默认值是 true,
  //   sidebarDepth: 2,    // 可选的, 默认值是 1
  //   path: '/blog/html-test/summary-test',
  //   children: [
  //     '/blog/html-test/hash-test',
  //     '/blog/html-test/just-test',
  //   ]
  // }
]

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

// 处理空数据问题
const sharingSidebar = [{
  collapsable: true,
  title: 'sharing', 
  sidebarDepth: 2,
  children: [
    '/sharing/',
    '/sharing/utils-web',
    '/sharing/sharing-blog',
    '/sharing/software',
  ]
}]

const formatData = (arr) => {
  return arr.filter(item => {
    if (typeof item === 'string') return item
    else {
      if (item.children) item.children = formatData(item.children)
      return item
    } 
  })
}

const formatSideBar = (obj) => {
  for (let k in obj) {
    obj[k] = formatData(obj[k] )
  }
  return obj
}

module.exports = formatSideBar({
  '/blog/': blogSidebar,
  '/sharing/': sharingSidebar,
  '/interview/':  interview
})

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

// const sharingSidebar = [{
//   title: '文章分享', 
//   collapsable: true,
//   path: '/sharing/',
//   sidebarDepth: 2
// }, {
//   title: '常用工具网站', 
//   collapsable: true,
//   path: '/sharing/utils-web',
//   sidebarDepth: 2
// },  {
//   title: '博客', 
//   collapsable: true,
//   path: '/sharing/sharing-blog',
//   sidebarDepth: 2
// }, {
//   title: '常用软件', 
//   collapsable: true,
//   path: '/sharing/software',
//   sidebarDepth: 2
// }]
