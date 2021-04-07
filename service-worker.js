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
    "revision": "00a40a0fb37cf50da80a744688ce92fc"
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
    "url": "assets/js/13.dd41bb43.js",
    "revision": "0f092af3bfc5db981d5455678a73c8ac"
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
    "url": "assets/js/24.7d47ce91.js",
    "revision": "dc2fea27b0dd3853388105055524e946"
  },
  {
    "url": "assets/js/25.3751631e.js",
    "revision": "a85a0770d1d5bf9cb8c2008a9364100a"
  },
  {
    "url": "assets/js/26.9a06e677.js",
    "revision": "07b4c66607d6e6f3073aa6566417c7c4"
  },
  {
    "url": "assets/js/27.ed5d27ba.js",
    "revision": "f4cb6157995b6a9fabbc00a49238c0a1"
  },
  {
    "url": "assets/js/28.1abbd92b.js",
    "revision": "85f14c3e6bc5f5512bd79e9a9ba50a41"
  },
  {
    "url": "assets/js/29.89aff9e0.js",
    "revision": "1992ed5ae8c1baab21873a8cf537f86e"
  },
  {
    "url": "assets/js/3.86cb07ac.js",
    "revision": "bb1a301ccc1b3cafe9dd1cfb2e1f0403"
  },
  {
    "url": "assets/js/30.d0be972b.js",
    "revision": "ade6600ac74edc384cb765f5b4fc7a1e"
  },
  {
    "url": "assets/js/31.5d962ecb.js",
    "revision": "835df5e1afbba68c9d3a3a01a1fa187f"
  },
  {
    "url": "assets/js/32.a4f38397.js",
    "revision": "a9d624682e629a3806120dec58fac38d"
  },
  {
    "url": "assets/js/33.05e464b6.js",
    "revision": "ad99e4f3e458014d0177f2a028b215f7"
  },
  {
    "url": "assets/js/34.74a128ea.js",
    "revision": "2d06b04a02afcf382bffdee50bd4d002"
  },
  {
    "url": "assets/js/35.20e34b62.js",
    "revision": "4b4a62adaecbae7b26ffee0c05715fa8"
  },
  {
    "url": "assets/js/36.d70b9b5d.js",
    "revision": "1f9080cf52e0b20e2e4df79f8b416243"
  },
  {
    "url": "assets/js/37.88ed2cb7.js",
    "revision": "5cb0bb8dd69b45ef2c913aed0cc03e47"
  },
  {
    "url": "assets/js/38.091dfa0b.js",
    "revision": "fa84dc2ab399967c7befdc0c3cad0a2b"
  },
  {
    "url": "assets/js/39.b4f021f2.js",
    "revision": "1b9ec0785afb7cf627d7e43890f1a629"
  },
  {
    "url": "assets/js/4.40fb3784.js",
    "revision": "fc7654894b0f348efd0f50c5d16a6f81"
  },
  {
    "url": "assets/js/40.f122539f.js",
    "revision": "ed2048b8931a996290e255cde095b0da"
  },
  {
    "url": "assets/js/41.4d6ad4be.js",
    "revision": "e60b98c94962a42816d9fae377772953"
  },
  {
    "url": "assets/js/42.e27b2b39.js",
    "revision": "9d76786950767d5c9d1752efb38c1cc4"
  },
  {
    "url": "assets/js/43.b0c6779d.js",
    "revision": "4d9bb9414347a3e092bccaef26845ee8"
  },
  {
    "url": "assets/js/44.b8ce05bf.js",
    "revision": "b1427d09021734f7c2f07a012927cffb"
  },
  {
    "url": "assets/js/45.32d690bf.js",
    "revision": "145d49d3e2b2e7d59c19890c13dc8ea8"
  },
  {
    "url": "assets/js/5.2ade8fc0.js",
    "revision": "33bc30a387a15309982a3e66e1385c13"
  },
  {
    "url": "assets/js/6.05b04660.js",
    "revision": "63600d8c2cdbc484ae95f546cfe8ea1e"
  },
  {
    "url": "assets/js/7.a230982d.js",
    "revision": "a5e3839d734e72dfbdea2fdfe75799f2"
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
    "url": "assets/js/app.f8a69c43.js",
    "revision": "cfa2223f550a5f0329e21ef7ab0458c8"
  },
  {
    "url": "assets/js/vendors~flowchart.23bb9e8c.js",
    "revision": "1bd7e5c0055597f73ef1069425edb759"
  },
  {
    "url": "blog/about-config/vscode-multi-column.html",
    "revision": "2bf982e4d7193f9423f1211d7fa94443"
  },
  {
    "url": "blog/about-config/vuepress-github-website.html",
    "revision": "3cee96e7705943b663f2bbe1bd5d55c9"
  },
  {
    "url": "blog/frontend-records/image-gif.html",
    "revision": "6b94289560745d6dbaa5f12580420b78"
  },
  {
    "url": "blog/frontend-records/image-sharp.html",
    "revision": "27e74e0c591c16da4f7a8db00f04b58a"
  },
  {
    "url": "blog/html-test/hash-test.html",
    "revision": "12816b92809a24d3d2fd50e07f71bad2"
  },
  {
    "url": "blog/html-test/just-test.html",
    "revision": "c687fa694d3c9f41169f1576065e6049"
  },
  {
    "url": "blog/html-test/summary-test.html",
    "revision": "b764c56655e7b7b5e597155994120b55"
  },
  {
    "url": "blog/index.html",
    "revision": "421980e9236d4cc4526ebb263c0a3b95"
  },
  {
    "url": "blog/node-server/koa-bodyParser-myself.html",
    "revision": "75959fba691a5e21261833fa9463804f"
  },
  {
    "url": "blog/node-server/koa-middleware.html",
    "revision": "c29c9568991d840245c2653a70f529e4"
  },
  {
    "url": "blog/node-server/koa-mysql.html",
    "revision": "10709414fe535b83a7e352e028d6786d"
  },
  {
    "url": "blog/node-server/koa-router.html",
    "revision": "366982701e40a26979cb43ce5607ffa3"
  },
  {
    "url": "blog/node-server/koa-server-init.html",
    "revision": "ae671e26cc73dad2b54d97d2fa4ba12d"
  },
  {
    "url": "blog/node-server/node-crawler.html",
    "revision": "b35956c1c1fcc0e65546dcd540baaabd"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "3f16d3cf5867536404b5a1935c25acd0"
  },
  {
    "url": "blog/standard/index.html",
    "revision": "ea3c384bbac8dc37db7aa850e709d67f"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "62bdb5be1db91ccf585e9c0d430151be"
  },
  {
    "url": "blog/vue/promote-of-vue.html",
    "revision": "c44fb0fa248067889ea91dbe4bff82fd"
  },
  {
    "url": "blog/vue/vue3-reactive.html",
    "revision": "876a8a02bbe0c3a39761f14c299c4d40"
  },
  {
    "url": "Goal.html",
    "revision": "eca94d6c4b133bf1a3f76617a6faf920"
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
    "revision": "696aeff2b2bd8ac160f4732de7fc3384"
  },
  {
    "url": "interview/css.html",
    "revision": "e3f434c4bc6f4a4921ebaabd18271e42"
  },
  {
    "url": "interview/history.html",
    "revision": "ece1a38707723e6f8ee093d862fac543"
  },
  {
    "url": "interview/html.html",
    "revision": "b296e19456ed633d0a2b57ef05641dc7"
  },
  {
    "url": "interview/index.html",
    "revision": "18a9e9e7c02c83c285174109c1cb1fd3"
  },
  {
    "url": "interview/js.html",
    "revision": "eed80d45494b0edf08e2e01f49f383d3"
  },
  {
    "url": "interview/nodejs.html",
    "revision": "600657478e25fc3a8dcc453f676f4321"
  },
  {
    "url": "interview/OLDREADME.html",
    "revision": "8a17c38c0cee5c588ec802e2688a984b"
  },
  {
    "url": "interview/quote.html",
    "revision": "d5552fdf39c7bf7d11677c5e6ceea901"
  },
  {
    "url": "interview/react.html",
    "revision": "25a0ad2c047039b5c8141a54a79b4370"
  },
  {
    "url": "interview/vue.html",
    "revision": "f215aeee095e6a84c0fb4c8d6a97b1ef"
  },
  {
    "url": "interview/webpack.html",
    "revision": "034f5ff6337d0e8537a936354a398172"
  },
  {
    "url": "interview/小程序.html",
    "revision": "ad1857e56284a12a52416984c6f6c556"
  },
  {
    "url": "sharing/index.html",
    "revision": "36f8540d83d139ac36213292f45a8d48"
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
