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
    "revision": "cd330186d97615f112923676023f4850"
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
    "url": "assets/js/10.e99a4892.js",
    "revision": "cc21d829d8f99d2134774433d4cb6f35"
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
    "url": "assets/js/14.ad437332.js",
    "revision": "46ac1d427974e2b4603325596a26cde3"
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
    "url": "assets/js/25.7577d64d.js",
    "revision": "314380a1f614c8f2181cb277972c77ca"
  },
  {
    "url": "assets/js/26.7b8da43a.js",
    "revision": "c5d20ba984141c4b1e95fc49bd250f2f"
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
    "url": "assets/js/36.0e17ccb5.js",
    "revision": "bbcf05ecf0e640896f85ac73a2b63594"
  },
  {
    "url": "assets/js/37.8cf94dbc.js",
    "revision": "c8ad0b372b4a355d46c1da493fd6b595"
  },
  {
    "url": "assets/js/38.fc3ce8a9.js",
    "revision": "4928e3dd9279c2efc32c1c9c2b6bcaf7"
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
    "url": "assets/js/40.a85efcfa.js",
    "revision": "2ac52f1eed42c6b47381dc55adaba9fa"
  },
  {
    "url": "assets/js/41.e9b2a402.js",
    "revision": "1cfb835dc37ffa2f4a1970762bc5c95e"
  },
  {
    "url": "assets/js/42.d5addfb1.js",
    "revision": "448802ed9cfc159668af66caf873750f"
  },
  {
    "url": "assets/js/43.4f273966.js",
    "revision": "24df78a7eef6e02fe96dca3475cc3b54"
  },
  {
    "url": "assets/js/44.9531caa5.js",
    "revision": "e87979ee3c239771333aa88a4e3b3803"
  },
  {
    "url": "assets/js/45.b540304f.js",
    "revision": "d52d0d71da8560b0afdb7c03a4a9bd4d"
  },
  {
    "url": "assets/js/46.1286e243.js",
    "revision": "13713df4fb22f1b723eb3e95d0abe5d7"
  },
  {
    "url": "assets/js/47.fa453bfb.js",
    "revision": "8cb0dff4b56ba1b8e8178a8c878260ab"
  },
  {
    "url": "assets/js/48.c827081c.js",
    "revision": "befa4e5f83d018957675ff527f3ab594"
  },
  {
    "url": "assets/js/49.9eb9be56.js",
    "revision": "fa15398d874974c639256de9dca49529"
  },
  {
    "url": "assets/js/5.64f53352.js",
    "revision": "4b0af09fd13efdb3647e6891e9a04854"
  },
  {
    "url": "assets/js/50.29046dbe.js",
    "revision": "ff19349cd17086ca788e2b2e364cbc3c"
  },
  {
    "url": "assets/js/51.48d9f50d.js",
    "revision": "846c02aca6df9dfa9b22c4bd4b3b007c"
  },
  {
    "url": "assets/js/52.2fbd7ed6.js",
    "revision": "884627aae13001c8a788f0859b6c639f"
  },
  {
    "url": "assets/js/53.cebda9cc.js",
    "revision": "d5b0220070fd0da26a7a2ee3bd949a17"
  },
  {
    "url": "assets/js/54.6d5917db.js",
    "revision": "69ab684bea44928b4179c5b35ce5a212"
  },
  {
    "url": "assets/js/55.410ad846.js",
    "revision": "5862abb50966b290ef9b59d77af1fe76"
  },
  {
    "url": "assets/js/56.7f2099d7.js",
    "revision": "d39232220cc2ff7b4d27809bdb83b7a0"
  },
  {
    "url": "assets/js/57.a43b1e16.js",
    "revision": "244a3644029089347e8f549d1c583a7f"
  },
  {
    "url": "assets/js/58.67a5d0a1.js",
    "revision": "a95060404e87fbb9ce7b19294005b282"
  },
  {
    "url": "assets/js/59.f33a8da9.js",
    "revision": "78185dc54b887a63d7123c3a4ccc22d0"
  },
  {
    "url": "assets/js/6.8e49f843.js",
    "revision": "51a0b5d89363a704aeb6dd7595def482"
  },
  {
    "url": "assets/js/60.9e926245.js",
    "revision": "d63d6b1faa3eb603945ab3dae49535ea"
  },
  {
    "url": "assets/js/61.c00f1556.js",
    "revision": "59aec1f6791a9ea69b84231128434af7"
  },
  {
    "url": "assets/js/62.0a767ee3.js",
    "revision": "84cee49233eefa1c0d301372360a359a"
  },
  {
    "url": "assets/js/63.1e7e0379.js",
    "revision": "29e80bad9c3c001b0b2c026f1df8fe85"
  },
  {
    "url": "assets/js/64.0865ab43.js",
    "revision": "7f0ade6c509a886f8429328f2fd88069"
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
    "url": "assets/js/9.c42e2e91.js",
    "revision": "dffb31c94c825244c27e9aa89b39011e"
  },
  {
    "url": "assets/js/app.fff1cf8b.js",
    "revision": "2884dbb0df7e0178a302894f2f808d8a"
  },
  {
    "url": "assets/js/vendors~flowchart.16e34617.js",
    "revision": "2bde1976bbf9e7e2f108bccb37f75be3"
  },
  {
    "url": "blog/about-config/vscode-multi-column.html",
    "revision": "6b7920583a6d5befc7f90e068d9a548c"
  },
  {
    "url": "blog/about-config/vuepress-flowchart.html",
    "revision": "80f42e7f92804bdc0321f90cddcc4b14"
  },
  {
    "url": "blog/about-config/vuepress-github-website.html",
    "revision": "8bd81340a512f5ebb30e30c207998fe4"
  },
  {
    "url": "blog/about-config/vuepress-plugin-introduce.html",
    "revision": "16d8808368340e3c2390b83673b4a5de"
  },
  {
    "url": "blog/frontend-records/css/sticky.html",
    "revision": "67080a9facc5a7b3d2ea4c9f22a28436"
  },
  {
    "url": "blog/frontend-records/ecmascript.html",
    "revision": "56089a6cded56b83dc0bc8acfa9c408b"
  },
  {
    "url": "blog/frontend-records/image-gif.html",
    "revision": "bd4db2c2dc571772efad46f4575887ca"
  },
  {
    "url": "blog/frontend-records/image-sharp.html",
    "revision": "2fbc42ec70d0395ff70f4c5d06c6ae53"
  },
  {
    "url": "blog/frontend-records/pwa-webpush.html",
    "revision": "c311c07b9e23f0efee259b0fc3562f0b"
  },
  {
    "url": "blog/frontend-records/special-css.html",
    "revision": "2defb1f18387883248bc817d938d3736"
  },
  {
    "url": "blog/html-test/hash-test.html",
    "revision": "c2e3206caf690475b759ebe98dd9315e"
  },
  {
    "url": "blog/html-test/just-test.html",
    "revision": "b234ffe526643d346ac122b9aba8dd04"
  },
  {
    "url": "blog/html-test/summary-test.html",
    "revision": "6a0c1d40be267a4eda9d0592d2b27ce9"
  },
  {
    "url": "blog/index.html",
    "revision": "2d5a69f450e21ecb12d1dc9e6455dcce"
  },
  {
    "url": "blog/node-server/koa-bodyParser-myself.html",
    "revision": "4ec59e1ac056ba250c70ebdb561846b1"
  },
  {
    "url": "blog/node-server/koa-middleware.html",
    "revision": "47d70a298e70a31f8f225db07ce8aee2"
  },
  {
    "url": "blog/node-server/koa-mysql.html",
    "revision": "92b466382a98e76ac1d8a6f54921b625"
  },
  {
    "url": "blog/node-server/koa-router.html",
    "revision": "03ccd3ffd187027c3870bb0732707a2e"
  },
  {
    "url": "blog/node-server/koa-server-init.html",
    "revision": "f3170ad8b4dd34662ce1eaa5cd139734"
  },
  {
    "url": "blog/node-server/node-crawler.html",
    "revision": "27d2f09e6230321e1294445f0db2ad5b"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "2cbebf39d5ae27f882e44834c5bdf1bc"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "46701d6e71c4e2e16607edc4764f43ca"
  },
  {
    "url": "blog/vue/promote-of-vue.html",
    "revision": "2103631957ca6a1c0d46e7203812aff0"
  },
  {
    "url": "blog/vue/vue3-diff.html",
    "revision": "d6297912b7ffc5867e948dc38aa904a7"
  },
  {
    "url": "blog/vue/vue3-effect-api.html",
    "revision": "4343de0ed52e454ea28a37ff5ef1bdba"
  },
  {
    "url": "blog/vue/vue3-introduce.html",
    "revision": "55075b370aa4bdeaf132c50c22c5621a"
  },
  {
    "url": "blog/vue/vue3-lifecycle.html",
    "revision": "4968331bbed7920774dfb4a91d722fa8"
  },
  {
    "url": "blog/vue/vue3-parse-doc.html",
    "revision": "d78ca54e7d191201be4af9bc10ed0e76"
  },
  {
    "url": "blog/vue/vue3-reactive.html",
    "revision": "04fc975fbc2a4b2734fef77b5b185036"
  },
  {
    "url": "blog/vue/vue3-render.html",
    "revision": "2ef7e134f73232231cecfebe639c3069"
  },
  {
    "url": "blog/vue/vue3-scheduler.html",
    "revision": "554745b18dda28a7bd6b5cce09023c60"
  },
  {
    "url": "blog/vue/vue3-vnode.html",
    "revision": "303a07c6a64bef6cd9fcff089dbab5e3"
  },
  {
    "url": "Goal.html",
    "revision": "7c533818a471073cfd9c92c402cbd70e"
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
    "revision": "bfb5abc7a06fe7ef3f8853d0d222f187"
  },
  {
    "url": "interview/css.html",
    "revision": "0c1ce9f10f94f7740bc27cf5bfd9d878"
  },
  {
    "url": "interview/history.html",
    "revision": "fc296d0a8d4e70b7085c6e485d60eba4"
  },
  {
    "url": "interview/html.html",
    "revision": "8f7d52736de72ceb05f06b19938cffd9"
  },
  {
    "url": "interview/index.html",
    "revision": "ded151f51b29f7a6fa69958ef19d57e6"
  },
  {
    "url": "interview/js.html",
    "revision": "42445c6ad7f8b39656a409a6b35d27a6"
  },
  {
    "url": "interview/nodejs.html",
    "revision": "820fc320f503d6d6795a988c3244cbcf"
  },
  {
    "url": "interview/OLDREADME.html",
    "revision": "eb7849344c183b593d268b231dd86739"
  },
  {
    "url": "interview/quote.html",
    "revision": "cc3914b7eff7bb0f942e73b176d2e6aa"
  },
  {
    "url": "interview/react.html",
    "revision": "61195b1f1d2c198cb737fdecad354246"
  },
  {
    "url": "interview/vue.html",
    "revision": "5f89bb887ff876d0aaf8a1957bdddfa2"
  },
  {
    "url": "interview/webpack.html",
    "revision": "08d1a7d2978314d39ec9b4e42a828b27"
  },
  {
    "url": "interview/小程序.html",
    "revision": "790ce5e0b8c99e198f9e95d32eae9dbc"
  },
  {
    "url": "sharing/index.html",
    "revision": "69bbe1dc5698193e39ed3a5fe58953c2"
  },
  {
    "url": "sharing/sharing-blog.html",
    "revision": "4b79b7778732d8899339e90bab4fe9c3"
  },
  {
    "url": "sharing/software.html",
    "revision": "c493efeeeefbc281a48c2ebf16ad9653"
  },
  {
    "url": "sharing/utils-web.html",
    "revision": "dd08fd27b6db2fb9ad49a257b23e57cd"
  },
  {
    "url": "sharing/utils.html",
    "revision": "5886bb37893e4f3bc83c3d29ce985ac6"
  },
  {
    "url": "test.png",
    "revision": "7576bc4c1260c05485c5adec94a0cc25"
  },
  {
    "url": "Todo.html",
    "revision": "e15528541ce9cf11e52d0d63d8c11081"
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
