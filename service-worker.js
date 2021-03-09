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
    "revision": "375377466fa1c19858ddac49c1f1b3e0"
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
    "url": "assets/js/11.6d0e5646.js",
    "revision": "e5687bdba88981a25d417cb417c62cd2"
  },
  {
    "url": "assets/js/12.d9ea65f4.js",
    "revision": "7958781c98b4cf6b0df76b6b9641d30f"
  },
  {
    "url": "assets/js/13.0c688c6c.js",
    "revision": "9872adc6f4c8791a0d763a34e5ec32c7"
  },
  {
    "url": "assets/js/14.cad213c3.js",
    "revision": "d01b9d62ef5289eb370494e91d4b9f2b"
  },
  {
    "url": "assets/js/15.c23dd035.js",
    "revision": "5d30247668439d9e220132964b52ad70"
  },
  {
    "url": "assets/js/16.d2acae43.js",
    "revision": "020ceca7cfddd52bf481add4c67c2854"
  },
  {
    "url": "assets/js/17.61d0ba36.js",
    "revision": "bb53a77dffd7f65ff1e1de891423d3dc"
  },
  {
    "url": "assets/js/18.34ac6d9d.js",
    "revision": "aeecebbd4fc3dd24ed0c5328119a6a38"
  },
  {
    "url": "assets/js/19.9b85b25e.js",
    "revision": "fb1768e0e68572c44b31ac6e6bacb8a5"
  },
  {
    "url": "assets/js/20.cff08131.js",
    "revision": "c8c8398fdc92b53a0e90dc394d41b286"
  },
  {
    "url": "assets/js/21.da735360.js",
    "revision": "327c097678b512f46cc237891437ef3f"
  },
  {
    "url": "assets/js/22.646bdec3.js",
    "revision": "1567741780acae2709f989920f2a2747"
  },
  {
    "url": "assets/js/23.17225c1c.js",
    "revision": "0bfbde083399925ed5f47b3ae8da284b"
  },
  {
    "url": "assets/js/24.3af7461f.js",
    "revision": "236168783e4afe9773817adda0a810e7"
  },
  {
    "url": "assets/js/25.32e0fdb5.js",
    "revision": "289f711f6553e8197d0ca268de824137"
  },
  {
    "url": "assets/js/26.78f27ff2.js",
    "revision": "24b2ee01433cd5f627d742717480dd7c"
  },
  {
    "url": "assets/js/27.99f79c61.js",
    "revision": "c3a64fe48a1004c13e15b9a0c0aeae80"
  },
  {
    "url": "assets/js/28.639053b6.js",
    "revision": "a8f74de528313006f00fd0dba2ae20e8"
  },
  {
    "url": "assets/js/29.746e1577.js",
    "revision": "3a413c8c3f609c55e703e4ae28f86ba1"
  },
  {
    "url": "assets/js/3.86cb07ac.js",
    "revision": "bb1a301ccc1b3cafe9dd1cfb2e1f0403"
  },
  {
    "url": "assets/js/30.9c044403.js",
    "revision": "4b4bab0e11624fe8dce5b4cdc8eee9cd"
  },
  {
    "url": "assets/js/31.0817cb95.js",
    "revision": "f032176903613a4602ef1b137fba605b"
  },
  {
    "url": "assets/js/32.97e92a16.js",
    "revision": "53234ca809cd495a0dc31ef8a9cee28d"
  },
  {
    "url": "assets/js/33.cd87757b.js",
    "revision": "c905adf2d4575c033641f70efd84a079"
  },
  {
    "url": "assets/js/34.a27b1c00.js",
    "revision": "27a2752afbeb38a9d0e2d2e5d28b748b"
  },
  {
    "url": "assets/js/35.9e615907.js",
    "revision": "86c73a8f86d33c61fb9de3a82583b552"
  },
  {
    "url": "assets/js/36.226c90ae.js",
    "revision": "ffc0ab5292e8402c51ec9c48c5c6b68f"
  },
  {
    "url": "assets/js/37.736ae994.js",
    "revision": "98fe10cceba1c3d7c013f915244dace1"
  },
  {
    "url": "assets/js/4.40fb3784.js",
    "revision": "fc7654894b0f348efd0f50c5d16a6f81"
  },
  {
    "url": "assets/js/5.0b8efb7a.js",
    "revision": "7d6bf568513d2d1c44c026690bb53206"
  },
  {
    "url": "assets/js/6.05b04660.js",
    "revision": "63600d8c2cdbc484ae95f546cfe8ea1e"
  },
  {
    "url": "assets/js/7.993bdcbc.js",
    "revision": "264d8af56442d2a07857cf3c83011d81"
  },
  {
    "url": "assets/js/8.d9b55037.js",
    "revision": "72a85677980ca6c96bb9c1141e9dc981"
  },
  {
    "url": "assets/js/9.1a690cdf.js",
    "revision": "029f5733283fea09acf425d1738f832d"
  },
  {
    "url": "assets/js/app.80193795.js",
    "revision": "4c440d4c6527f5698fa00f5cb8a38ce7"
  },
  {
    "url": "assets/js/vendors~flowchart.23bb9e8c.js",
    "revision": "1bd7e5c0055597f73ef1069425edb759"
  },
  {
    "url": "audition/css.html",
    "revision": "186445457944e5e9d87322e7ff483802"
  },
  {
    "url": "audition/history.html",
    "revision": "10da9587bb63f10d053644d9486f70db"
  },
  {
    "url": "audition/html.html",
    "revision": "299bbd5c5a93f4e1b1f3012d466f4928"
  },
  {
    "url": "audition/index.html",
    "revision": "49ed91df0bd631523f3820f68f9a8ca6"
  },
  {
    "url": "audition/js.html",
    "revision": "1f4ea4d485d28cdbb3c13ef7f7376972"
  },
  {
    "url": "audition/nodejs.html",
    "revision": "3660b57dfdbc106b12ec05b12c58254f"
  },
  {
    "url": "audition/react.html",
    "revision": "323a812abe569055e62ff3baaf4e2171"
  },
  {
    "url": "audition/vue.html",
    "revision": "cb8b2aea2380ad0bba60f239b8ce4e8f"
  },
  {
    "url": "audition/webpack.html",
    "revision": "d2b152e7276db4c3e44e286e550954ac"
  },
  {
    "url": "audition/小程序.html",
    "revision": "20b4db27e4e1ee4a7dd5d8216d2a1a6d"
  },
  {
    "url": "blog/about-config/vuepress-github-website.html",
    "revision": "c24abed9825ac1c2583540fd4cefe78a"
  },
  {
    "url": "blog/html-test/hash-test.html",
    "revision": "e743be8368eaa800116b4ccf37344663"
  },
  {
    "url": "blog/html-test/just-test.html",
    "revision": "18eb44d6a6c92b70ea960bffe4161fff"
  },
  {
    "url": "blog/html-test/summary-test.html",
    "revision": "856884511103175086de631a8b0fa0f2"
  },
  {
    "url": "blog/index.html",
    "revision": "672c6ee24526de32e7ec99cc13110089"
  },
  {
    "url": "blog/node-server/koa-bodyParser-myself.html",
    "revision": "aaf99b474c4d14d17449b24340b88266"
  },
  {
    "url": "blog/node-server/koa-middleware.html",
    "revision": "b1c7da575beff77034c1c4fbb6ca6281"
  },
  {
    "url": "blog/node-server/koa-mysql.html",
    "revision": "5259a8cd4173510450f150133f81863f"
  },
  {
    "url": "blog/node-server/koa-router.html",
    "revision": "894d7b4243d5fc0d6f14dcb9822722be"
  },
  {
    "url": "blog/node-server/koa-server-init.html",
    "revision": "2bb949465b9c47c6d04b70dd62a9ae2f"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "755fa37ceb30f6cb1cdc9666c8020ca2"
  },
  {
    "url": "blog/standard/index.html",
    "revision": "d72121d3f308830c7042b0a1c9d8bd9b"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "3e5516b5fa3655581bf2c56bd17e82f3"
  },
  {
    "url": "Goal.html",
    "revision": "cdb0f8b605c385cdf81815b9c336b546"
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
    "revision": "ae8e007775114962ba57fe1e13eebeb5"
  },
  {
    "url": "sharing/index.html",
    "revision": "9ac92706489ed7ce0488964b96942dbd"
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
