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
    "revision": "f5281fbac6af2e48760204eac498c1b6"
  },
  {
    "url": "assets/css/0.styles.1537403c.css",
    "revision": "0a4ec255babcad238ae087e751de0729"
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
    "url": "assets/js/10.83aee950.js",
    "revision": "92ae9b8714649943089ea2e3fa3a7ae5"
  },
  {
    "url": "assets/js/11.c10b7e6d.js",
    "revision": "d5a71d4bf2fc35c3f3e8aed2f490ce15"
  },
  {
    "url": "assets/js/12.3df90c1d.js",
    "revision": "e39513d1a9574dd7468ec379fff53778"
  },
  {
    "url": "assets/js/13.adfb0fc8.js",
    "revision": "5930103b32c7ad1dbefe9cbd1df9085c"
  },
  {
    "url": "assets/js/14.5131e591.js",
    "revision": "6fbe8a744b86ff643721da64828ba407"
  },
  {
    "url": "assets/js/15.705a91e1.js",
    "revision": "b6dab0942be49a66fb5897edd6c69a17"
  },
  {
    "url": "assets/js/16.80d0d494.js",
    "revision": "e08c56156af74f798cba754323276653"
  },
  {
    "url": "assets/js/17.32cf6080.js",
    "revision": "b2bd256eb34a8efc01e39cb1ab267c74"
  },
  {
    "url": "assets/js/18.d12af604.js",
    "revision": "8cad875302f8275534417d98e87c279c"
  },
  {
    "url": "assets/js/19.096783bd.js",
    "revision": "0f135d1a946117a527a5a3da6536439e"
  },
  {
    "url": "assets/js/20.2c6a54da.js",
    "revision": "4f27bcb2b72cecabe1d9cf7e6e44a4fb"
  },
  {
    "url": "assets/js/21.a7c111d6.js",
    "revision": "2d2aaa5c7bb6eea70739d9dd3e8671a9"
  },
  {
    "url": "assets/js/22.a7244f92.js",
    "revision": "5613de14853dbb9ef19fc5f115c31b40"
  },
  {
    "url": "assets/js/23.6025d11f.js",
    "revision": "f3fee03fbceff746c44daff1187edbca"
  },
  {
    "url": "assets/js/24.16c96a66.js",
    "revision": "973cd767beaac89624596a70f986012f"
  },
  {
    "url": "assets/js/25.c05a5999.js",
    "revision": "1a2ca0fe32e669f1313c20426bb936c2"
  },
  {
    "url": "assets/js/26.0fd0ef85.js",
    "revision": "bcf3f982e074c06a8ee68e7eef2b2f2b"
  },
  {
    "url": "assets/js/27.7ed91227.js",
    "revision": "56e4547fb9b5eb5b4a8a31cbc4792079"
  },
  {
    "url": "assets/js/28.8cb09ce3.js",
    "revision": "2a849d382d7305261cb90f8d8a68f875"
  },
  {
    "url": "assets/js/29.b4c75bcc.js",
    "revision": "c0b9b9b13794016e511517d628581a9b"
  },
  {
    "url": "assets/js/3.9cf359ee.js",
    "revision": "f9e5bec46d4a61fafafd9cb2a3a99ed7"
  },
  {
    "url": "assets/js/30.e2c67d68.js",
    "revision": "c39814e923e045e510ba63d155e2e0d4"
  },
  {
    "url": "assets/js/31.950d83af.js",
    "revision": "1b3986113f41e6dc81ed92400db641c2"
  },
  {
    "url": "assets/js/4.7b0205e1.js",
    "revision": "c32d4d6f8466e4c520fd7142c94ba8c2"
  },
  {
    "url": "assets/js/5.8daa2233.js",
    "revision": "86630f60ff1080f286b67b99d1ec3643"
  },
  {
    "url": "assets/js/6.4ca6e814.js",
    "revision": "9a4beb1e71bf497ed8fed3eb6174c832"
  },
  {
    "url": "assets/js/7.2a5e53f9.js",
    "revision": "f92346b8f98ae6eca2944016af3e4406"
  },
  {
    "url": "assets/js/8.1881f848.js",
    "revision": "dd28877530cbef8317b4128c554a824d"
  },
  {
    "url": "assets/js/9.ed24d9cd.js",
    "revision": "7b437649a8d691043fd56d8014ec0893"
  },
  {
    "url": "assets/js/app.1a750951.js",
    "revision": "492335a0161e1f4136faa638d482b9d4"
  },
  {
    "url": "assets/js/vendors~flowchart.e58742bd.js",
    "revision": "342d2fc2a8894e32e369afcd7696e5a4"
  },
  {
    "url": "audition/css.html",
    "revision": "403f3918ee51f7ca21ca21700d62c083"
  },
  {
    "url": "audition/history.html",
    "revision": "d5e458693d5a9008dd8593562869aafd"
  },
  {
    "url": "audition/html.html",
    "revision": "42aafb028bd76c931ef1d55e5de2682d"
  },
  {
    "url": "audition/index.html",
    "revision": "5bb125dc1c13c255735b546cc017470c"
  },
  {
    "url": "audition/js.html",
    "revision": "e033a56d4b131d2305373a383dab89d1"
  },
  {
    "url": "audition/nodejs.html",
    "revision": "29e18c64d192a83a4f29464c4c2f6bc5"
  },
  {
    "url": "audition/react.html",
    "revision": "8541ba5ffaf59ca93a9ab35f3d8dc427"
  },
  {
    "url": "audition/vue.html",
    "revision": "7d43702f9cf859cc7b14ce2ebd97c1ed"
  },
  {
    "url": "audition/webpack.html",
    "revision": "b686817240259b3e444550a58cc2ac17"
  },
  {
    "url": "audition/小程序.html",
    "revision": "3166e8e3bda0137f23e92a4ac431fcf5"
  },
  {
    "url": "blog/about-config/vuepress-github-website.html",
    "revision": "368489bddd567f73840dea08325c3654"
  },
  {
    "url": "blog/html-test/hash-test.html",
    "revision": "c2b6a89c3dd94ae2cddd560a40e9af2a"
  },
  {
    "url": "blog/html-test/summary-test.html",
    "revision": "846947d3db2e2299f0fa29c59fc52b3f"
  },
  {
    "url": "blog/index.html",
    "revision": "89c25c61cd3500d6ac2e72f156e80742"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "d9daf61b26f4f99b148a3dc864f38b1f"
  },
  {
    "url": "blog/standard/index.html",
    "revision": "f732bb95d4d3b05686e91239d2b629e5"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "ca529335da28e617c8258407675a0c59"
  },
  {
    "url": "Goal.html",
    "revision": "d159526b8cc8faed5e9c83df5c5cc0d9"
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
    "revision": "8de607e94aa34b84f9932a95c50a6932"
  },
  {
    "url": "sharing/index.html",
    "revision": "83639cb1acb4b77a3bc54aca8169ef2e"
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
