import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-lists'
import markdownItTextualUml from 'markdown-it-textual-uml';
import siderJson from '../../contants/siderbar.json'
import { withPwa } from '@vite-pwa/vitepress'

// https://vitepress.dev/reference/site-config

const configs= defineConfig({
  base: '/',
  title: "Magina Sharing Portal",
  description: "A personal sharing portal about tech,  daily news etc",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Test', link: '/dev-test/' },
      { text: 'Migrate', link: '/migrate/' },
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
  // @ts-ignore
  pwa: {
    mode: 'development',
    registerType: 'autoUpdate',
    strategies: 'injectManifest',
    srcDir: '.vitepress/',
    filename: 'sw.ts',
    // injectRegister: 'inline',
    includeAssets: ['favicon.svg'],
    manifest: {
      name: 'Sharing tech | Magina',
      short_name: 'Magina Blog',
      description: "Progressive Web App of sharing-technology-article",
      icons: [
        {
          "src": "./icons/icon-32.png",
          "sizes": "32x32",
          "type": "image/png"
        },
        {
            "src": "./icons/icon-64.png",
            "sizes": "64x64",
            "type": "image/png"
        },
        {
            "src": "./icons/icon-96.png",
            "sizes": "96x96",
            "type": "image/png"
        },
        {
            "src": "./icons/icon-128.png",
            "sizes": "128x128",
            "type": "image/png"
        },
        {
            "src": "./icons/icon-168.png",
            "sizes": "168x168",
            "type": "image/png"
        },
        {
            "src": "./icons/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "./icons/icon-256.png",
            "sizes": "256x256",
            "type": "image/png"
        },
        {
            "src": "./icons/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
      ],
      start_url: "./index.html",
      display: "fullscreen",
      theme_color: "#B12A34",
      background_color: "#CCCCCC"
    },
    injectManifest: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      type: 'module',
      navigateFallback: '/',
    },
  },
})


// @ts-ignore
export default withPwa(configs);