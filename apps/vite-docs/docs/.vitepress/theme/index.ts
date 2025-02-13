// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Mermaid from './Mermaid.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'mermaid': () => h(Mermaid)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
