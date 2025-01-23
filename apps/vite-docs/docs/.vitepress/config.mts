import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-lists'
import markdownItTextualUml from 'markdown-it-textual-uml';
import siderJson from '../../contants/siderbar.json'

import { VitePWA } from 'vite-plugin-pwa';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Magina Sharing Portal",
  description: "A personal sharing portal about tech,  daily news etc",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Test', link: '/dev-test/' },
    ],

    sidebar: siderJson,

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
  },
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate', // 自动更新 Service Worker
        includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'], // 包含的静态资源
        manifest: {
          name: '你的应用名称',
          short_name: '应用简称',
          description: '你的应用描述',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,png,svg}'], // 缓存规则
        },
      }),
    ]
  }
})
