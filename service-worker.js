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
    "revision": "a64325e7e402b51128877622acf0992c"
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
    "url": "assets/js/21.820ca6f7.js",
    "revision": "967c39158af48ed15715357d90f96fba"
  },
  {
    "url": "assets/js/22.4866d77a.js",
    "revision": "cff91461c6307056eae0498c6828ad9e"
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
    "url": "assets/js/29.eaf52a01.js",
    "revision": "fdecfbd2c16e347fbc93d1d146c2c7c1"
  },
  {
    "url": "assets/js/3.86cb07ac.js",
    "revision": "bb1a301ccc1b3cafe9dd1cfb2e1f0403"
  },
  {
    "url": "assets/js/30.3eb3ed50.js",
    "revision": "4eb6a1a4692e3aeb8e9a9900c29a54f0"
  },
  {
    "url": "assets/js/31.61a6ad44.js",
    "revision": "da43b31c261f66fea35b05a73dcea881"
  },
  {
    "url": "assets/js/32.511729c0.js",
    "revision": "a7082a83e066e7e62c415073942e0d61"
  },
  {
    "url": "assets/js/33.54e55779.js",
    "revision": "96427eb563306ea499564c5897f7f77c"
  },
  {
    "url": "assets/js/34.ebe80506.js",
    "revision": "3e0945c7683d6c05102701278ae8d004"
  },
  {
    "url": "assets/js/35.7fdb7d85.js",
    "revision": "66ee1962e08c440b64c3acaaddc64a3e"
  },
  {
    "url": "assets/js/36.084db1f5.js",
    "revision": "b49a638f28d9d3b523191e8bb3ccdb34"
  },
  {
    "url": "assets/js/37.1e22c5e3.js",
    "revision": "d161eb40ed0484a7d3c0bac035444439"
  },
  {
    "url": "assets/js/38.d0af3c1b.js",
    "revision": "6d434f813794193c620d07d0679a6bfe"
  },
  {
    "url": "assets/js/39.62d365fe.js",
    "revision": "5fa762b98fedf9fd9ad62a95d9793d84"
  },
  {
    "url": "assets/js/4.40fb3784.js",
    "revision": "fc7654894b0f348efd0f50c5d16a6f81"
  },
  {
    "url": "assets/js/40.9a43f7dd.js",
    "revision": "2be309f917b5921ff0eb7dc901274a25"
  },
  {
    "url": "assets/js/41.aed36277.js",
    "revision": "1e85cb0141f18d6261a31f8077fd90aa"
  },
  {
    "url": "assets/js/42.e8b11288.js",
    "revision": "fbf0e9a2328c199672e1aead1278294f"
  },
  {
    "url": "assets/js/43.c4273e1a.js",
    "revision": "dd138f54e7c34224078ab9839bd0aec5"
  },
  {
    "url": "assets/js/44.87761c17.js",
    "revision": "2557622f0b7fe404daa5e19d4df759cd"
  },
  {
    "url": "assets/js/45.494b3a69.js",
    "revision": "72c10f55fdd9d42fd35c824e2c76bd5b"
  },
  {
    "url": "assets/js/46.0c094761.js",
    "revision": "695639bf4f08e27e50bf3fd280e15509"
  },
  {
    "url": "assets/js/5.02291903.js",
    "revision": "7c2c50a7d7f42803d570b92d2112e989"
  },
  {
    "url": "assets/js/6.05b04660.js",
    "revision": "63600d8c2cdbc484ae95f546cfe8ea1e"
  },
  {
    "url": "assets/js/7.ef4c3ffd.js",
    "revision": "843862d0199a8414e1dced0656d3ad11"
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
    "url": "assets/js/app.d1c94853.js",
    "revision": "4280d918a8f942606becbccecbf8c1b8"
  },
  {
    "url": "assets/js/vendors~flowchart.23bb9e8c.js",
    "revision": "1bd7e5c0055597f73ef1069425edb759"
  },
  {
    "url": "blog/about-config/vscode-multi-column.html",
    "revision": "5be69b0e6bcb511556d0671d10970954"
  },
  {
    "url": "blog/about-config/vuepress-github-website.html",
    "revision": "fa3cd07b1736329ac1460cc6f25149a0"
  },
  {
    "url": "blog/frontend-records/image-gif.html",
    "revision": "104d3659b3cfc1d80fdfd432e3baa4cd"
  },
  {
    "url": "blog/frontend-records/image-sharp.html",
    "revision": "3b9235f2c4b8172f8b72c282758e6cf1"
  },
  {
    "url": "blog/html-test/hash-test.html",
    "revision": "1ecf019f9716073b47b304da5db91e28"
  },
  {
    "url": "blog/html-test/just-test.html",
    "revision": "5165c3a649a353b5a881b07085355508"
  },
  {
    "url": "blog/html-test/summary-test.html",
    "revision": "72d9381a55f9030c21393363a4244c20"
  },
  {
    "url": "blog/index.html",
    "revision": "406d7f0d53c9e95e9c6fe74cf5ed174c"
  },
  {
    "url": "blog/node-server/koa-bodyParser-myself.html",
    "revision": "e57cd42445993981dd3c505cb53f3844"
  },
  {
    "url": "blog/node-server/koa-middleware.html",
    "revision": "522fad09999c0f25707cf0c5f34f49d1"
  },
  {
    "url": "blog/node-server/koa-mysql.html",
    "revision": "ba8da045ab62a19905417a5fab286e69"
  },
  {
    "url": "blog/node-server/koa-router.html",
    "revision": "1db8d879ba963c20dd903d621e86d488"
  },
  {
    "url": "blog/node-server/koa-server-init.html",
    "revision": "e519a3f9e06822cdaf98215d8d7dc490"
  },
  {
    "url": "blog/node-server/node-crawler.html",
    "revision": "334a22ba00bd9edc946c69bbfe7ae035"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "c7b4f74db1b862984dbfd6d4942c46fa"
  },
  {
    "url": "blog/standard/index.html",
    "revision": "88271196de054ed7c2efe41d1ba0801a"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "6ca4aa3f7612e6c108707ed48e23cb1c"
  },
  {
    "url": "blog/vue/promote-of-vue.html",
    "revision": "2971b11aba183cd5b7137bb3462b7da1"
  },
  {
    "url": "blog/vue/vue3-introduce.html",
    "revision": "83ac3172ae0421179da954a7b5bfce88"
  },
  {
    "url": "blog/vue/vue3-reactive.html",
    "revision": "582915aca6c736f9d6719ca94f8243a7"
  },
  {
    "url": "Goal.html",
    "revision": "76f6c0b64e5a5a1146c200b4921b8c83"
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
    "revision": "3363d7274703a572de069e594af16efe"
  },
  {
    "url": "interview/css.html",
    "revision": "06f893910587f4c2891db0af57fc98cb"
  },
  {
    "url": "interview/history.html",
    "revision": "18a2060ab18d5fb1b5fa3fc61e2a0a6b"
  },
  {
    "url": "interview/html.html",
    "revision": "f3c85de1f41dec0f44f431d72fdcae06"
  },
  {
    "url": "interview/index.html",
    "revision": "b7b4caa9fdcd68f69ed509f98f813975"
  },
  {
    "url": "interview/js.html",
    "revision": "5ef0e0e0e5b378787d8c84c85f637d24"
  },
  {
    "url": "interview/nodejs.html",
    "revision": "dc2e2283e2eee77877d723e6b9b957f8"
  },
  {
    "url": "interview/OLDREADME.html",
    "revision": "7a1760cadfa7dcfcb728f0263d529b73"
  },
  {
    "url": "interview/quote.html",
    "revision": "eb2d7eca87323c4e5ada313045425ae9"
  },
  {
    "url": "interview/react.html",
    "revision": "b02b1d168df959964b623207b412a720"
  },
  {
    "url": "interview/vue.html",
    "revision": "5a550f4043008409bde75cac9d27fefc"
  },
  {
    "url": "interview/webpack.html",
    "revision": "3005627fc074892286e27656c85e05af"
  },
  {
    "url": "interview/小程序.html",
    "revision": "e6bef4331a810a0f8a3982e13b9e25b8"
  },
  {
    "url": "sharing/index.html",
    "revision": "2cd7ec7b58033c7e91200db5f88aff25"
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
