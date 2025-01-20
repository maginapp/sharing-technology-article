import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react' // you can also use @vitejs/plugin-react-swc
import pages from 'vite-plugin-react-pages'
import mk from 'markdown-it-katex';
import katex from 'katex';

export default defineConfig({
  plugins: [
    react(),
    pages({
      modifyRemarkPlugins: (s) => {
        console.log(s, mk, katex, katex.default)
        // s.push({
        //   name: 'katex', createPlugin: () => katex
        // })
        s.push({
          name: 'mk', createPlugin: () => mk
        })
        return s
      },
      pagesDir: path.join(__dirname, 'pages'),
    }),
  ],
})
