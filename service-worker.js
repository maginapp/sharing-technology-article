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
    "revision": "ce1621d41353aa1ee5e0a6c87b16df02"
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
    "url": "assets/js/11.e336e2cb.js",
    "revision": "a13747e7ef52f69a548f6cc1cb6aa6e0"
  },
  {
    "url": "assets/js/12.414913cf.js",
    "revision": "55968de1e4f1ec2aedbedf596c38e081"
  },
  {
    "url": "assets/js/13.ff314252.js",
    "revision": "29b1345e44bbc67249cabc4aeb09249f"
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
    "url": "assets/js/16.0d0ed509.js",
    "revision": "b4e3c30b770a5cb680a5936518bb269b"
  },
  {
    "url": "assets/js/17.aacaad44.js",
    "revision": "e25a54554202969be7c7246249ef61c2"
  },
  {
    "url": "assets/js/18.dab33d4b.js",
    "revision": "bb1c31474fa9f0a08338ff948d8a2816"
  },
  {
    "url": "assets/js/19.5c7e10b4.js",
    "revision": "d9a1a30de2f743b01b10f7737a44bfe4"
  },
  {
    "url": "assets/js/20.db76ccd7.js",
    "revision": "58987a84a74f688b920e93a9d89dec9f"
  },
  {
    "url": "assets/js/21.1507ab3d.js",
    "revision": "2fa9efcc09b458794633238ddc5dffa8"
  },
  {
    "url": "assets/js/22.babd039b.js",
    "revision": "88f5cd980f9624230e0bcd7a560cd846"
  },
  {
    "url": "assets/js/23.16953794.js",
    "revision": "d695aab338074c00c7e387bd64371369"
  },
  {
    "url": "assets/js/24.028ce9e1.js",
    "revision": "426c4b9e3acb185e02177153fbdbc7fc"
  },
  {
    "url": "assets/js/25.df228ca3.js",
    "revision": "c84ffdde33a8c14b24efbb9b6d612734"
  },
  {
    "url": "assets/js/26.b7f8d466.js",
    "revision": "10040040a6ad97d3706db236b442786d"
  },
  {
    "url": "assets/js/27.c79e0139.js",
    "revision": "025f4566a85749f4106a5cabb7486c22"
  },
  {
    "url": "assets/js/28.693f9f17.js",
    "revision": "4d3b9c99a78e1d32c4fd2395e411a8b8"
  },
  {
    "url": "assets/js/29.ed8a4484.js",
    "revision": "b3054d721cbdc855774563280b576c69"
  },
  {
    "url": "assets/js/3.86cb07ac.js",
    "revision": "bb1a301ccc1b3cafe9dd1cfb2e1f0403"
  },
  {
    "url": "assets/js/30.7fd3ddaf.js",
    "revision": "1da26f8222b9025ecf209943ad6cc9f4"
  },
  {
    "url": "assets/js/31.ceaae3a6.js",
    "revision": "02435d9bb23a73fe1290666994afb47b"
  },
  {
    "url": "assets/js/32.cfd255c7.js",
    "revision": "5d5b4c7b88955d10ba7e52c3ffb43923"
  },
  {
    "url": "assets/js/33.093ccba6.js",
    "revision": "100041ab1237ea40d5e418dc5c4cffb2"
  },
  {
    "url": "assets/js/34.88a2ca59.js",
    "revision": "42b9b1dc0a5869a01325501f987963c7"
  },
  {
    "url": "assets/js/35.d04ce19c.js",
    "revision": "0b2f86dfa45f9d70e8bb5955fa8029d4"
  },
  {
    "url": "assets/js/36.980956d9.js",
    "revision": "261f65dc60738f81b80ee3b18175bf9b"
  },
  {
    "url": "assets/js/37.49394927.js",
    "revision": "b03778db761a712bc08e61f2e52dd1d4"
  },
  {
    "url": "assets/js/38.21c4e24a.js",
    "revision": "c08b7ddd80bb39a08391b09eadac9f88"
  },
  {
    "url": "assets/js/39.529d2abf.js",
    "revision": "9329ba679bb37c08636df2cefed506af"
  },
  {
    "url": "assets/js/4.40fb3784.js",
    "revision": "fc7654894b0f348efd0f50c5d16a6f81"
  },
  {
    "url": "assets/js/40.8221e2fd.js",
    "revision": "98883a7f4f6ddf6ec2e24ef5f779ceeb"
  },
  {
    "url": "assets/js/41.7a394269.js",
    "revision": "2d13622edb69140b5324d738399cfc26"
  },
  {
    "url": "assets/js/42.0f2ac447.js",
    "revision": "862dea5b1d809f0c6a6eea76221b34af"
  },
  {
    "url": "assets/js/43.3b0c487b.js",
    "revision": "9fdbcc353275b00f71ead25f2029ce70"
  },
  {
    "url": "assets/js/44.ee7a1ac8.js",
    "revision": "210a4b278e51e3f26c7db9596be556f7"
  },
  {
    "url": "assets/js/45.9686fb81.js",
    "revision": "57a28daf9b94e14b58b464f251ccf903"
  },
  {
    "url": "assets/js/46.d571d04a.js",
    "revision": "f777eff4fd776d7009f853f115ab9077"
  },
  {
    "url": "assets/js/47.dd64a20e.js",
    "revision": "9fc624709926c125ac4d5e4cc0ee32df"
  },
  {
    "url": "assets/js/48.fee9734f.js",
    "revision": "decec0db1c954d0c878309bb88372197"
  },
  {
    "url": "assets/js/49.5c975fd4.js",
    "revision": "fb241f85c24ed34825c5a9b54be035bf"
  },
  {
    "url": "assets/js/5.e3f88090.js",
    "revision": "9bae715ee4934868d3418b599bd076db"
  },
  {
    "url": "assets/js/50.c8ee83cb.js",
    "revision": "ba466ab4ebb51c457dd4f88c40eab65c"
  },
  {
    "url": "assets/js/6.05b04660.js",
    "revision": "63600d8c2cdbc484ae95f546cfe8ea1e"
  },
  {
    "url": "assets/js/7.6880526d.js",
    "revision": "8de58b7ad653f65969cd728d53196411"
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
    "url": "assets/js/app.68c99a9a.js",
    "revision": "e477e1e4addfed39e356e73031946574"
  },
  {
    "url": "assets/js/vendors~flowchart.23bb9e8c.js",
    "revision": "1bd7e5c0055597f73ef1069425edb759"
  },
  {
    "url": "blog/about-config/vscode-multi-column.html",
    "revision": "1cfddbc7cceb56dd933b5bf02e98a4be"
  },
  {
    "url": "blog/about-config/vuepress-github-website.html",
    "revision": "858377d63d8f20ac6467367ae9a99b74"
  },
  {
    "url": "blog/frontend-records/image-gif.html",
    "revision": "71b31ee38b153c8419ac1fad28d124d3"
  },
  {
    "url": "blog/frontend-records/image-sharp.html",
    "revision": "ce9a187021acfc0f0690b7456c2cd37f"
  },
  {
    "url": "blog/frontend-records/special-css.html",
    "revision": "1107fdb4930264cbd3be99a95ad778cd"
  },
  {
    "url": "blog/html-test/hash-test.html",
    "revision": "baba0c01055320fc6920677373c48296"
  },
  {
    "url": "blog/html-test/just-test.html",
    "revision": "9790ce37c6764d07b544536ac40c5cfd"
  },
  {
    "url": "blog/html-test/summary-test.html",
    "revision": "27c632c06e43d362bea3ef3629182426"
  },
  {
    "url": "blog/index.html",
    "revision": "4f0f74f0a49db189b60a5c98d89b72e2"
  },
  {
    "url": "blog/node-server/koa-bodyParser-myself.html",
    "revision": "674b223aaa6d137f33f59d671173179c"
  },
  {
    "url": "blog/node-server/koa-middleware.html",
    "revision": "9921df3cc4245a0ad0c09deb8bc091ff"
  },
  {
    "url": "blog/node-server/koa-mysql.html",
    "revision": "6b42ad98d1e822abb48e74642b8e67ab"
  },
  {
    "url": "blog/node-server/koa-router.html",
    "revision": "bcec8687183449a0b1f4fd40b467bef7"
  },
  {
    "url": "blog/node-server/koa-server-init.html",
    "revision": "440d2307088223a642f0b64267f050e5"
  },
  {
    "url": "blog/node-server/node-crawler.html",
    "revision": "231220673276e7a0876907652aa8ce0f"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "ba3648703754b2fedbaae793a75c5d07"
  },
  {
    "url": "blog/standard/index.html",
    "revision": "69cddd32b980490ea105dd788ff388be"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "7336eeff2b078304527bfb7f95967b1e"
  },
  {
    "url": "blog/vue/promote-of-vue.html",
    "revision": "51ec89e3f47dcf6e86c7cfee9998d211"
  },
  {
    "url": "blog/vue/vue3-effect-api.html",
    "revision": "73c2bc20889a9b03ae5e165f64f97f17"
  },
  {
    "url": "blog/vue/vue3-introduce.html",
    "revision": "35fb6074c2d1dd9bcda57b8bb8302a5b"
  },
  {
    "url": "blog/vue/vue3-lifecycle.html",
    "revision": "3c60ef775bc111dde47ba3ae3dcacaf3"
  },
  {
    "url": "blog/vue/vue3-reactive.html",
    "revision": "322e5bc3dddf7751e689501c8d768d4f"
  },
  {
    "url": "blog/vue/vue3-scheduler.html",
    "revision": "cf8fcea8ef2fa1c1c2ca7b120f3150e0"
  },
  {
    "url": "Goal.html",
    "revision": "41cddea4cc7c6861a06aaf96f1f13d84"
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
    "revision": "5428c1b65758663f1b1d59bd5263f0a6"
  },
  {
    "url": "interview/css.html",
    "revision": "28bcd22a94101e8e510c83bca07cb6a3"
  },
  {
    "url": "interview/history.html",
    "revision": "f5d5ec9c09c3b4f1cb2db2ed0f78a3d3"
  },
  {
    "url": "interview/html.html",
    "revision": "6b9009a12a1388c3c1dbee06b02aba9e"
  },
  {
    "url": "interview/index.html",
    "revision": "82f49227f5b8b1fd98bc98095d671ac8"
  },
  {
    "url": "interview/js.html",
    "revision": "0fa301b625031c386bbfd185c3892620"
  },
  {
    "url": "interview/nodejs.html",
    "revision": "7453c89ae1a60ad9960b197914840f89"
  },
  {
    "url": "interview/OLDREADME.html",
    "revision": "016b2713ebeeb61c414e3d678e5bcc7b"
  },
  {
    "url": "interview/quote.html",
    "revision": "12f0fb2e0a2e69dd29b42abc3aaf2b2a"
  },
  {
    "url": "interview/react.html",
    "revision": "eae89f88f9c657494b95d7be91d5db70"
  },
  {
    "url": "interview/vue.html",
    "revision": "807b86b6627ca235c5da2eb6de6a42eb"
  },
  {
    "url": "interview/webpack.html",
    "revision": "a2c1390fb3e464da7f558cd76c6052bc"
  },
  {
    "url": "interview/小程序.html",
    "revision": "4a6e8a7ef4a705c05534bb2414ebd137"
  },
  {
    "url": "sharing/index.html",
    "revision": "be0cf3e35a69980f05594f8607c352e7"
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
