import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-lists'
import markdownItTextualUml from 'markdown-it-textual-uml';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Magina Sharing Portal",
  description: "A personal sharing portal about tech,  daily news etc",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Test', link: '/dev-test/' },
    ],

    sidebar: {
      '/blog/': [
        {
          text: 'vite & vitepress',
          collapsed: true,
          items: [
            { text: 'Vitepress Plugins', link: '/blog/vitepress-markdown-plugins' },
          ]
        },
        {
          text: 'React',
          collapsed: true,
          items: [
            // { text: 'Vite Press Plugins', link: '/blog/plugins' },
          ]
        },
        {
          text: 'Vue',
          collapsed: true,
          items: [
            // { text: 'Vite Press Plugins', link: '/blog/plugins' },
          ]
        },
      ],
      '/dev-test/': [
        {
          text: 'Dev Test',
          collapsed: true,
          items: [
            { text: 'Introduce', link: '/dev-test/' },
            { text: 'Markdown Examples', link: '/dev-test/markdown-examples' },
            { text: 'Runtime API Examples', link: '/dev-test/api-examples' }
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    outline: {
      level: [1,3]
    }
  },
  markdown: {
    config: (md) => {
      md.use(taskLists)
      // md.use(mermaid)
      // md.use(plantuml)
      md.use(markdownItTextualUml)
    },
    math: true,
  }
})
