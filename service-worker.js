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
    "revision": "b1620f058c945e1269cc8b05928a22a9"
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
    "url": "assets/js/28.9936bf21.js",
    "revision": "598021ab4209200f2fda3f5747acbf03"
  },
  {
    "url": "assets/js/29.737240b3.js",
    "revision": "35a0e1a544b7f99470d5d865751713c8"
  },
  {
    "url": "assets/js/3.86cb07ac.js",
    "revision": "bb1a301ccc1b3cafe9dd1cfb2e1f0403"
  },
  {
    "url": "assets/js/30.5c3ff914.js",
    "revision": "4db7fdb50b82668187162c3e96a74d8b"
  },
  {
    "url": "assets/js/31.698561a0.js",
    "revision": "77cdf44be8ac806c207de900a398a075"
  },
  {
    "url": "assets/js/32.ac09bf8d.js",
    "revision": "3ecfb667b19b582bb493fdc963f9cdd6"
  },
  {
    "url": "assets/js/33.a2136986.js",
    "revision": "df640bbd3c0341139303b5896bc1fe55"
  },
  {
    "url": "assets/js/34.6d6b2d15.js",
    "revision": "602c3026a338723c96044841b2ab2dd9"
  },
  {
    "url": "assets/js/35.faaa1868.js",
    "revision": "0452e87d47545b97e4d733f0d0279043"
  },
  {
    "url": "assets/js/36.b6c43fdc.js",
    "revision": "44a55c528194d0655196a7902413db10"
  },
  {
    "url": "assets/js/37.0b96b495.js",
    "revision": "b6249c76e98b6a0e5d4f11de0b9b2fdd"
  },
  {
    "url": "assets/js/38.811b0911.js",
    "revision": "3426bcaa04a1077d09689c6c7548b671"
  },
  {
    "url": "assets/js/39.54555a98.js",
    "revision": "21b64216d25a747e48c810d1373dec8e"
  },
  {
    "url": "assets/js/4.40fb3784.js",
    "revision": "fc7654894b0f348efd0f50c5d16a6f81"
  },
  {
    "url": "assets/js/40.6dc190f7.js",
    "revision": "585a9c1141adedded0440638b51eff2c"
  },
  {
    "url": "assets/js/41.1e3d39d9.js",
    "revision": "982dbe4436a53ed2befad8544c2239ae"
  },
  {
    "url": "assets/js/42.273a12dd.js",
    "revision": "19b2cb61e8de18302fa36e3a01c0023f"
  },
  {
    "url": "assets/js/43.399098ed.js",
    "revision": "5a56097380a51ed4ed26e968e3bd24c9"
  },
  {
    "url": "assets/js/44.4e8467e2.js",
    "revision": "5f83573c111d2336a8a11801623df5b2"
  },
  {
    "url": "assets/js/45.7ed29aef.js",
    "revision": "539b754e2609e14cce02d7d1684cf997"
  },
  {
    "url": "assets/js/46.2fa1be47.js",
    "revision": "9353992cb35ace7449eb40b2c0ab99f0"
  },
  {
    "url": "assets/js/47.f77cfb13.js",
    "revision": "23b98479380288b98edc69b764bb900f"
  },
  {
    "url": "assets/js/5.68e5dcd2.js",
    "revision": "2f14aa6c2ccbbaa15c6449411b18e4a0"
  },
  {
    "url": "assets/js/6.05b04660.js",
    "revision": "63600d8c2cdbc484ae95f546cfe8ea1e"
  },
  {
    "url": "assets/js/7.f7482982.js",
    "revision": "246538eaf45f9f4bcb74c7014f08c045"
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
    "url": "assets/js/app.e2c48320.js",
    "revision": "579cd1fcb264177ee871c71dcceff1be"
  },
  {
    "url": "assets/js/vendors~flowchart.23bb9e8c.js",
    "revision": "1bd7e5c0055597f73ef1069425edb759"
  },
  {
    "url": "blog/about-config/vscode-multi-column.html",
    "revision": "6548020d9fc1b16185938b4c5d6fe304"
  },
  {
    "url": "blog/about-config/vuepress-github-website.html",
    "revision": "7d714eb9141ea92f0621c63543dbfbe3"
  },
  {
    "url": "blog/frontend-records/image-gif.html",
    "revision": "f78643a92023b54f5252126350eef2d3"
  },
  {
    "url": "blog/frontend-records/image-sharp.html",
    "revision": "94b520d8c3f7c40c46516b34ab2471e7"
  },
  {
    "url": "blog/frontend-records/special-css.html",
    "revision": "71a0602635b7dceabe916671b4c31e47"
  },
  {
    "url": "blog/html-test/hash-test.html",
    "revision": "9b7ad9e7a86c4721ec8d44984f9f6736"
  },
  {
    "url": "blog/html-test/just-test.html",
    "revision": "56183d64b57f42f9c6ed47b8caee3a12"
  },
  {
    "url": "blog/html-test/summary-test.html",
    "revision": "ed8377345f3a3e2bd767f9424cefe862"
  },
  {
    "url": "blog/index.html",
    "revision": "1afdbdaf845f7095e0f0ea44e144816b"
  },
  {
    "url": "blog/node-server/koa-bodyParser-myself.html",
    "revision": "4e279b3e267a6ec62491a6d9372d15eb"
  },
  {
    "url": "blog/node-server/koa-middleware.html",
    "revision": "d5da08b27e15b7939c5a37059d3bda36"
  },
  {
    "url": "blog/node-server/koa-mysql.html",
    "revision": "6fb8c15d11d5addddd5d2530a61e6218"
  },
  {
    "url": "blog/node-server/koa-router.html",
    "revision": "ac0461127a0541b382a9b6bf3d5ea20d"
  },
  {
    "url": "blog/node-server/koa-server-init.html",
    "revision": "64b19db86f2a45316b1bba4722f9ad01"
  },
  {
    "url": "blog/node-server/node-crawler.html",
    "revision": "b3ae37a53611d5321ad04042a31c9170"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "c0689ed916df611d626591d179dbf9bb"
  },
  {
    "url": "blog/standard/index.html",
    "revision": "3ad2f2f5149bdc56cc93038787bce07c"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "3ead4ebb5c43df1ce0f57824a2cceadd"
  },
  {
    "url": "blog/vue/promote-of-vue.html",
    "revision": "a4be0e722e552ebf49881bcc58926295"
  },
  {
    "url": "blog/vue/vue3-introduce.html",
    "revision": "3574b925bff888e2dfdebf1172c82c34"
  },
  {
    "url": "blog/vue/vue3-reactive.html",
    "revision": "6246bc3eb2c8964fa26b7b24866a8c3c"
  },
  {
    "url": "Goal.html",
    "revision": "db95c4596eb447d82bbf20501abcf9d6"
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
    "revision": "02a6922188a3b15c1ce03a3cb7225c63"
  },
  {
    "url": "interview/css.html",
    "revision": "1fa3247dadb20c747bb73ce8d1c64144"
  },
  {
    "url": "interview/history.html",
    "revision": "b3f156a3157c6acc3414a3b2bbcefe4b"
  },
  {
    "url": "interview/html.html",
    "revision": "a4efcafb107ded1cfd8a83b93aba4a48"
  },
  {
    "url": "interview/index.html",
    "revision": "dacc197c407413fa6f8ea3f25ee19a7f"
  },
  {
    "url": "interview/js.html",
    "revision": "138533497d4ee537f6524030a2ef6f1a"
  },
  {
    "url": "interview/nodejs.html",
    "revision": "87f4ea1f63bb4bb87910eaf9a834ca30"
  },
  {
    "url": "interview/OLDREADME.html",
    "revision": "a04518503ab597710e25e3bc7a03d6d0"
  },
  {
    "url": "interview/quote.html",
    "revision": "eb8496e07876e9052152abc453071097"
  },
  {
    "url": "interview/react.html",
    "revision": "00590b9658f51d1014ec6e2f758edc37"
  },
  {
    "url": "interview/vue.html",
    "revision": "fdb44beb2e3dacd5f126fcf1df4ebe75"
  },
  {
    "url": "interview/webpack.html",
    "revision": "fb796887f80dd73ea5fb24ea0382804b"
  },
  {
    "url": "interview/小程序.html",
    "revision": "bfd54af5a79311ffe8e7e6f015b2a2ea"
  },
  {
    "url": "sharing/index.html",
    "revision": "602e0dc015ccd45f003883d06e1f6a83"
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
