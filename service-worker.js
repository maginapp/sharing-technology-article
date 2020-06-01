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
    "revision": "9931816db983e56eca6ce22699850d1e"
  },
  {
    "url": "assets/css/0.styles.88f2ffdb.css",
    "revision": "f5f8af2476637ef49992c928f9c0fdcb"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3957ba1d.js",
    "revision": "0af95487f28621ad5710e7f8a6923cae"
  },
  {
    "url": "assets/js/11.610141d3.js",
    "revision": "7c5694450039c5777fc7f20a2db7c3ba"
  },
  {
    "url": "assets/js/12.4531cd72.js",
    "revision": "b29875a8c31c26e3f09cc0e89e89f6fb"
  },
  {
    "url": "assets/js/13.83a10093.js",
    "revision": "037c7eba10f2948e20f12001461c76ad"
  },
  {
    "url": "assets/js/14.5a3c45a5.js",
    "revision": "6a2e98790a8b77029aa67469882846e2"
  },
  {
    "url": "assets/js/15.75aa8857.js",
    "revision": "f5af224b584482fadaaa1f2df59a81a4"
  },
  {
    "url": "assets/js/16.34a789b7.js",
    "revision": "e7f21d259649e069c65b8e29801f96b8"
  },
  {
    "url": "assets/js/17.c224c358.js",
    "revision": "3b25d34ea8836987afa466b8a28c39b4"
  },
  {
    "url": "assets/js/18.53c91ce9.js",
    "revision": "40809f3282f5963ab2d0ec20ceb2e2c3"
  },
  {
    "url": "assets/js/19.3b9bc4e5.js",
    "revision": "d8d25ac6f66124548def7a58235969ed"
  },
  {
    "url": "assets/js/20.aed4c28e.js",
    "revision": "ab124798a931a56406afaae0211b041b"
  },
  {
    "url": "assets/js/21.f1b92f2f.js",
    "revision": "f85ef521b10d63b2223dc320edb7e42c"
  },
  {
    "url": "assets/js/22.22a319f2.js",
    "revision": "917c3f8261517182bfdf5331ec0e244d"
  },
  {
    "url": "assets/js/23.a2618f49.js",
    "revision": "74e95e1f70a743cc3ba07cad08981939"
  },
  {
    "url": "assets/js/24.c9d84aa7.js",
    "revision": "8a88ecfb6a807bf04ae7e701dae19eb0"
  },
  {
    "url": "assets/js/25.5d1e7c86.js",
    "revision": "d8d8b2e93135d3e7a6928cc6ecf430fb"
  },
  {
    "url": "assets/js/26.1e0494a9.js",
    "revision": "57b2db3cc9e43e152fc397c0b17499d5"
  },
  {
    "url": "assets/js/27.3eba4501.js",
    "revision": "409566c22f012b55caa2b084611fe620"
  },
  {
    "url": "assets/js/28.f45ddc71.js",
    "revision": "0013fefb616f6b49c3876aadf59f2199"
  },
  {
    "url": "assets/js/29.3a1d6ec5.js",
    "revision": "5f808d7a7de5516b1a0724cf97c87685"
  },
  {
    "url": "assets/js/3.6c1412a4.js",
    "revision": "a293904ac5c3ca38d87cfdd3b16ae80b"
  },
  {
    "url": "assets/js/30.121733e7.js",
    "revision": "fa5b535399cc9f4e4b7ff0411891db35"
  },
  {
    "url": "assets/js/4.bb4b4367.js",
    "revision": "8f10a8cbd5d3778c28e474da598cf2a8"
  },
  {
    "url": "assets/js/5.36c2d562.js",
    "revision": "f058c287eaaf0f017d53431df798ca8c"
  },
  {
    "url": "assets/js/6.ab259354.js",
    "revision": "5377557c6ff0d3cac681a7eb86ecb780"
  },
  {
    "url": "assets/js/7.acd723f7.js",
    "revision": "a2be8a4385c81e8113226578cadc2476"
  },
  {
    "url": "assets/js/8.1c35e04b.js",
    "revision": "d38f54849ce3e2c41038a2a6050785d3"
  },
  {
    "url": "assets/js/9.e45d4c64.js",
    "revision": "b2faf4ee06fe00e9fecb1efef4fd65f9"
  },
  {
    "url": "assets/js/app.b9380a3d.js",
    "revision": "c10fb42acedb64027ebf8d7359d4d0c5"
  },
  {
    "url": "assets/js/vendors~flowchart.debf4c03.js",
    "revision": "d033518a0557cf1606519954f7175edf"
  },
  {
    "url": "audition/css.html",
    "revision": "59a16e0b16d8df384b959d8236ea4876"
  },
  {
    "url": "audition/history.html",
    "revision": "71898203b1bedd2ae4e8ee22bf722e36"
  },
  {
    "url": "audition/html.html",
    "revision": "27f824c00f086ddcc1bc135cb975d79f"
  },
  {
    "url": "audition/index.html",
    "revision": "34c95b912c26b6f287a577dbdbf7caad"
  },
  {
    "url": "audition/js.html",
    "revision": "82b70f9492471630d1a1a817f8d660d1"
  },
  {
    "url": "audition/nodejs.html",
    "revision": "011ea116232069d196f487b6d34466e0"
  },
  {
    "url": "audition/react.html",
    "revision": "28392a46ba7cd525ac1ae7901820d296"
  },
  {
    "url": "audition/vue.html",
    "revision": "1d62e6e24b828d8d62231c23090f91fa"
  },
  {
    "url": "audition/webpack.html",
    "revision": "d4dae7ec408e4333fe1f094d8ceb0b70"
  },
  {
    "url": "audition/小程序.html",
    "revision": "928c5adaba6cfbfb63661442aba54fc2"
  },
  {
    "url": "blog/about-config/vuepress搭建网站踩坑.html",
    "revision": "b8c085e3f3fdd36486e7491882d878d4"
  },
  {
    "url": "blog/html-test/测试页面汇总.html",
    "revision": "8c7356f7d19062636eab4c977dee4526"
  },
  {
    "url": "blog/html-test/锚点功能测试.html",
    "revision": "2bf9750e7f46ec1f5d3db05e96189937"
  },
  {
    "url": "blog/index.html",
    "revision": "8f9638e8368139bca61cc74afbaf5b26"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "e08700109028c02dbb86f555761b3420"
  },
  {
    "url": "blog/standard/index.html",
    "revision": "fc4b004f55c52c5d8e3cc8a3504ef04d"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "4c9ecf12b318c47e34d4fe0991b263b2"
  },
  {
    "url": "Goal.html",
    "revision": "2c02a37e3a6abccd6ea3a57cfe7be7be"
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
    "revision": "639c5f748e2521845864ff3a8a629ee2"
  },
  {
    "url": "sharing/index.html",
    "revision": "5b12e28c50962dcc5889eafb7217cecf"
  },
  {
    "url": "test.png",
    "revision": "2f55c265bb23eccc4a02f4c20b1f0ebe"
  },
  {
    "url": "webstatic/2020-05-01-token-get.png",
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
