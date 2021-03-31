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
    "revision": "e58c5136cb24570b37ff55a970784786"
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
    "url": "assets/js/13.1b1d1bfc.js",
    "revision": "ed3e082176799d2026dd8870a3de602d"
  },
  {
    "url": "assets/js/14.f39f6ae2.js",
    "revision": "031197c27d447db3b7e684ca1ac3e80b"
  },
  {
    "url": "assets/js/15.2b394002.js",
    "revision": "1c7fc8b2bb85ed2c1c5b531ed90307dc"
  },
  {
    "url": "assets/js/16.935e34f7.js",
    "revision": "10a9656d5e6bec459ed68f6fbe0aa653"
  },
  {
    "url": "assets/js/17.af76a2a2.js",
    "revision": "319524011d929aa3155845a398b108f8"
  },
  {
    "url": "assets/js/18.66c35f15.js",
    "revision": "ffd7b58ddf29aac909dfb4a9bf6bcdec"
  },
  {
    "url": "assets/js/19.be2b7f7d.js",
    "revision": "6520a57a677ffab8c4abd6f5c188d7ac"
  },
  {
    "url": "assets/js/20.843e0b21.js",
    "revision": "ac5873e04f78ddfdd29acf04d1df7f80"
  },
  {
    "url": "assets/js/21.7aff5562.js",
    "revision": "bb59c0c6811b80641b45d20ebfc254e1"
  },
  {
    "url": "assets/js/22.72e0486f.js",
    "revision": "e7762d4788e762363904047b09cd87ea"
  },
  {
    "url": "assets/js/23.a26d9375.js",
    "revision": "b7a799ee627aff4125d5c8f1d79f9c42"
  },
  {
    "url": "assets/js/24.abb0cfd7.js",
    "revision": "75377a38a16e1cd51d7fdbc26ba20bd4"
  },
  {
    "url": "assets/js/25.ad6690f7.js",
    "revision": "0938e42f76c33b50eee7a0d34f526a4c"
  },
  {
    "url": "assets/js/26.105ee6b2.js",
    "revision": "f20b95758c975cb6b8a5683395e8453e"
  },
  {
    "url": "assets/js/27.4a10ed0c.js",
    "revision": "ec65cec9fdc2d9d6f0e02de0638e0512"
  },
  {
    "url": "assets/js/28.4479235c.js",
    "revision": "9a6e74903ab61c7170ae99307e1c88a0"
  },
  {
    "url": "assets/js/29.042231e3.js",
    "revision": "41656cfd702485f16ab557c174802826"
  },
  {
    "url": "assets/js/3.86cb07ac.js",
    "revision": "bb1a301ccc1b3cafe9dd1cfb2e1f0403"
  },
  {
    "url": "assets/js/30.36ebf13b.js",
    "revision": "190ad78c9c5b8706960331dc727a9bd2"
  },
  {
    "url": "assets/js/31.df5b460a.js",
    "revision": "c7ab7e71fae058b896487630428c8f99"
  },
  {
    "url": "assets/js/32.8dcee685.js",
    "revision": "80a0b25fd9f9db3b7f1971c4594c693e"
  },
  {
    "url": "assets/js/33.e96bf754.js",
    "revision": "b1f5482bd08cca0eb7ab79a0dd21df16"
  },
  {
    "url": "assets/js/34.5d9bb200.js",
    "revision": "cc319242a3ca648e635a2ad8dad42124"
  },
  {
    "url": "assets/js/35.81db40ef.js",
    "revision": "2b7464e9da44ebc3af325e28c9c5a976"
  },
  {
    "url": "assets/js/36.4251296e.js",
    "revision": "4155566fe47bfdf711e831dacbff5146"
  },
  {
    "url": "assets/js/37.71a2f7f2.js",
    "revision": "97c5219031a6f1cce484efbc4004da0c"
  },
  {
    "url": "assets/js/38.77fac89f.js",
    "revision": "aab515bc623ef69352458c1af757981e"
  },
  {
    "url": "assets/js/39.e98e955e.js",
    "revision": "83ed3f3dc825bf5b88881d62cd0352c2"
  },
  {
    "url": "assets/js/4.40fb3784.js",
    "revision": "fc7654894b0f348efd0f50c5d16a6f81"
  },
  {
    "url": "assets/js/40.30278188.js",
    "revision": "4a0a355687f5d632d4f5d5ba4c3c4a8a"
  },
  {
    "url": "assets/js/5.bcc30d31.js",
    "revision": "e1943bd0872945b5bd572a5d12279c01"
  },
  {
    "url": "assets/js/6.05b04660.js",
    "revision": "63600d8c2cdbc484ae95f546cfe8ea1e"
  },
  {
    "url": "assets/js/7.e42dbd59.js",
    "revision": "033d5209446cb3295195b89ec3759a12"
  },
  {
    "url": "assets/js/8.6cd84d24.js",
    "revision": "325fb1e07cc9a77b72db8f22e512b774"
  },
  {
    "url": "assets/js/9.1a690cdf.js",
    "revision": "029f5733283fea09acf425d1738f832d"
  },
  {
    "url": "assets/js/app.40f58a56.js",
    "revision": "87eef38646cdbdeb75b47adda1b47b09"
  },
  {
    "url": "assets/js/vendors~flowchart.23bb9e8c.js",
    "revision": "1bd7e5c0055597f73ef1069425edb759"
  },
  {
    "url": "blog/about-config/vuepress-github-website.html",
    "revision": "1b721b356821209d7dd8465ca0e11a44"
  },
  {
    "url": "blog/frontend-records/image-gif.html",
    "revision": "40b2fc1261343a6df5dd625df4732a7e"
  },
  {
    "url": "blog/frontend-records/image-sharp.html",
    "revision": "a97a3d838829ca19bf8702bf0d5f770d"
  },
  {
    "url": "blog/html-test/hash-test.html",
    "revision": "2711f90e22d0a4ce9d62537be6c55862"
  },
  {
    "url": "blog/html-test/just-test.html",
    "revision": "40298112547c3da256d6598425bc9c85"
  },
  {
    "url": "blog/html-test/summary-test.html",
    "revision": "deb24d14d363a0518c82c8690a28e029"
  },
  {
    "url": "blog/index.html",
    "revision": "dcb40e815e1a6678495b812be40f919c"
  },
  {
    "url": "blog/node-server/koa-bodyParser-myself.html",
    "revision": "123a99885408cd518991495485d701d3"
  },
  {
    "url": "blog/node-server/koa-middleware.html",
    "revision": "9801ef6dd503dabf21a0b587a2f4da3f"
  },
  {
    "url": "blog/node-server/koa-mysql.html",
    "revision": "3337ece6e49effb161d3cb8553ee6dd8"
  },
  {
    "url": "blog/node-server/koa-router.html",
    "revision": "8c9920b84a91b03d6ff460e65dce8d99"
  },
  {
    "url": "blog/node-server/koa-server-init.html",
    "revision": "17aef1748ef3f30ab330d45022558305"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "42d75e45d7ddb879d6b5c86254ad03db"
  },
  {
    "url": "blog/standard/index.html",
    "revision": "86922959d41628f6448248868f7ee919"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "60260e1ced7e4ab5a7b7ed59adc9f723"
  },
  {
    "url": "blog/vue/promote-of-vue.html",
    "revision": "2958f0dffc0f4560e996eac60e75ac82"
  },
  {
    "url": "Goal.html",
    "revision": "ea61cb8403dab0f7a0890418bd606200"
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
    "revision": "997ec1df5fd1f628a0fdb9a8cffeadf4"
  },
  {
    "url": "interview/css.html",
    "revision": "e85d245eac3ffef72d7e61f5e1d4566b"
  },
  {
    "url": "interview/history.html",
    "revision": "304d9509dee9a59a671eacfa89c42ed5"
  },
  {
    "url": "interview/html.html",
    "revision": "3f7e2c87531876dca89f298cd60df945"
  },
  {
    "url": "interview/index.html",
    "revision": "1d8a8710e719f2aea4033e8a0a467089"
  },
  {
    "url": "interview/js.html",
    "revision": "10825c8bc86c55acfe3e07f9a8b17b78"
  },
  {
    "url": "interview/nodejs.html",
    "revision": "b58d8a7e72412827986cd5803090912b"
  },
  {
    "url": "interview/react.html",
    "revision": "a871bf6e0e2a58cc4ae6e1308db1efee"
  },
  {
    "url": "interview/vue.html",
    "revision": "73d6317786bc94b059ff557e04d8a7db"
  },
  {
    "url": "interview/webpack.html",
    "revision": "71d79550798fb8199eb4cd235028248e"
  },
  {
    "url": "interview/小程序.html",
    "revision": "2dcac8877d21a5b5d7ba4380adcd5364"
  },
  {
    "url": "sharing/index.html",
    "revision": "6e6c76b96192f0c95f384797c35f8e20"
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
