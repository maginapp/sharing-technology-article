const basePath = 'sharing-technology-article'

module.exports = {
    // meta
    title: '我的博客', 
    description: '万事皆虚，万事皆允',
    // vuepress config
    // dest: 'public',
    base: `/${basePath}/`,
    serviceWorker: true,
    evergreen: true,
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
        //   {
        //     text: 'Languages',
        //     items: [
        //       { text: 'Chinese', link: '/language/chinese/' },
        //       { text: 'English', link: '/language/english' }
        //     ]
        //   },
          { text: 'External', link: 'https://www.magina.top' },
        ],
        // displayAllHeaders: true,
        sidebar: [
          {
            title: 'HELP',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
            //   '/foo/one',
            //   '/foo/'
            ]
          },
          {
            title: 'HOME',   // 必要的
            path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
              '/'
            ]
          },
        ]
      },
}