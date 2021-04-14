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
    "revision": "2f00938a1f9a16d8348c68209cbe423b"
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
    "url": "assets/js/10.1a77396a.js",
    "revision": "8b58c6e032f0c8eaf9232de5999aa91b"
  },
  {
    "url": "assets/js/11.7ff16ef9.js",
    "revision": "b9a3c66f2c29d339ed91817952515df1"
  },
  {
    "url": "assets/js/12.3408f491.js",
    "revision": "baccceae30484b34634d01d54eb742c0"
  },
  {
    "url": "assets/js/13.11875ef6.js",
    "revision": "c52aee23c797d6791ce7bc2bc44e8a07"
  },
  {
    "url": "assets/js/14.543561d7.js",
    "revision": "323d600d37a2e5107234126799d3518d"
  },
  {
    "url": "assets/js/15.d31a3870.js",
    "revision": "5053c59db542055d933bb92091b36fee"
  },
  {
    "url": "assets/js/16.ecc86c4f.js",
    "revision": "6a5475f4b10f5e481d1c7bf105905d49"
  },
  {
    "url": "assets/js/17.d8e9b596.js",
    "revision": "7d025c5c3778765444308fcf7a4d9278"
  },
  {
    "url": "assets/js/18.50143be8.js",
    "revision": "68d78dc2012cdb5f1d2ce99a272ac176"
  },
  {
    "url": "assets/js/19.83e65895.js",
    "revision": "9d6c3e2f53b547aa0d0f870f28bdae78"
  },
  {
    "url": "assets/js/20.5a5feb72.js",
    "revision": "066f62f6860d296f078ebd468931c34e"
  },
  {
    "url": "assets/js/21.320f2057.js",
    "revision": "786ae61c11870b7e412826b50fd17d85"
  },
  {
    "url": "assets/js/22.9b75489a.js",
    "revision": "6f6988d0554d4e249a0ce0ff220eba0c"
  },
  {
    "url": "assets/js/23.5047c80f.js",
    "revision": "3937ab789657193489755a6873514fef"
  },
  {
    "url": "assets/js/24.4f9ac7a9.js",
    "revision": "440ca1020cc28d8ae5f8015184c288e8"
  },
  {
    "url": "assets/js/25.79c4b840.js",
    "revision": "e9cb1547da3441c70d4f2c7e3a34b923"
  },
  {
    "url": "assets/js/26.b4871d49.js",
    "revision": "7728d22dea5e726865206f82bdc6acaa"
  },
  {
    "url": "assets/js/27.77f6532f.js",
    "revision": "0f3e6eeca8f96c0fb4bf7563ff2feedc"
  },
  {
    "url": "assets/js/28.0980675c.js",
    "revision": "6baecfe071b1d930adc39e632912515c"
  },
  {
    "url": "assets/js/29.dd9f118e.js",
    "revision": "9632364597d07af447d38b85ce04fb9d"
  },
  {
    "url": "assets/js/3.fd3193e4.js",
    "revision": "f62e7d605a41cdd5fb06bddcace0cf2d"
  },
  {
    "url": "assets/js/30.b992ecc6.js",
    "revision": "07e8ee17db50ba4385de43b0695243b0"
  },
  {
    "url": "assets/js/31.db191c16.js",
    "revision": "d52706ab595e1f2af19208d45e649451"
  },
  {
    "url": "assets/js/32.b168c006.js",
    "revision": "09e72638bb236dc0bceb8e2cc2c43a38"
  },
  {
    "url": "assets/js/33.8c5f8486.js",
    "revision": "8888c139692456beff4e9dbbbd31bfb4"
  },
  {
    "url": "assets/js/34.bb44948b.js",
    "revision": "70c975e157962384170fdf07f21b60f6"
  },
  {
    "url": "assets/js/35.88f35a5a.js",
    "revision": "0f82cde5ddbf2003f62193bcae70322b"
  },
  {
    "url": "assets/js/36.23748b77.js",
    "revision": "a9d9be2fd55ba0ab86f4bf29915fd3f5"
  },
  {
    "url": "assets/js/37.0cfc55a0.js",
    "revision": "ddb56783695c900c82bc3cf2d270103c"
  },
  {
    "url": "assets/js/38.cbde35ba.js",
    "revision": "f843fe5d5974b2d3cc829198d978629a"
  },
  {
    "url": "assets/js/39.33796004.js",
    "revision": "2ef8156e79f4ac2bc70d06f23d948c40"
  },
  {
    "url": "assets/js/4.c4633961.js",
    "revision": "5045559a5c6c66f2eab888ba66cae98c"
  },
  {
    "url": "assets/js/40.504f67d7.js",
    "revision": "c5e1077776da8c8cf16d67ffbccfd343"
  },
  {
    "url": "assets/js/41.ea11a76f.js",
    "revision": "697a21b62a4f72cc768cd5ade364d6ba"
  },
  {
    "url": "assets/js/42.9d2113dc.js",
    "revision": "1b5bf6de2701b2d8f037669e12d5897b"
  },
  {
    "url": "assets/js/43.a1cff3a9.js",
    "revision": "c051d08d7201a84a2cf1d0d366e96869"
  },
  {
    "url": "assets/js/44.ccf5a982.js",
    "revision": "a9eac43f3b9b7680988a9ce1f7e5a453"
  },
  {
    "url": "assets/js/45.a7fd70a8.js",
    "revision": "1158e6c81cdc55379f816dd5766447a6"
  },
  {
    "url": "assets/js/46.4cf511ac.js",
    "revision": "188c998912075794f7848cfa468d0db5"
  },
  {
    "url": "assets/js/47.a7272c28.js",
    "revision": "9d09438e78fd2ad036b21214778f9de0"
  },
  {
    "url": "assets/js/48.d1683ee8.js",
    "revision": "9a7b7e63c45872bad7613f309554094e"
  },
  {
    "url": "assets/js/49.37450399.js",
    "revision": "da480701db800501ad771c3a59395de0"
  },
  {
    "url": "assets/js/5.8b08301d.js",
    "revision": "3d219db21e94fa1c919d867f0bdf0211"
  },
  {
    "url": "assets/js/50.72c891f9.js",
    "revision": "68983527fec14ce6820a4442e8d0d4a2"
  },
  {
    "url": "assets/js/51.6e8cd50c.js",
    "revision": "86ef34964321f1d060766b606ffaa898"
  },
  {
    "url": "assets/js/52.d85b26a8.js",
    "revision": "03182a0d56005cf9baeb7d15f0944b72"
  },
  {
    "url": "assets/js/53.63ee6438.js",
    "revision": "7d0e0a76ac8ba289a20b84f674102ac4"
  },
  {
    "url": "assets/js/54.4bb1e7bc.js",
    "revision": "6d81bc03a6c2045d4e4ea4a9ec5d30c0"
  },
  {
    "url": "assets/js/6.b8b865fe.js",
    "revision": "73cda2a3dcf5842f105d2a00ca686eab"
  },
  {
    "url": "assets/js/7.952034c5.js",
    "revision": "187baf1939aa2b744fa89e0a772c4760"
  },
  {
    "url": "assets/js/8.b1c2f09f.js",
    "revision": "d28289cd087ef648dd0078796f79dba1"
  },
  {
    "url": "assets/js/9.f5dba21c.js",
    "revision": "b2638bdb527700daa4d09e56a1bbe8b5"
  },
  {
    "url": "assets/js/app.11d98d92.js",
    "revision": "15a5dc11c60bf9dc38544f10d7a7bf6e"
  },
  {
    "url": "assets/js/vendors~flowchart.a01d896f.js",
    "revision": "c8034bee88c9a7b2dc7f574e0a24b77f"
  },
  {
    "url": "blog/about-config/vscode-multi-column.html",
    "revision": "67f1fef781987e679013eca21513d9ef"
  },
  {
    "url": "blog/about-config/vuepress-github-website.html",
    "revision": "1c8fcde2a7c15e9b9164d88cd30628c6"
  },
  {
    "url": "blog/frontend-records/css/sticky.html",
    "revision": "89fe212680331d1a5762e4644ede85d0"
  },
  {
    "url": "blog/frontend-records/ecmascript.html",
    "revision": "fccf5f23bf60ce3e5787a9f7ce9a4ffe"
  },
  {
    "url": "blog/frontend-records/image-gif.html",
    "revision": "af482e87291744c008a343f15c494077"
  },
  {
    "url": "blog/frontend-records/image-sharp.html",
    "revision": "55673066fdd505915c11577dbcf5f413"
  },
  {
    "url": "blog/frontend-records/special-css.html",
    "revision": "fd5e26ae48e0a56e37013f0239bdaf8d"
  },
  {
    "url": "blog/html-test/hash-test.html",
    "revision": "10b28c61cb8a4fe534adee7e96784b67"
  },
  {
    "url": "blog/html-test/just-test.html",
    "revision": "22eac14671c620113925478e44b39e21"
  },
  {
    "url": "blog/html-test/summary-test.html",
    "revision": "63d0fa543cf00b5a307887cc5e1c9d5f"
  },
  {
    "url": "blog/index.html",
    "revision": "968c909ee2605670d510000e6a2e5b98"
  },
  {
    "url": "blog/node-server/koa-bodyParser-myself.html",
    "revision": "c5942f796f1467c1e4481223aa92ffa0"
  },
  {
    "url": "blog/node-server/koa-middleware.html",
    "revision": "94a0ae5ad018ca42001ee21d938af6a7"
  },
  {
    "url": "blog/node-server/koa-mysql.html",
    "revision": "db6cf576aa37cdd42092084e01bc8abf"
  },
  {
    "url": "blog/node-server/koa-router.html",
    "revision": "5785c866123cbca1f76192a168f5604f"
  },
  {
    "url": "blog/node-server/koa-server-init.html",
    "revision": "6d83e9d84c865f12ccca08a39a513f36"
  },
  {
    "url": "blog/node-server/node-crawler.html",
    "revision": "b01ef698cc8ffa97a323c2f987947be5"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "7977339052e10c13aba366c5bdd7e76c"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "736f6c8416dcf55bee4cb85eb9776400"
  },
  {
    "url": "blog/vue/promote-of-vue.html",
    "revision": "a1297cfa73d1d868c6786e6ce9e9ad73"
  },
  {
    "url": "blog/vue/vue3-effect-api.html",
    "revision": "7c6751866e8f63bad1950a90be437e29"
  },
  {
    "url": "blog/vue/vue3-introduce.html",
    "revision": "b52bb9c0d69ae10852e2895b8d0c85ad"
  },
  {
    "url": "blog/vue/vue3-lifecycle.html",
    "revision": "ded9a66757c31307b6c5722be4492132"
  },
  {
    "url": "blog/vue/vue3-reactive.html",
    "revision": "eb826f01e790d5e0a3238b76dbd4099b"
  },
  {
    "url": "blog/vue/vue3-scheduler.html",
    "revision": "dfa46e9378bc829c73c2cccee505a709"
  },
  {
    "url": "Goal.html",
    "revision": "548e704351de9818402228972f0ddd0d"
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
    "revision": "00b1df1b8fc67ae5446a44fc121e74ef"
  },
  {
    "url": "interview/css.html",
    "revision": "994bb9337e061f51d0a51a84dc9d7e10"
  },
  {
    "url": "interview/history.html",
    "revision": "40275bcf0388b5073d16b52ac3c6498c"
  },
  {
    "url": "interview/html.html",
    "revision": "69045ffffc0befae95c3a01e66acce94"
  },
  {
    "url": "interview/index.html",
    "revision": "8780c9565af4dce2bd846bed99e4c22c"
  },
  {
    "url": "interview/js.html",
    "revision": "8baf19f1caa84148b1907bf95f4f0e68"
  },
  {
    "url": "interview/nodejs.html",
    "revision": "f6848850b4d59dfa6dfca808af957d00"
  },
  {
    "url": "interview/OLDREADME.html",
    "revision": "fa38ce9ce2c7ddaa96144a5aac20d65a"
  },
  {
    "url": "interview/quote.html",
    "revision": "7cfcf69fd1147a5d3e5675c763b27cd3"
  },
  {
    "url": "interview/react.html",
    "revision": "26f6668a6acffbd3967295ada71ae410"
  },
  {
    "url": "interview/vue.html",
    "revision": "4477ffd61155143841b3b5e16beaf1cc"
  },
  {
    "url": "interview/webpack.html",
    "revision": "2879609fccb4035ad8f9621800833e10"
  },
  {
    "url": "interview/小程序.html",
    "revision": "439f369b63a2ecbfa7da02c38b3e9fe5"
  },
  {
    "url": "sharing/index.html",
    "revision": "bfbc52b1a8792fa6892ab68f2d97a655"
  },
  {
    "url": "sharing/sharing-blog.html",
    "revision": "9dcb6df5a5b8dd43d96c5fd465f76611"
  },
  {
    "url": "sharing/software.html",
    "revision": "56db78d91cc2cb9aa2b2cab5de0f54da"
  },
  {
    "url": "sharing/utils-web.html",
    "revision": "017a5b4b2a208bbd36c59e33408c9006"
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
