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
    "revision": "c02642953c7e3d90ad9ff2c990626a4b"
  },
  {
    "url": "assets/css/0.styles.a6438058.css",
    "revision": "faa0e2eb87b524e70cbb18822cd04ae2"
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
    "url": "assets/js/10.d4b893dd.js",
    "revision": "faca2816e046ddfc177dfe67e09ac045"
  },
  {
    "url": "assets/js/11.f080d5a9.js",
    "revision": "f85a34ab45937993029b65437d731f5c"
  },
  {
    "url": "assets/js/12.2c80440e.js",
    "revision": "cdeeab31d4141e9b6cab2755a8483b3b"
  },
  {
    "url": "assets/js/13.c2222b5a.js",
    "revision": "378e8be9407762d8c1dedcbef705db38"
  },
  {
    "url": "assets/js/14.2b6ae31e.js",
    "revision": "f0d3c1275e787f1f630a133b75d0f97a"
  },
  {
    "url": "assets/js/15.972bee6e.js",
    "revision": "86e9ae815f3708351152aed0c1848184"
  },
  {
    "url": "assets/js/16.7ffbdd4f.js",
    "revision": "265704e314fb8a5c0188e882ffde0584"
  },
  {
    "url": "assets/js/17.40eae331.js",
    "revision": "f05957512b52290a5469b8885858809b"
  },
  {
    "url": "assets/js/18.4b7375e2.js",
    "revision": "08a0915420182ab6cc25a4d6c8248475"
  },
  {
    "url": "assets/js/19.79f8ee47.js",
    "revision": "5cb6a49a79583c472750dcb3ca05398e"
  },
  {
    "url": "assets/js/20.cb9603f1.js",
    "revision": "8ff55e2729562e74589640696e1675a0"
  },
  {
    "url": "assets/js/21.763ac90a.js",
    "revision": "3b0e506dee7b74d19de3b7ac67844dc1"
  },
  {
    "url": "assets/js/22.74cce07d.js",
    "revision": "8746ab7c31bf537345a3de575a82ecca"
  },
  {
    "url": "assets/js/23.b0cff040.js",
    "revision": "cd9652f6c638d3ceb25ad88049127bb4"
  },
  {
    "url": "assets/js/24.e546f621.js",
    "revision": "92c5893ff705ed6c86d8f3262d1a8d05"
  },
  {
    "url": "assets/js/25.5cd66a36.js",
    "revision": "7ebfe0460b0e937c71b97f7ad0f73c70"
  },
  {
    "url": "assets/js/26.b2e2fb19.js",
    "revision": "404e01d862bd54a307328f24d6875198"
  },
  {
    "url": "assets/js/27.f53c2422.js",
    "revision": "45aa77474e24de2853a742c874a0a065"
  },
  {
    "url": "assets/js/28.eec2dda8.js",
    "revision": "6efefb493039b764de354e30505133a0"
  },
  {
    "url": "assets/js/29.dd2d1b06.js",
    "revision": "f2fc9f9f679c008cc2b129011ded494b"
  },
  {
    "url": "assets/js/3.806a3dc6.js",
    "revision": "ab5cb4081501d4530ab3c16fced9ff45"
  },
  {
    "url": "assets/js/30.69cfdfcd.js",
    "revision": "db16a0a12327b445a20fd104208df4ce"
  },
  {
    "url": "assets/js/31.e6d1d30c.js",
    "revision": "3d10a6e91db41bb01de7b98891359d4c"
  },
  {
    "url": "assets/js/32.8b66777f.js",
    "revision": "1ebe25c4b9a9cad41cc7bc059183bbbd"
  },
  {
    "url": "assets/js/33.f60397de.js",
    "revision": "dae8994fc62677d15a2deb8c899cadef"
  },
  {
    "url": "assets/js/34.c0925db9.js",
    "revision": "c557dab9f64de8fdda786c28ceb1612b"
  },
  {
    "url": "assets/js/35.ee6dced0.js",
    "revision": "4facfb1b728ba399948b6e91a56bd3bb"
  },
  {
    "url": "assets/js/36.775d7cfb.js",
    "revision": "5aed84a0533733c1f421a7dca4e69c28"
  },
  {
    "url": "assets/js/37.8cf94dbc.js",
    "revision": "c8ad0b372b4a355d46c1da493fd6b595"
  },
  {
    "url": "assets/js/38.5c1b8ec2.js",
    "revision": "95f7d8817af13d2096234a21392b376c"
  },
  {
    "url": "assets/js/39.42e856de.js",
    "revision": "7177d615cdf21821ab15cba84a3d6b2f"
  },
  {
    "url": "assets/js/4.9a6fe97a.js",
    "revision": "4d88bab21c42a8a92bebff7b3422569c"
  },
  {
    "url": "assets/js/40.d84ae0c9.js",
    "revision": "8494e255ba46ea5f164be35edbef4f05"
  },
  {
    "url": "assets/js/41.33dd8ebf.js",
    "revision": "446bd08e5657e580faf04a3de1a557c0"
  },
  {
    "url": "assets/js/42.fb6ec39c.js",
    "revision": "869610daf8169c5d37a376eace305ab9"
  },
  {
    "url": "assets/js/43.df5805e6.js",
    "revision": "5b02fb80a072ab7d6f7b9be3817fb5df"
  },
  {
    "url": "assets/js/44.df1b520c.js",
    "revision": "0e9b9f8201056d123ff89958a7d419cb"
  },
  {
    "url": "assets/js/45.6dd9c5aa.js",
    "revision": "db8d9c59487eb5d0c94738f7822f7edf"
  },
  {
    "url": "assets/js/46.d5141eb5.js",
    "revision": "18485422fc575bc1180ed76f5b061c80"
  },
  {
    "url": "assets/js/47.07b84fac.js",
    "revision": "ce567fe426c13b9dd15800b39a42a5f7"
  },
  {
    "url": "assets/js/48.459ea5d8.js",
    "revision": "db42566acbc9b1c03acf50a4f71e34c6"
  },
  {
    "url": "assets/js/49.90d0f231.js",
    "revision": "f8fac1492b3240726b98feed4e2e0c6c"
  },
  {
    "url": "assets/js/5.64f53352.js",
    "revision": "4b0af09fd13efdb3647e6891e9a04854"
  },
  {
    "url": "assets/js/50.98e12c29.js",
    "revision": "7c1c3f602dc27bb60fcc814153715841"
  },
  {
    "url": "assets/js/51.a0f0cd1a.js",
    "revision": "e460286abf04b603dac5f5dcd1da8e0e"
  },
  {
    "url": "assets/js/52.c944a482.js",
    "revision": "ed2d000767053ba41fcfda4aa845c0e3"
  },
  {
    "url": "assets/js/53.0000bcfd.js",
    "revision": "ac9d4d017a866ac20eb3b74f7b69e08e"
  },
  {
    "url": "assets/js/54.ad5d8c55.js",
    "revision": "63b352027efc72c0217f73a474575a5b"
  },
  {
    "url": "assets/js/55.bcf958b3.js",
    "revision": "7408771c08545a2b40e90d297dd1ed36"
  },
  {
    "url": "assets/js/56.1abd550f.js",
    "revision": "a9a3f03a8c7a81d750a623579f882f95"
  },
  {
    "url": "assets/js/57.dae9cab4.js",
    "revision": "b6f84dbb745628e6a6eba6f48989825e"
  },
  {
    "url": "assets/js/58.6de6faf0.js",
    "revision": "a25aaab3ed9b04929989c8b1c9acb34e"
  },
  {
    "url": "assets/js/59.6b7fa4f1.js",
    "revision": "437221b87c89e4970e7a1ea992138839"
  },
  {
    "url": "assets/js/6.4a660b5a.js",
    "revision": "85fd268cce26556299232bae75755ea8"
  },
  {
    "url": "assets/js/60.a946591b.js",
    "revision": "7ff16f4942b502a50a71620759433a6c"
  },
  {
    "url": "assets/js/61.eddb25d4.js",
    "revision": "e86236d1e7f24b9028021ea1870eb13a"
  },
  {
    "url": "assets/js/62.f5279a0f.js",
    "revision": "660802e8300090aef68edfdf7c1d5279"
  },
  {
    "url": "assets/js/63.28ed6df5.js",
    "revision": "9a82c84922413a90676edc36dadac53b"
  },
  {
    "url": "assets/js/7.ff28708b.js",
    "revision": "567aa603e1418e13b344f2184ce83600"
  },
  {
    "url": "assets/js/8.f008c864.js",
    "revision": "25c43a16dda4b360f9abc31d94ffafe5"
  },
  {
    "url": "assets/js/9.06eae84e.js",
    "revision": "b323c9a29a5080eb0901c474c55bd6aa"
  },
  {
    "url": "assets/js/app.32da1bfd.js",
    "revision": "9b272bc24092b993894d29eab4d355c6"
  },
  {
    "url": "assets/js/vendors~flowchart.16e34617.js",
    "revision": "2bde1976bbf9e7e2f108bccb37f75be3"
  },
  {
    "url": "blog/about-config/vscode-multi-column.html",
    "revision": "7c3f1c45e852366fe48bcdd2aac519f5"
  },
  {
    "url": "blog/about-config/vuepress-flowchart.html",
    "revision": "e6b1e23d5afc19cb3e518e074b2f95fe"
  },
  {
    "url": "blog/about-config/vuepress-github-website.html",
    "revision": "9145f53e78e57553c3ced097ff084c42"
  },
  {
    "url": "blog/about-config/vuepress-plugin-introduce.html",
    "revision": "f8ac2ec842e7410a16ed0a39874039eb"
  },
  {
    "url": "blog/frontend-records/css/sticky.html",
    "revision": "6cc2f9d0d8970ce2b49ce6ea07ac4d94"
  },
  {
    "url": "blog/frontend-records/ecmascript.html",
    "revision": "6ed256ff893ffcf653452445b87f02c8"
  },
  {
    "url": "blog/frontend-records/image-gif.html",
    "revision": "656d5e117789ffb540ca988d8c7e0afb"
  },
  {
    "url": "blog/frontend-records/image-sharp.html",
    "revision": "8427787ff60f39eba70869ce09b782f2"
  },
  {
    "url": "blog/frontend-records/pwa-webpush.html",
    "revision": "bebfaf3fbeaaddd50f0d2d7d2ee49e63"
  },
  {
    "url": "blog/frontend-records/special-css.html",
    "revision": "ff6b2b348174b395390009a7e682d55e"
  },
  {
    "url": "blog/html-test/hash-test.html",
    "revision": "233d64f9e3eeabe41f2d5695caf0e864"
  },
  {
    "url": "blog/html-test/just-test.html",
    "revision": "1a31354dd2958a5d1752e0fa284c2d5f"
  },
  {
    "url": "blog/html-test/summary-test.html",
    "revision": "832408ec897122c87b369101a60616fa"
  },
  {
    "url": "blog/index.html",
    "revision": "43d575a2a144fecbfbc07c237cefe610"
  },
  {
    "url": "blog/node-server/koa-bodyParser-myself.html",
    "revision": "03ec17d6015fd65c7ec49598d3cfa94c"
  },
  {
    "url": "blog/node-server/koa-middleware.html",
    "revision": "3e85111f5056e4c20d69e63e0b34181d"
  },
  {
    "url": "blog/node-server/koa-mysql.html",
    "revision": "4c4c1475bbca4e161edbefe6ab17ce7e"
  },
  {
    "url": "blog/node-server/koa-router.html",
    "revision": "f8bbb1dd18b291fbbcc2abfc4b68bd55"
  },
  {
    "url": "blog/node-server/koa-server-init.html",
    "revision": "c803b8cbcd924e70160e80d52274b0ac"
  },
  {
    "url": "blog/node-server/node-crawler.html",
    "revision": "9773ad8900c0b9354f3c1d2711e33771"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "07891ee182414a785915d51acc455e6d"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "f5a7ffde45787f85b484d5b9c4a15ca3"
  },
  {
    "url": "blog/vue/promote-of-vue.html",
    "revision": "9faccd2babe082cec1160171c76795af"
  },
  {
    "url": "blog/vue/vue3-diff.html",
    "revision": "fecdbf323ba678feba38e09c3bc567d3"
  },
  {
    "url": "blog/vue/vue3-effect-api.html",
    "revision": "a8c15f5cb83695a4b9185906ba5aee5b"
  },
  {
    "url": "blog/vue/vue3-introduce.html",
    "revision": "1836d3afd8f98260b0ce87c0d5f16f59"
  },
  {
    "url": "blog/vue/vue3-lifecycle.html",
    "revision": "088415151a8643fd20054911b639d052"
  },
  {
    "url": "blog/vue/vue3-reactive.html",
    "revision": "31ca7bd8cdb2642a2a5a023b34527ed0"
  },
  {
    "url": "blog/vue/vue3-render.html",
    "revision": "a37416c7dd5eb82215167ec06a6fbaf6"
  },
  {
    "url": "blog/vue/vue3-scheduler.html",
    "revision": "2afa6ec57ec985aafbcc2fde0675d193"
  },
  {
    "url": "blog/vue/vue3-vnode.html",
    "revision": "d74bda18dfd795b7e7ae2eb888c093e1"
  },
  {
    "url": "Goal.html",
    "revision": "b6749855fc23c9ed971c2adf1399e052"
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
    "revision": "3eeffed038511cce10a11bc5f9252048"
  },
  {
    "url": "interview/css.html",
    "revision": "861d76c03c7721b4f1978360bd73daa5"
  },
  {
    "url": "interview/history.html",
    "revision": "2964dc6f7ce46dc828aee4bac047d5ff"
  },
  {
    "url": "interview/html.html",
    "revision": "a1de0db54c9ffd244362c54fd70003e6"
  },
  {
    "url": "interview/index.html",
    "revision": "6c370eda74b4509e9963cb93f77276be"
  },
  {
    "url": "interview/js.html",
    "revision": "c838652f27d3bbbdd1c9a94273e062e7"
  },
  {
    "url": "interview/nodejs.html",
    "revision": "ee4f7a946fd813ebc86af7fc551aaee9"
  },
  {
    "url": "interview/OLDREADME.html",
    "revision": "9541a5674918e90428d157d84ac3946a"
  },
  {
    "url": "interview/quote.html",
    "revision": "1f9100d3cb1e8d562005a291c03f6571"
  },
  {
    "url": "interview/react.html",
    "revision": "880fe5dca599c6a185a164aa78e1b3e5"
  },
  {
    "url": "interview/vue.html",
    "revision": "bdb6e99a0151cc322ebc029fd24e644e"
  },
  {
    "url": "interview/webpack.html",
    "revision": "c70eb6cea49d772e29be7319e65f40da"
  },
  {
    "url": "interview/小程序.html",
    "revision": "6ad2509ff3e90b7f63dde29bf4b9b5b7"
  },
  {
    "url": "sharing/index.html",
    "revision": "2da89eb6191bb90bec80523959a88e35"
  },
  {
    "url": "sharing/sharing-blog.html",
    "revision": "dc20c3e14ca6ca6315938405b008b1a9"
  },
  {
    "url": "sharing/software.html",
    "revision": "4bc9645d02934adb099e861f3de00520"
  },
  {
    "url": "sharing/utils-web.html",
    "revision": "8241b4b9fa26abfa7d2f6b0e852fb173"
  },
  {
    "url": "sharing/utils.html",
    "revision": "f05159cc9719e110946ead958f4bab68"
  },
  {
    "url": "test.png",
    "revision": "7576bc4c1260c05485c5adec94a0cc25"
  },
  {
    "url": "Todo.html",
    "revision": "c8cf889c2d46c8cc26d13d1d01fe63f1"
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
