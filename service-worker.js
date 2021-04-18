/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "581f4d0252eef6d87e63229bb814f74e"
  },
  {
    "url": "assets/css/0.styles.81f7ec21.css",
    "revision": "3dd1f16ea91fc6fa9077091b49458039"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",
    "revision": "7f06b4e30317f784d61d26686aed0ab2"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",
    "revision": "aaf4eee9fba9907d61c3935e0b6a54ae"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",
    "revision": "e78e28b4834954df047e4925e9dbf354"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",
    "revision": "021dd4dc61ee5f5cdf315f43b48c094b"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",
    "revision": "1e802ca9dedc4ed4e3c6f645e4316128"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",
    "revision": "4ec58befa687e9752c3c91cd9bcf1bcb"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",
    "revision": "7edb53b6693d75b8a2232481eea1a52c"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",
    "revision": "d3b46c3a530116933081d9d74e3e9fe8"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",
    "revision": "d49f2d55ce4f40f982d8ba63d746fbf9"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",
    "revision": "a31e7cba7b7221ebf1a2ae545fb306b2"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",
    "revision": "c4c8cab7d5be97b2bb283e531c077355"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",
    "revision": "d5b59ec9764e10f4a82369ae29f3ac58"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",
    "revision": "32a5339eb809f381a7357ba56f82aab3"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",
    "revision": "a48dad4f58c82e38a10da0ceebb86370"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",
    "revision": "b7d9c46bff5d51da6209e355cc4a235d"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.22086eb5.woff",
    "revision": "22086eb5d97009c3e99bcc1d16ce6865"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",
    "revision": "8e1e01c4b1207c0a383d9a2b4f86e637"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",
    "revision": "9ceff51b3cb7ce6eb4e8efa8163a1472"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",
    "revision": "284a17fe5baf72ff8217d4c7e70c0f82"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",
    "revision": "4c57dbc44bfff1fdf08a59cf556fdab3"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",
    "revision": "e8b44b990516dab7937bf240fde8b46a"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.29c86397.ttf",
    "revision": "29c86397e75cdcb3135af8295f1c2e28"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.99be0e10.woff",
    "revision": "99be0e10c38cd42466e6fe1665ef9536"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",
    "revision": "e533d5a2506cf053cd671b335ec04dde"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",
    "revision": "5c734d78610fa35282f3379f866707f2"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",
    "revision": "5c94aef490324b0925dbe5f643e8fd04"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.b741441f.woff",
    "revision": "b741441f6d71014d0453ca3ebc884dd4"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",
    "revision": "9a2834a9ff8ab411153571e0e55ac693"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",
    "revision": "b13731ef4e2bfc3d8d859271e39550fc"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",
    "revision": "d747bd1e7a6a43864285edd73dcde253"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",
    "revision": "291e76b8871b84560701bd29f9d1dcc7"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",
    "revision": "4ad08b826b8065e1eab85324d726538c"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.f0303906.woff",
    "revision": "f0303906c2a67ac63bf1e8ccd638a89e"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",
    "revision": "3fb419559955e3ce75619f1a5e8c6c84"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",
    "revision": "6e0830bee40435e72165345e0682fbfc"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",
    "revision": "7dc027cba9f7b11ec92af4a311372a85"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",
    "revision": "4059868e460d2d2e6be18e180d20c43d"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",
    "revision": "727a9b0d97d72d2fc0228fe4e07fb4d8"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",
    "revision": "fba01c9c6fb2866a0f95bcacb2c187a5"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",
    "revision": "2555754a67062cac3a0913b715ab982f"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",
    "revision": "5c58d168c0b66d2c32234a6718e74dfb"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",
    "revision": "d929cd671b19f0cfea55b6200fb47461"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.755e2491.woff2",
    "revision": "755e2491f13b5269f0afd5a56f7aa692"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",
    "revision": "d12ea9efb375f9dc331f562e69892638"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",
    "revision": "d524c9a5b62a17f98f4a97af37fea735"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",
    "revision": "7342d45b052c3a2abc21049959fbab7f"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",
    "revision": "eb130dcc661de766c999c60ba1525a88"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",
    "revision": "ad7672524b64b730dfd176140a8945cb"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",
    "revision": "257023560753aeb0b89b7e434d3da17f"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",
    "revision": "3fe216d2a5f736c560cde71984554b64"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",
    "revision": "6cc31ea5c223c88705a13727a71417fa"
  },
  {
    "url": "assets/img/7.ed5e2a35.png",
    "revision": "ed5e2a35e70a4128f119d7dfc4df6fd8"
  },
  {
    "url": "assets/img/8.77e1630e.png",
    "revision": "77e1630e6aef17ef660d0fa392f55d2b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/test-1.ed5e2a35.png",
    "revision": "ed5e2a35e70a4128f119d7dfc4df6fd8"
  },
  {
    "url": "assets/js/10.8cb01bed.js",
    "revision": "2959d2a43dd24a44ec1153616536a6df"
  },
  {
    "url": "assets/js/11.7ff16ef9.js",
    "revision": "b9a3c66f2c29d339ed91817952515df1"
  },
  {
    "url": "assets/js/12.82fea773.js",
    "revision": "baa24f6bc2291b4d5d5f3aef8e7fb86a"
  },
  {
    "url": "assets/js/13.994cdb1c.js",
    "revision": "c45123abc54ef53c4c46cb8ceb243c2d"
  },
  {
    "url": "assets/js/14.84bb9464.js",
    "revision": "38bc34a65c870b7cac23bf3263dcde04"
  },
  {
    "url": "assets/js/15.db50dccb.js",
    "revision": "95247394473dbb66138c3c5d67538af9"
  },
  {
    "url": "assets/js/16.2ef45472.js",
    "revision": "a29590046689f43a20f6e8416be2724e"
  },
  {
    "url": "assets/js/17.75040912.js",
    "revision": "0b2dfeb8bb431433431643faa0a8537a"
  },
  {
    "url": "assets/js/18.97f11633.js",
    "revision": "2bcb4b5283d98bc9a6b603b07145b974"
  },
  {
    "url": "assets/js/19.6e7f82a0.js",
    "revision": "49051deab6f5bf1f58d7b4c21c6ca273"
  },
  {
    "url": "assets/js/20.96c39a68.js",
    "revision": "86ae35f4899c3d53f06b17179504a4c7"
  },
  {
    "url": "assets/js/21.2549d631.js",
    "revision": "44c6a75f75cee514a374f414d28ce766"
  },
  {
    "url": "assets/js/22.6d5fa226.js",
    "revision": "0f57e0d00e45aba646ca4d3cb4e0a689"
  },
  {
    "url": "assets/js/23.b6cf0962.js",
    "revision": "994481bef6d7231a9b8d599576cd2884"
  },
  {
    "url": "assets/js/24.d3eb2b95.js",
    "revision": "bdfc8e0756e747f3f814231c3f2d8ea6"
  },
  {
    "url": "assets/js/25.353004eb.js",
    "revision": "c44fcec2c4934d85b8eb9d921f1a3b2e"
  },
  {
    "url": "assets/js/26.10a68545.js",
    "revision": "df94ed0b671580cd1130930f37328f3d"
  },
  {
    "url": "assets/js/27.48c7cbd1.js",
    "revision": "0c60939b1b6cc4bd936e1a07343b5e88"
  },
  {
    "url": "assets/js/28.9a84bef8.js",
    "revision": "1397e5d55b5f2f4a6dd506bc5202e72d"
  },
  {
    "url": "assets/js/29.a5090ce5.js",
    "revision": "0f11c91763345e9f39eef79cbca8f43e"
  },
  {
    "url": "assets/js/3.fd3193e4.js",
    "revision": "f62e7d605a41cdd5fb06bddcace0cf2d"
  },
  {
    "url": "assets/js/30.4e911682.js",
    "revision": "398f9afc1c8211ef3d58ee0d89a56dbe"
  },
  {
    "url": "assets/js/31.dfe2ab52.js",
    "revision": "c573cc539752085ced7c42678b645934"
  },
  {
    "url": "assets/js/32.e7537a05.js",
    "revision": "4d3520e6fc81d8c41b82365005368db9"
  },
  {
    "url": "assets/js/33.e7745bfb.js",
    "revision": "fba36590c7bd1018e3080e0a612c2b2a"
  },
  {
    "url": "assets/js/34.bc3b4b19.js",
    "revision": "026185db6550121c1b5fea14fde8eb86"
  },
  {
    "url": "assets/js/35.95b1f4e4.js",
    "revision": "477890233ebdbd37bf11b0af16d0064a"
  },
  {
    "url": "assets/js/36.ff3fa8b9.js",
    "revision": "4ab1ce0e63f25c0749f5d77b23295ba0"
  },
  {
    "url": "assets/js/37.da77c72c.js",
    "revision": "e8b574474956be92daf6a29f14a62d81"
  },
  {
    "url": "assets/js/38.53197cfe.js",
    "revision": "c55af5dfcd063eeac1f53bbfcd73e1d6"
  },
  {
    "url": "assets/js/39.0e006aa7.js",
    "revision": "0179ccc1feda04e375eee82dc5890f01"
  },
  {
    "url": "assets/js/4.c4633961.js",
    "revision": "5045559a5c6c66f2eab888ba66cae98c"
  },
  {
    "url": "assets/js/40.5a747d09.js",
    "revision": "973fe81a0b1d8faaed3313718385394d"
  },
  {
    "url": "assets/js/41.537d39e5.js",
    "revision": "6812477af26c51b02ac2414314641628"
  },
  {
    "url": "assets/js/42.4efb3fcf.js",
    "revision": "a20f7d6a2bd30368eb091fce89ec2363"
  },
  {
    "url": "assets/js/43.98089201.js",
    "revision": "b1446588b3d8ecf61486aa50dfb79144"
  },
  {
    "url": "assets/js/44.d0111bb2.js",
    "revision": "c1dd24b6e35b50c168359aa82caa8129"
  },
  {
    "url": "assets/js/45.3c5786c3.js",
    "revision": "d6e5f271797fee690937b9a31eed0ff3"
  },
  {
    "url": "assets/js/46.100ec8c9.js",
    "revision": "4df1154fc6459370e944025443df52fd"
  },
  {
    "url": "assets/js/47.717d52bd.js",
    "revision": "89d1d48af7263f94c76bdb3a3bc08fc3"
  },
  {
    "url": "assets/js/48.bc685a84.js",
    "revision": "6890f11475c1a0117fd12c69ce967796"
  },
  {
    "url": "assets/js/49.0a4f015b.js",
    "revision": "8d461e7a9dae822d8dd20ea121c0a039"
  },
  {
    "url": "assets/js/5.f129f746.js",
    "revision": "c350f084e89e3cde9eb1e44300c7cc78"
  },
  {
    "url": "assets/js/50.a4c050af.js",
    "revision": "10d7acd04ea1b336344616de238f1008"
  },
  {
    "url": "assets/js/51.142f93dd.js",
    "revision": "4e8d930e7e11fed029289a1f519e219f"
  },
  {
    "url": "assets/js/52.dad1fe4f.js",
    "revision": "7beec4ddd46571b77555d380c4a372cf"
  },
  {
    "url": "assets/js/53.7ad84036.js",
    "revision": "6d636d2f3d9ef7338169a99e071a97c2"
  },
  {
    "url": "assets/js/54.6887cc3d.js",
    "revision": "fa6e658bb26d06664333885bafcc37d7"
  },
  {
    "url": "assets/js/55.a80379f3.js",
    "revision": "60dd35aa53e9711ab7d82e765a3869d5"
  },
  {
    "url": "assets/js/56.7ef78d05.js",
    "revision": "88db480bd61292bbe40b93da77d28cc4"
  },
  {
    "url": "assets/js/57.def997cb.js",
    "revision": "e14c9f6cecc3271a0d6312217a65dba1"
  },
  {
    "url": "assets/js/58.c6ae2932.js",
    "revision": "f63e781d37735c67cfd4689973b75dbc"
  },
  {
    "url": "assets/js/59.0dace13a.js",
    "revision": "06c7eb71eea71904127cc1bf6ca83c7c"
  },
  {
    "url": "assets/js/6.b8b865fe.js",
    "revision": "73cda2a3dcf5842f105d2a00ca686eab"
  },
  {
    "url": "assets/js/7.e607cc21.js",
    "revision": "93249b4cb560e702feedd26324c40d48"
  },
  {
    "url": "assets/js/8.47300099.js",
    "revision": "62799cad2e5a7fea398ffe77a7b5e6af"
  },
  {
    "url": "assets/js/9.2ab25715.js",
    "revision": "5951d0b64b115d9640770dd3e14c8051"
  },
  {
    "url": "assets/js/app.e1d28736.js",
    "revision": "9d3aff8596535c29239ea5ab46b1ec9c"
  },
  {
    "url": "assets/js/vendors~flowchart.a01d896f.js",
    "revision": "c8034bee88c9a7b2dc7f574e0a24b77f"
  },
  {
    "url": "blog/about-config/vscode-multi-column.html",
    "revision": "0fc26e8e1fc16c1f9c668ec3145b25ef"
  },
  {
    "url": "blog/about-config/vuepress-github-website.html",
    "revision": "e4130331fbf1db432fde933ab6164de2"
  },
  {
    "url": "blog/frontend-records/css/sticky.html",
    "revision": "5a8559a6b278ed1475a6f0731b214c9b"
  },
  {
    "url": "blog/frontend-records/ecmascript.html",
    "revision": "db8908fb64acd6e553477ddfcfb0b1c3"
  },
  {
    "url": "blog/frontend-records/image-gif.html",
    "revision": "33a748625fb1c33a136f22017d822ff1"
  },
  {
    "url": "blog/frontend-records/image-sharp.html",
    "revision": "5eec63d5c6062905abcc1b4dd79c104d"
  },
  {
    "url": "blog/frontend-records/pwa-webpush.html",
    "revision": "9a97a560650d678df3334aa163b841c5"
  },
  {
    "url": "blog/frontend-records/special-css.html",
    "revision": "75ceac998ca3e5edd12138400153aa74"
  },
  {
    "url": "blog/html-test/hash-test.html",
    "revision": "22f962352e33e9a2ee51125eb3867b45"
  },
  {
    "url": "blog/html-test/just-test.html",
    "revision": "3d14677ed69fade8ed4cc851b10a8f9b"
  },
  {
    "url": "blog/html-test/summary-test.html",
    "revision": "d3dd93dfb1136355fc5fc64ca36054cb"
  },
  {
    "url": "blog/index.html",
    "revision": "6a5ef200a1ff27923eb0b342002ffc56"
  },
  {
    "url": "blog/node-server/koa-bodyParser-myself.html",
    "revision": "b8b867780391ad0257966602358900f3"
  },
  {
    "url": "blog/node-server/koa-middleware.html",
    "revision": "7768e322cb55b09a84cbd4a7e2803d57"
  },
  {
    "url": "blog/node-server/koa-mysql.html",
    "revision": "01f3c259e79c8cfc72553ee176109233"
  },
  {
    "url": "blog/node-server/koa-router.html",
    "revision": "18b98f7a4c6ba65703de3b13214a98e8"
  },
  {
    "url": "blog/node-server/koa-server-init.html",
    "revision": "4f49d6cd47ef50b42fd2371b8b1cacce"
  },
  {
    "url": "blog/node-server/node-crawler.html",
    "revision": "9d29b0b8bae4604e0494c92bf9aaa72c"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "e051fae2567eca73b45872e5d075bddc"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "948a472be3750fea00ac8f9064874ace"
  },
  {
    "url": "blog/vue/promote-of-vue.html",
    "revision": "548780fe46aedd18a0d16e9c5325406b"
  },
  {
    "url": "blog/vue/vue3-diff.html",
    "revision": "e7f505f422213c5ae9498a55c5c08efe"
  },
  {
    "url": "blog/vue/vue3-effect-api.html",
    "revision": "58303892e2738cdee8a1c568f4895394"
  },
  {
    "url": "blog/vue/vue3-introduce.html",
    "revision": "005eea9365ad27a673fe0144f7698509"
  },
  {
    "url": "blog/vue/vue3-lifecycle.html",
    "revision": "9d21d6404c2a55ae71973fa821d41483"
  },
  {
    "url": "blog/vue/vue3-reactive.html",
    "revision": "c1ce44931cc2cd3861d450b6e29d4798"
  },
  {
    "url": "blog/vue/vue3-render.html",
    "revision": "de7a9adf4a98dbce674a496a06766c08"
  },
  {
    "url": "blog/vue/vue3-scheduler.html",
    "revision": "3c28bfadecc4a6dc4d1b5b3d0a83641c"
  },
  {
    "url": "blog/vue/vue3-vnode.html",
    "revision": "bc3e7d8e725931d7c636267e9162040f"
  },
  {
    "url": "Goal.html",
    "revision": "37e5210bcf6b7f7fd5da6a7c64cf5307"
  },
  {
    "url": "icons/icon-128.png",
    "revision": "0f192cfaaf18baccbbca7406469116bb"
  },
  {
    "url": "icons/icon-168.png",
    "revision": "4a08f41c6a981255cd9ad02b698aee80"
  },
  {
    "url": "icons/icon-192.png",
    "revision": "49764abf0640d2ef0440a4d1f8afd9ea"
  },
  {
    "url": "icons/icon-256.png",
    "revision": "fa9fe3d69902567265fb8a12e2acfba6"
  },
  {
    "url": "icons/icon-32.png",
    "revision": "ddd7ea4be6f592c49cd1db4ee68ad3d3"
  },
  {
    "url": "icons/icon-48.png",
    "revision": "13b062ceaa0396199a6e5e74e05a5de5"
  },
  {
    "url": "icons/icon-512.png",
    "revision": "1ec3ef40b32c9371bf6e5fe3dcb3ed4a"
  },
  {
    "url": "icons/icon-96.png",
    "revision": "8d2fb9051a6dffbc6822380936d918ea"
  },
  {
    "url": "index.html",
    "revision": "e8595050e63f063c6e147a4ed78883e8"
  },
  {
    "url": "interview/css.html",
    "revision": "14cf87defb684ae3b7e0905d197adbc3"
  },
  {
    "url": "interview/history.html",
    "revision": "213246bdd3d4a6a32440298c27db0f09"
  },
  {
    "url": "interview/html.html",
    "revision": "3d1cf96fa1e2f1ed5b5e90cb84cfdb96"
  },
  {
    "url": "interview/index.html",
    "revision": "cd11f37614655b22fa86679b22615529"
  },
  {
    "url": "interview/js.html",
    "revision": "23ae3f525063dbaec5c5b3bf23a36777"
  },
  {
    "url": "interview/nodejs.html",
    "revision": "3ad6f523238cb79cd71ae39c0060d544"
  },
  {
    "url": "interview/OLDREADME.html",
    "revision": "dc252a88dee88763ac79d1b93802f948"
  },
  {
    "url": "interview/quote.html",
    "revision": "2eace3cc2cd44654705017a36cf2c520"
  },
  {
    "url": "interview/react.html",
    "revision": "a787486419289cbdc1e6dbc538a47f90"
  },
  {
    "url": "interview/vue.html",
    "revision": "e20ef0596e1b64cdf58a87b8b9b8023a"
  },
  {
    "url": "interview/webpack.html",
    "revision": "c422226236458ab71d541d47b9b4c1fd"
  },
  {
    "url": "interview/小程序.html",
    "revision": "ae80fd5ca8c9e923f0f12592b86b543a"
  },
  {
    "url": "sharing/index.html",
    "revision": "14bae6e69634ad7b0fd5969f31b97271"
  },
  {
    "url": "sharing/sharing-blog.html",
    "revision": "8124b8a0079b2b3c4f0f9385110312bf"
  },
  {
    "url": "sharing/software.html",
    "revision": "3e5700470f260306ef92c922eeb55fa9"
  },
  {
    "url": "sharing/utils-web.html",
    "revision": "f152d1037291330cfdac995d8e7e39c2"
  },
  {
    "url": "test.png",
    "revision": "7576bc4c1260c05485c5adec94a0cc25"
  },
  {
    "url": "Todo.html",
    "revision": "68f5fbaa9f95961fb64eb5ab883bba95"
  },
  {
    "url": "webstatic/0.png",
    "revision": "7576bc4c1260c05485c5adec94a0cc25"
  },
  {
    "url": "webstatic/1.png",
    "revision": "7576bc4c1260c05485c5adec94a0cc25"
  },
  {
    "url": "webstatic/2.png",
    "revision": "7576bc4c1260c05485c5adec94a0cc25"
  },
  {
    "url": "webstatic/2020-05-01-token-get.png",
    "revision": "77e1630e6aef17ef660d0fa392f55d2b"
  },
  {
    "url": "webstatic/3.png",
    "revision": "7576bc4c1260c05485c5adec94a0cc25"
  },
  {
    "url": "webstatic/4.png",
    "revision": "7576bc4c1260c05485c5adec94a0cc25"
  },
  {
    "url": "webstatic/5.png",
    "revision": "7576bc4c1260c05485c5adec94a0cc25"
  },
  {
    "url": "webstatic/6.png",
    "revision": "7576bc4c1260c05485c5adec94a0cc25"
  },
  {
    "url": "webstatic/8.png",
    "revision": "77e1630e6aef17ef660d0fa392f55d2b"
  },
  {
    "url": "webstatic/9.png",
    "revision": "77e1630e6aef17ef660d0fa392f55d2b"
  },
  {
    "url": "webstatic/vue-promote-long-task.png",
    "revision": "dd75b046ecfec988b4bd441b9bd3cc37"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
