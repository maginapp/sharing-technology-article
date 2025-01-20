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
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Test', link: '/sss' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
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
