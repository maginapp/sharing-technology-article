import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  // plugins: [
  //   // 111,
  //   // 22,
  //   VitePWA({
  //     injectRegister: 'inline',
  //     registerType: 'autoUpdate', // 自动更新
  //     includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'], // 包含的资源
  //     manifest: {
  //       name: '你的应用名称',
  //       short_name: '应用简称',
  //       description: '你的应用描述',
  //       theme_color: '#ffffff',
  //       icons: [
  //         {
  //           src: 'pwa-192x192.png',
  //           sizes: '192x192',
  //           type: 'image/png',
  //         },
  //         {
  //           src: 'pwa-512x512.png',
  //           sizes: '512x512',
  //           type: 'image/png',
  //         },
  //         {
  //           src: 'pwa-512x512.png',
  //           sizes: '512x512',
  //           type: 'image/png',
  //           purpose: 'any maskable',
  //         },
  //       ],
  //     },
  //     devOptions: {
  //       enabled: true
  //     }
  //   }),
  // ],
});
