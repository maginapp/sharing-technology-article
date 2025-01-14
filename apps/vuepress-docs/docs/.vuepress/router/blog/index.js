const blogSidebar = [
    // 配置与构建
    {
      title: '配置与构建',
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
        {
            title: 'webpack',
            sidebarDepth: 2,
            children: [
              '/blog/about-config/webpack/self-cli'
            ]
        },
        '/blog/about-config/vscode-multi-column'
      ]
    },
    // 前端笔记
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
            '/blog/frontend-records/css/special-css',
            '/blog/frontend-records/css/sticky',
            '/blog/frontend-records/css/css-init',
          ]
        },
        { 
          title: '微服务架构',   // Microservice Architecture
          sidebarDepth: 2,
          // collapsable: false, // 始终打开
          children: [
            '/blog/frontend-records/microservice/service-degradation'
          ]
        },
        { 
          title: '视频图片',
          sidebarDepth: 2,
          children: [
            '/blog/frontend-records/views/image-sharp',
            '/blog/frontend-records/views/image-gif',
          ]
        },
        { 
          title: '前端安全',
          sidebarDepth: 2,
          children: [
            '/blog/frontend-records/safe/web-attack',
          ]
        },
        { 
          title: 'DOM-BOM',
          sidebarDepth: 2,
          children: [
            '/blog/frontend-records/dom-bom/copy-text',
          ]
        },
        '/blog/frontend-records/ecmascript',
        '/blog/frontend-records/npm-publish',
        '/blog/frontend-records/ssr-introduce',
      ]
    },
    // vue
    {
      title: 'Vue',
      sidebarDepth: 2,
      // path: '/blog/vue',
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
    // node
    {
      title: 'node',
      sidebarDepth: 2,
      children: [
        { 
          title: 'Koa入门',   // 必要的
          sidebarDepth: 2,
          // collapsable: false, // 打开
          // path: '/blog/node-server/koa/koa-toc',
          children: [
            '/blog/node-server/koa/koa-server-init',
            '/blog/node-server/koa/koa-middleware',
            '/blog/node-server/koa/koa-router',
            '/blog/node-server/koa/koa-mysql',
            '/blog/node-server/koa/koa-bodyParser-myself',
          ]
        },
        '/blog/node-server/file/node-crawler',
        '/blog/node-server/file/file-lock'
      ]
    },
    // 规范简介
    {
      title: '规范简介',
      // collapsable: false,
      sidebarDepth: 2,
      children: [
        '/blog/standard/git-commit',
        '/blog/standard/css-BEM',
      ]
    },
    // 算法入门
    {
      title: '算法入门',
      // collapsable: false,
      sidebarDepth: 2,
      children: [
        { 
          title: 'QUESTION',   // 必要的
          sidebarDepth: 2,
          children: [
            '/blog/algorithm/demo/longest-increasing-subsequence'
          ]
        },
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
  
module.exports = { blogSidebar }