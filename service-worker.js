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
    "revision": "eaaf1ea961b3d60a08dd2a1f757d1b14"
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
    "url": "assets/img/8.ed5e2a35.png",
    "revision": "ed5e2a35e70a4128f119d7dfc4df6fd8"
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
    "url": "assets/js/13.d5a9ee50.js",
    "revision": "e6ab0e3337d83503397135c71fcae62c"
  },
  {
    "url": "assets/js/14.c4abf1f4.js",
    "revision": "9d12f5722b5a6304867adcead24e10a6"
  },
  {
    "url": "assets/js/15.c5842989.js",
    "revision": "f6c7e8f499a5990b2c46afb54bc0dabe"
  },
  {
    "url": "assets/js/16.7d13d4d6.js",
    "revision": "0ccafe44c9ad0dc29ec77b27b14d16f2"
  },
  {
    "url": "assets/js/17.2d7c0efb.js",
    "revision": "a52db7f4d4c5b8aa7acbf07883099032"
  },
  {
    "url": "assets/js/18.84e5d3fc.js",
    "revision": "e2d0cabd7560e63a5a9ca0917037b97d"
  },
  {
    "url": "assets/js/19.07e2b6e3.js",
    "revision": "0262a5783f90bb1ca8da7298e3f45daa"
  },
  {
    "url": "assets/js/20.90f7d1db.js",
    "revision": "34a7e359ad31fa20d1820856f8ccec46"
  },
  {
    "url": "assets/js/21.7b88150b.js",
    "revision": "e387e217777b43747dce11d79340a792"
  },
  {
    "url": "assets/js/22.37172db3.js",
    "revision": "45a01463464161bc4ff4f35c5214dd77"
  },
  {
    "url": "assets/js/23.0a68234c.js",
    "revision": "3a9bca2aa90c06daf83fc1014122c280"
  },
  {
    "url": "assets/js/24.4fa1edb9.js",
    "revision": "35b738419d3a765f061889c049c22d50"
  },
  {
    "url": "assets/js/25.aedda81d.js",
    "revision": "41e9f7d8ef8503a97bb9865cada06e4e"
  },
  {
    "url": "assets/js/26.5e4be583.js",
    "revision": "83572f051940f18a56f96cd7807ed33f"
  },
  {
    "url": "assets/js/27.f3bd771f.js",
    "revision": "951b4e90020396dd443bae0d80e748b4"
  },
  {
    "url": "assets/js/28.d0bd336d.js",
    "revision": "f0b3510a0bd326f155d53ef8a382b98b"
  },
  {
    "url": "assets/js/29.a17e85d4.js",
    "revision": "28d97aaa3a1fb0e4aae6195271136d5b"
  },
  {
    "url": "assets/js/3.86cb07ac.js",
    "revision": "bb1a301ccc1b3cafe9dd1cfb2e1f0403"
  },
  {
    "url": "assets/js/30.9eaac61e.js",
    "revision": "2157c5ee25112f6ce87a8b19d5d7b398"
  },
  {
    "url": "assets/js/31.f62c4440.js",
    "revision": "f3e4b7ec3f5bf54cbbeed9fd160336e7"
  },
  {
    "url": "assets/js/32.2ad61ee2.js",
    "revision": "dd6dd5dfcfc4cd61abe7d4cd4aa08926"
  },
  {
    "url": "assets/js/33.6d168459.js",
    "revision": "2da8e3b281c98b0f380ff96418b02fcb"
  },
  {
    "url": "assets/js/34.d2dda4c8.js",
    "revision": "05c477ab3d50162118b8e3ab760e11b4"
  },
  {
    "url": "assets/js/35.7afd5d04.js",
    "revision": "1c4a250cfc2b77ec489f851c0fbaeb17"
  },
  {
    "url": "assets/js/36.df936034.js",
    "revision": "11198292facc1df617a9238b93b070bc"
  },
  {
    "url": "assets/js/37.55b57a87.js",
    "revision": "219be2226a91402cad22012731a56d23"
  },
  {
    "url": "assets/js/38.64ade9b6.js",
    "revision": "b5883183a3fdd5f400d5e67cb6f44eec"
  },
  {
    "url": "assets/js/4.40fb3784.js",
    "revision": "fc7654894b0f348efd0f50c5d16a6f81"
  },
  {
    "url": "assets/js/5.eca082e6.js",
    "revision": "b837dbc3c832ae6f2db0a98eab0971a1"
  },
  {
    "url": "assets/js/6.05b04660.js",
    "revision": "63600d8c2cdbc484ae95f546cfe8ea1e"
  },
  {
    "url": "assets/js/7.09048055.js",
    "revision": "aca68da459906fcabc233a2b1dc974f5"
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
    "url": "assets/js/app.a877aacd.js",
    "revision": "a047c17d9019ef417a5f49d1c48f3935"
  },
  {
    "url": "assets/js/vendors~flowchart.23bb9e8c.js",
    "revision": "1bd7e5c0055597f73ef1069425edb759"
  },
  {
    "url": "blog/about-config/vuepress-github-website.html",
    "revision": "646643536c6f2cbc90e0d0313443e864"
  },
  {
    "url": "blog/frontend-records/promote-of-vue.html",
    "revision": "b3c1b7d70b2f7623150cf884718c66fc"
  },
  {
    "url": "blog/html-test/hash-test.html",
    "revision": "1adbabd05582a312865448dd9aa9d208"
  },
  {
    "url": "blog/html-test/just-test.html",
    "revision": "8cff45154fe9768311ba7a95813973a0"
  },
  {
    "url": "blog/html-test/summary-test.html",
    "revision": "ec914f5dda6557046226eea7d6f89887"
  },
  {
    "url": "blog/index.html",
    "revision": "b9e9b250a20f4c5903f351e3dbd32984"
  },
  {
    "url": "blog/node-server/koa-bodyParser-myself.html",
    "revision": "42e0d953f9eebf0d0ce7a135391992cc"
  },
  {
    "url": "blog/node-server/koa-middleware.html",
    "revision": "24b5437d07849e0e800c981c4287a4fa"
  },
  {
    "url": "blog/node-server/koa-mysql.html",
    "revision": "c7bbda6b49a2a5f6e3fd3ffd9a15c102"
  },
  {
    "url": "blog/node-server/koa-router.html",
    "revision": "aa7d0cdc0e08577c4889c871f607e1e4"
  },
  {
    "url": "blog/node-server/koa-server-init.html",
    "revision": "ade27c0992f90ed56b8f86ef93ca89f0"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "bcad3796b842c721b08c683ca37d021b"
  },
  {
    "url": "blog/standard/index.html",
    "revision": "ae16a36f3e24c003a980d2f5979a24bf"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "b3f42a19338642e82ad7ed1c532ab29e"
  },
  {
    "url": "Goal.html",
    "revision": "2c6fdcff825439e897baa34a8527eded"
  },
  {
    "url": "icons/icon-128.png",
    "revision": "60dc4ef5d41be3b933e2a3295bc36ae1"
  },
  {
    "url": "icons/icon-168.png",
    "revision": "54c9a36fc625b1ad923b110c53104b79"
  },
  {
    "url": "icons/icon-192.png",
    "revision": "1f8a3109423033b5d4b7232431727d66"
  },
  {
    "url": "icons/icon-256.png",
    "revision": "dd825a2d5059678bb9266bc72f316897"
  },
  {
    "url": "icons/icon-32.png",
    "revision": "985d2fabe7e2112394e8445a21a4a6b8"
  },
  {
    "url": "icons/icon-48.png",
    "revision": "8d6e3aebff1253ddc836dbb539f4eef6"
  },
  {
    "url": "icons/icon-512.png",
    "revision": "33acbcb5d294373aca1103102023dac6"
  },
  {
    "url": "icons/icon-96.png",
    "revision": "46ad632920a505c2f9b9e9fd01d9cc26"
  },
  {
    "url": "index.html",
    "revision": "ebb3e678f5d84515a11dd7da8c2e8d77"
  },
  {
    "url": "interview/css.html",
    "revision": "2a279ae3d2ce5121e45816b2294a2629"
  },
  {
    "url": "interview/history.html",
    "revision": "0103730bb8501b8c061f3d56946934bd"
  },
  {
    "url": "interview/html.html",
    "revision": "a9070026ecee6e8806144a6c0729830b"
  },
  {
    "url": "interview/index.html",
    "revision": "38d9220c67ab4f80981c24161b45fca0"
  },
  {
    "url": "interview/js.html",
    "revision": "3a76c7543d4bf1f70dd218abad3c36e2"
  },
  {
    "url": "interview/nodejs.html",
    "revision": "034b88219d1def40f66ff86044ad00a6"
  },
  {
    "url": "interview/react.html",
    "revision": "e06fc4c88a5a5f76c7ef1715963147f6"
  },
  {
    "url": "interview/vue.html",
    "revision": "488164e8a8a57d35b5242e294109ae7b"
  },
  {
    "url": "interview/webpack.html",
    "revision": "bb668569a16954b7d91983939502dd97"
  },
  {
    "url": "interview/小程序.html",
    "revision": "b623b6c7b631e74acbe5fbd71440020f"
  },
  {
    "url": "sharing/index.html",
    "revision": "2e273b499f990b6825dbf007b1c42d12"
  },
  {
    "url": "test.png",
    "revision": "2f55c265bb23eccc4a02f4c20b1f0ebe"
  },
  {
    "url": "webstatic/0.png",
    "revision": "2f55c265bb23eccc4a02f4c20b1f0ebe"
  },
  {
    "url": "webstatic/1.png",
    "revision": "2f55c265bb23eccc4a02f4c20b1f0ebe"
  },
  {
    "url": "webstatic/2.png",
    "revision": "2f55c265bb23eccc4a02f4c20b1f0ebe"
  },
  {
    "url": "webstatic/2020-05-01-token-get.png",
    "revision": "ed5e2a35e70a4128f119d7dfc4df6fd8"
  },
  {
    "url": "webstatic/3.png",
    "revision": "2f55c265bb23eccc4a02f4c20b1f0ebe"
  },
  {
    "url": "webstatic/4.png",
    "revision": "2f55c265bb23eccc4a02f4c20b1f0ebe"
  },
  {
    "url": "webstatic/5.png",
    "revision": "2f55c265bb23eccc4a02f4c20b1f0ebe"
  },
  {
    "url": "webstatic/6.png",
    "revision": "2f55c265bb23eccc4a02f4c20b1f0ebe"
  },
  {
    "url": "webstatic/8.png",
    "revision": "ed5e2a35e70a4128f119d7dfc4df6fd8"
  },
  {
    "url": "webstatic/9.png",
    "revision": "ed5e2a35e70a4128f119d7dfc4df6fd8"
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
