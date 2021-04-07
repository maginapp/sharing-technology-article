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
    "revision": "bdcd0e5dd1d86d487e44058fd5e6696b"
  },
  {
    "url": "assets/css/0.styles.7a8123e4.css",
    "revision": "1e69115eef8cc396f442f813113e537d"
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
    "url": "assets/js/10.9b661b35.js",
    "revision": "70ff3c2649d72085bb1e398ec9cab401"
  },
  {
    "url": "assets/js/11.23c1a823.js",
    "revision": "899e6a1ed344d828b1497b645646785f"
  },
  {
    "url": "assets/js/12.414913cf.js",
    "revision": "55968de1e4f1ec2aedbedf596c38e081"
  },
  {
    "url": "assets/js/13.45e81514.js",
    "revision": "f08df51ef13eece06903d476720c0223"
  },
  {
    "url": "assets/js/14.7d58562f.js",
    "revision": "ccf2d889a79f56483d28ac11a6f00cec"
  },
  {
    "url": "assets/js/15.563966ba.js",
    "revision": "c56d5c0810ff395832aa95865ffbe6ae"
  },
  {
    "url": "assets/js/16.5afa2b8b.js",
    "revision": "9bc35dcc677cff1342acfcf181e330b4"
  },
  {
    "url": "assets/js/17.23838104.js",
    "revision": "741a6cd8d5a542ba7098882ae23187ad"
  },
  {
    "url": "assets/js/18.dc9bd7b3.js",
    "revision": "249e0912b9c4af76a6352758f9cd160c"
  },
  {
    "url": "assets/js/19.2b51b1de.js",
    "revision": "906c428351904ec893fbf7a0e8b8d330"
  },
  {
    "url": "assets/js/20.07d34360.js",
    "revision": "09d78973e1946a34b8c9c946964158f7"
  },
  {
    "url": "assets/js/21.18d58894.js",
    "revision": "3b895645e39a6496a36d129ae361debd"
  },
  {
    "url": "assets/js/22.764e75dd.js",
    "revision": "1d1e5f5d1ae8eab6ebd830bbc00c3b04"
  },
  {
    "url": "assets/js/23.b623e880.js",
    "revision": "735abe25d7d1025ca09fa4f7c7171fcf"
  },
  {
    "url": "assets/js/24.acfc999c.js",
    "revision": "734eafaceaa6bc26e5a6c7f730ee4b59"
  },
  {
    "url": "assets/js/25.e0f786c9.js",
    "revision": "eab18212517014e4b0c65095dd3d1b6c"
  },
  {
    "url": "assets/js/26.202eaa04.js",
    "revision": "3d7c09ea85d5b662c3fcbd03df1f139e"
  },
  {
    "url": "assets/js/27.4594365a.js",
    "revision": "cb62cf8f9b6ed722159ba6e8f158bf9c"
  },
  {
    "url": "assets/js/28.d068efd3.js",
    "revision": "3c71ed64006768453a636c4e305ebc2f"
  },
  {
    "url": "assets/js/29.544926f2.js",
    "revision": "626db0cac94ce980459c45e61ac15ed6"
  },
  {
    "url": "assets/js/3.86cb07ac.js",
    "revision": "bb1a301ccc1b3cafe9dd1cfb2e1f0403"
  },
  {
    "url": "assets/js/30.de2610b3.js",
    "revision": "e131c01ac058803abf4a1b132a780ee1"
  },
  {
    "url": "assets/js/31.4cfe0007.js",
    "revision": "db8ba490cb70496e5a0d0f127c9a3f03"
  },
  {
    "url": "assets/js/32.5b974377.js",
    "revision": "5499e42300ad96bf1a9292d4509b6a1e"
  },
  {
    "url": "assets/js/33.80abba45.js",
    "revision": "706da88ab2096d1ec2fa935d59266e11"
  },
  {
    "url": "assets/js/34.f4bc3617.js",
    "revision": "28864b4a677d0bee129d4dbe6c6707d8"
  },
  {
    "url": "assets/js/35.3abad453.js",
    "revision": "ddf87609a365c4e75a9520d0f75de1e8"
  },
  {
    "url": "assets/js/36.b5214e4d.js",
    "revision": "af7872af5bed6e0cac49484d389281b6"
  },
  {
    "url": "assets/js/37.80e50757.js",
    "revision": "d43b0e348155fce265ad96a67b772d11"
  },
  {
    "url": "assets/js/38.12d38775.js",
    "revision": "23d933965eba035a5857fc4bd9616126"
  },
  {
    "url": "assets/js/39.d1e2b23f.js",
    "revision": "b5ee7634a8951f29b4bbb251aa995c89"
  },
  {
    "url": "assets/js/4.40fb3784.js",
    "revision": "fc7654894b0f348efd0f50c5d16a6f81"
  },
  {
    "url": "assets/js/40.b4a231c4.js",
    "revision": "509f87d57fd1f804d7618cedd8685cc8"
  },
  {
    "url": "assets/js/41.776854aa.js",
    "revision": "d55e7e38ad895a8be21ce6b1d44917d9"
  },
  {
    "url": "assets/js/42.8df96bb0.js",
    "revision": "655e43dac063a8e1372e464ce7e63de6"
  },
  {
    "url": "assets/js/5.b3895a0b.js",
    "revision": "91e27bcba7d553f6cf944663d1428b6b"
  },
  {
    "url": "assets/js/6.05b04660.js",
    "revision": "63600d8c2cdbc484ae95f546cfe8ea1e"
  },
  {
    "url": "assets/js/7.f22923c7.js",
    "revision": "dcae685c004f543169c1eec739094d86"
  },
  {
    "url": "assets/js/8.6cd84d24.js",
    "revision": "325fb1e07cc9a77b72db8f22e512b774"
  },
  {
    "url": "assets/js/9.1b7e6f64.js",
    "revision": "00ab62a180ccdc1d66e5582f44e597dc"
  },
  {
    "url": "assets/js/app.2484006d.js",
    "revision": "58e39441fdc308ebb1fe6a490795814d"
  },
  {
    "url": "assets/js/vendors~flowchart.23bb9e8c.js",
    "revision": "1bd7e5c0055597f73ef1069425edb759"
  },
  {
    "url": "blog/about-config/vscode-multi-column.html",
    "revision": "c21e3058725a93388ce3777d7e426ff9"
  },
  {
    "url": "blog/about-config/vuepress-github-website.html",
    "revision": "34869d51a17ac19f5638fef3b994f682"
  },
  {
    "url": "blog/frontend-records/image-gif.html",
    "revision": "5492ca6e1db17a3cb35665852600f2c8"
  },
  {
    "url": "blog/frontend-records/image-sharp.html",
    "revision": "bea360f77817748b4dee7ce2450a674e"
  },
  {
    "url": "blog/html-test/hash-test.html",
    "revision": "eef1ce7f268ca4e89a8e7ffe1e5f7292"
  },
  {
    "url": "blog/html-test/just-test.html",
    "revision": "cf94cb83e207dbbe1e4a2d5ca4aa5bd5"
  },
  {
    "url": "blog/html-test/summary-test.html",
    "revision": "3479c095ee8314c5e8657dcf1d2c7697"
  },
  {
    "url": "blog/index.html",
    "revision": "afc42d36685fecea3fba0c118e13fa44"
  },
  {
    "url": "blog/node-server/koa-bodyParser-myself.html",
    "revision": "49ab5a57eb5d0ae61eaca7013dee768f"
  },
  {
    "url": "blog/node-server/koa-middleware.html",
    "revision": "0a031d26252cb601085b76caa7a5b259"
  },
  {
    "url": "blog/node-server/koa-mysql.html",
    "revision": "5122d4f211c5fd4b21d4beedbba200b8"
  },
  {
    "url": "blog/node-server/koa-router.html",
    "revision": "7ec824d25f5f03830f70d597bdf7b221"
  },
  {
    "url": "blog/node-server/koa-server-init.html",
    "revision": "fc692d8d6e346164c5d1343897c8c59d"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "83fd1ed502f432bf7b81758f54762294"
  },
  {
    "url": "blog/standard/index.html",
    "revision": "291c33cb43b346912574897a48262fa3"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "ce82a716df8566b9e6ff07ed2fb293db"
  },
  {
    "url": "blog/vue/promote-of-vue.html",
    "revision": "26e3c116ca798a34f24e381962f71af1"
  },
  {
    "url": "blog/vue/vue3-reactive.html",
    "revision": "d7b41a575fd969c0601c1574cb4a29ff"
  },
  {
    "url": "Goal.html",
    "revision": "bcdb21e1f3e9a056c5f3dd7beed1d14c"
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
    "revision": "d13d1a5e52f5d3d343832dd58c291e18"
  },
  {
    "url": "interview/css.html",
    "revision": "785af127ef422c4a9604de1dd4913732"
  },
  {
    "url": "interview/history.html",
    "revision": "6cddda517918eeab04933403b6bda480"
  },
  {
    "url": "interview/html.html",
    "revision": "cd914cd5170a4ee9dcb29395659d8f00"
  },
  {
    "url": "interview/index.html",
    "revision": "a016177473b1bc1fee81a06cd3c788da"
  },
  {
    "url": "interview/js.html",
    "revision": "7d93483dda4902ee55ad41e737938fc0"
  },
  {
    "url": "interview/nodejs.html",
    "revision": "934b5bea775b65362630d3f98c915301"
  },
  {
    "url": "interview/react.html",
    "revision": "ca980bb64b342c72bb786e559eaebc46"
  },
  {
    "url": "interview/vue.html",
    "revision": "88bd94cf42411278effc16e9cb722e8f"
  },
  {
    "url": "interview/webpack.html",
    "revision": "12324cccd9e864c3f71ccefde127e7ac"
  },
  {
    "url": "interview/小程序.html",
    "revision": "59e49a5dfa8321e8ff975cc0edba74c6"
  },
  {
    "url": "sharing/index.html",
    "revision": "b9d976599f10254e3c88b0ac77f00a01"
  },
  {
    "url": "test.png",
    "revision": "7576bc4c1260c05485c5adec94a0cc25"
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
