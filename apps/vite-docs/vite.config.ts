// import mdx from 'vite-plugin-mdx'
// import react from 'vite-plugin-react'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import { babel } from '@rollup/plugin-babel'

// `options` are passed to `@mdx-js/mdx`
const options = {
  // See https://mdxjs.com/advanced/plugins
  remarkPlugins: [
    // E.g. `remark-frontmatter`
  ],
  rehypePlugins: [],
}


export default {
  // jsx: 'react',
  // plugins: [react, mdx]
  plugins: [

    // {enforce: 'pre', ...mdx({/* jsxImportSource: …, otherOptions… */})},
    react(),
    mdx(),
    // babel({
    //   // Also run on what used to be `.mdx` (but is now JS):
    //   extensions: ['.js', '.jsx', '.cjs', '.mjs', '.md', '.mdx']
    //   // Other options…
    // })
  ],
  // plugins: [mdx()],
}