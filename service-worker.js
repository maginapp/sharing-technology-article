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
    "revision": "9676fadc2c470e6a73ca6354099d3715"
  },
  {
    "url": "assets/css/0.styles.a6438058.css",
    "revision": "faa0e2eb87b524e70cbb18822cd04ae2"
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
    "url": "assets/js/10.f17e4395.js",
    "revision": "cbebcbdfc578519b4905c90dbca9a436"
  },
  {
    "url": "assets/js/11.148a0b7b.js",
    "revision": "cd97ec7f1feac64476edaaf3d04a173f"
  },
  {
    "url": "assets/js/12.4fd23d62.js",
    "revision": "7714cff6093d45ba6f7da1303f75e5cc"
  },
  {
    "url": "assets/js/13.9d51d300.js",
    "revision": "b60f8874b1f9788a8a6b49f917e4d27d"
  },
  {
    "url": "assets/js/14.75be2728.js",
    "revision": "fe1f2ddb51a99c651aa0568935e1eb57"
  },
  {
    "url": "assets/js/15.fc5ac774.js",
    "revision": "70b204905cdd82ad570caa7ba1fcdc5c"
  },
  {
    "url": "assets/js/16.89d48e4c.js",
    "revision": "d8d4aabdca8327dcac8d26e2129ce608"
  },
  {
    "url": "assets/js/17.4d0d1e43.js",
    "revision": "4d2eb9d0a05e98ce24ec6cecfbd665bb"
  },
  {
    "url": "assets/js/18.103813df.js",
    "revision": "2194199906d865144384ced32ab1e745"
  },
  {
    "url": "assets/js/19.0030d9a9.js",
    "revision": "1c45b3ec9f21a7269199c03e035777d3"
  },
  {
    "url": "assets/js/20.5107ce27.js",
    "revision": "3b8fec0e773feaa4bf26f8c991a4ba2a"
  },
  {
    "url": "assets/js/21.4af5f3b3.js",
    "revision": "ad93e1700bfd23a7b6eb1be66f586ec7"
  },
  {
    "url": "assets/js/22.d0358dcf.js",
    "revision": "2dd3140d1140e827a31bb3278510c2e8"
  },
  {
    "url": "assets/js/23.b0637f34.js",
    "revision": "7d7cfbaca7f3ec69737cbca7dbe2fc45"
  },
  {
    "url": "assets/js/24.55b0e9f6.js",
    "revision": "49019c836a503d03dc14ca686b8e714a"
  },
  {
    "url": "assets/js/25.3bdb4a6c.js",
    "revision": "5395c89cc8892d5dc9a7522e3608f8d6"
  },
  {
    "url": "assets/js/26.11b29e71.js",
    "revision": "2fd85e0c74af9bb1f884cd74f044bd93"
  },
  {
    "url": "assets/js/27.3c42a8b8.js",
    "revision": "241fd8568429976eb38e7851634fbef6"
  },
  {
    "url": "assets/js/28.bbe4d765.js",
    "revision": "c1de45cb039a5b18f89f8cf6848f7a10"
  },
  {
    "url": "assets/js/29.793e90a8.js",
    "revision": "7494311a7e7327a1172bdce650bb66d6"
  },
  {
    "url": "assets/js/3.806a3dc6.js",
    "revision": "ab5cb4081501d4530ab3c16fced9ff45"
  },
  {
    "url": "assets/js/30.51c4c056.js",
    "revision": "bb1d0d4c41ca8b13e54342e6ec94cf71"
  },
  {
    "url": "assets/js/31.15161ee2.js",
    "revision": "3794cdfaf6c8d91ea5cf165ce25ee713"
  },
  {
    "url": "assets/js/32.8bfb1ff1.js",
    "revision": "952f5f80cb8ba48fa2ebcafe79b399e8"
  },
  {
    "url": "assets/js/33.ab687f97.js",
    "revision": "8e724d1e2409b26ed11955fdb8541260"
  },
  {
    "url": "assets/js/34.c1046b14.js",
    "revision": "2f3cf7db71f018f6fdd5a426d20541fc"
  },
  {
    "url": "assets/js/35.97b3e3fe.js",
    "revision": "7fd5b48130dd49d58d2a2641297fc011"
  },
  {
    "url": "assets/js/36.21ac0b72.js",
    "revision": "9e297053e01409592a8ad2815190e889"
  },
  {
    "url": "assets/js/37.2f9fce87.js",
    "revision": "ab950c258cc3c89568971e3f424ee5e6"
  },
  {
    "url": "assets/js/38.51693370.js",
    "revision": "3928a787ae4952c334e91cebd15bb0e9"
  },
  {
    "url": "assets/js/39.ab9aaea6.js",
    "revision": "6203d8a242c1218593e701cc00308daa"
  },
  {
    "url": "assets/js/4.9a6fe97a.js",
    "revision": "4d88bab21c42a8a92bebff7b3422569c"
  },
  {
    "url": "assets/js/40.43becaa4.js",
    "revision": "cded1c26abb2e4a4fe714264f2193f2a"
  },
  {
    "url": "assets/js/41.9452d011.js",
    "revision": "f27dc0ef30d68ec7e52014377c28f8fb"
  },
  {
    "url": "assets/js/42.b3d8c80e.js",
    "revision": "55cc7ecaf531de26493f09e3a6d96045"
  },
  {
    "url": "assets/js/43.85effa29.js",
    "revision": "a3c4aefb91dbbb2487d4340d86ef2075"
  },
  {
    "url": "assets/js/44.94e62157.js",
    "revision": "0fc2d056b68e5c29cd358565421a9adf"
  },
  {
    "url": "assets/js/45.51cf8bbd.js",
    "revision": "d0b2a0f76cad7846dbaaaab1920e4e08"
  },
  {
    "url": "assets/js/46.5cfeaae2.js",
    "revision": "5f57ec9be620cb3f32191b3e9c7f21a6"
  },
  {
    "url": "assets/js/47.598ea3d5.js",
    "revision": "8b070c6af54a535d7bd7840b637f4340"
  },
  {
    "url": "assets/js/48.ee08855d.js",
    "revision": "d299efb1ad2fcc4541ba1364d26d833a"
  },
  {
    "url": "assets/js/49.7bace426.js",
    "revision": "b91c75b6b26604334eab89713b6f7223"
  },
  {
    "url": "assets/js/5.64f53352.js",
    "revision": "4b0af09fd13efdb3647e6891e9a04854"
  },
  {
    "url": "assets/js/50.82d7917b.js",
    "revision": "dec48ed351467409a7a2b686798b4cd0"
  },
  {
    "url": "assets/js/51.e7b1d163.js",
    "revision": "0b61cedc31c5f8aa86422adb7ec53124"
  },
  {
    "url": "assets/js/52.45687394.js",
    "revision": "b80eb8ef18bede0a273d27998dfdbb60"
  },
  {
    "url": "assets/js/53.a1334c43.js",
    "revision": "ad3d67a7087451ee240477c60e0aa985"
  },
  {
    "url": "assets/js/54.fcd729bf.js",
    "revision": "f3ddd7b680c702cf6e7c23ea71e38429"
  },
  {
    "url": "assets/js/55.e00ed74e.js",
    "revision": "905f35fe3cdb4c7943007dd493e53145"
  },
  {
    "url": "assets/js/56.c08252e2.js",
    "revision": "8af128a6abc6b63f9e5a8a12c1591e0c"
  },
  {
    "url": "assets/js/57.2b4a68a8.js",
    "revision": "2ef10df0ebbc6a7d8816be5b0e4adef1"
  },
  {
    "url": "assets/js/58.c6de4d44.js",
    "revision": "2ecdb61e7eeec8570e60926c60606f26"
  },
  {
    "url": "assets/js/59.fa90064c.js",
    "revision": "fcd3b351c6cf4083ac3b18e9f354bdde"
  },
  {
    "url": "assets/js/6.985a9566.js",
    "revision": "3cfb60824bfb51b2a869320100c6dc8a"
  },
  {
    "url": "assets/js/60.39de47dd.js",
    "revision": "1a504842a89873d233e4bb381c946d7d"
  },
  {
    "url": "assets/js/61.8609d9a1.js",
    "revision": "311a40b53656ad8c7a5c93d7ccc3f2c4"
  },
  {
    "url": "assets/js/7.2c8d7f02.js",
    "revision": "050ef43647d751b4d64dc67d10baa2ed"
  },
  {
    "url": "assets/js/8.c5f959a7.js",
    "revision": "a0f165cc09260d335116a1b5f20bf4ac"
  },
  {
    "url": "assets/js/9.e3dcb9a0.js",
    "revision": "40984106dce3f3f789edf4b85a67f8ca"
  },
  {
    "url": "assets/js/app.ba8b9b4a.js",
    "revision": "e51e10adafd42e77ae8cc918ae439e00"
  },
  {
    "url": "assets/js/vendors~flowchart.16e34617.js",
    "revision": "2bde1976bbf9e7e2f108bccb37f75be3"
  },
  {
    "url": "blog/about-config/vscode-multi-column.html",
    "revision": "73e23f5928221d546249101e284adf5f"
  },
  {
    "url": "blog/about-config/vuepress-github-website.html",
    "revision": "6dcfefd4d3ad924448b033183bb68faf"
  },
  {
    "url": "blog/about-config/vuepress-plugin-introduce.html",
    "revision": "1d520be34c5f294900d1a636ce2861f9"
  },
  {
    "url": "blog/frontend-records/css/sticky.html",
    "revision": "8358f99abe8ce381ad6788a28faf54ea"
  },
  {
    "url": "blog/frontend-records/ecmascript.html",
    "revision": "b528aec7c496f76a64964f9bd3b54c06"
  },
  {
    "url": "blog/frontend-records/image-gif.html",
    "revision": "5af32252b9f8cea475ba3565815dc6a9"
  },
  {
    "url": "blog/frontend-records/image-sharp.html",
    "revision": "1b0990243fdf1c83aabcba63c462af74"
  },
  {
    "url": "blog/frontend-records/pwa-webpush.html",
    "revision": "52d1d31100246b150da59c4ea7005f26"
  },
  {
    "url": "blog/frontend-records/special-css.html",
    "revision": "13ca4cb154a4bac48f6efef9dfe05b35"
  },
  {
    "url": "blog/html-test/hash-test.html",
    "revision": "0f4b573c54e053fefe6f56f21eb01cbd"
  },
  {
    "url": "blog/html-test/just-test.html",
    "revision": "e092d2e87dbc8ecf8ba30c9b48ed3d41"
  },
  {
    "url": "blog/html-test/summary-test.html",
    "revision": "86bd693cf2b0037a25e3797448a1f47d"
  },
  {
    "url": "blog/index.html",
    "revision": "2db0039c7574c86ef8d9770e3f4ef576"
  },
  {
    "url": "blog/node-server/koa-bodyParser-myself.html",
    "revision": "78ab9cd3315c4ad313743a77e4b13b06"
  },
  {
    "url": "blog/node-server/koa-middleware.html",
    "revision": "172084532b65b680e0ec370e32bc827f"
  },
  {
    "url": "blog/node-server/koa-mysql.html",
    "revision": "94c9b45878010a60b90b905c49b0416b"
  },
  {
    "url": "blog/node-server/koa-router.html",
    "revision": "d8d6d207cc8110e94f1d511a9dde13a8"
  },
  {
    "url": "blog/node-server/koa-server-init.html",
    "revision": "041802d36632cba020e99bd2e140558c"
  },
  {
    "url": "blog/node-server/node-crawler.html",
    "revision": "731fb4ac30113ce5ecca6aee45ea04b8"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "a0656a0b9983d11a22b562b0ec44cf84"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "0f6da93291285aee0b0a25fa005fb4f7"
  },
  {
    "url": "blog/vue/promote-of-vue.html",
    "revision": "e5209c9f50c7fa290bba558e62b819d1"
  },
  {
    "url": "blog/vue/vue3-diff.html",
    "revision": "664ee48a861268d16e9da97892a875c1"
  },
  {
    "url": "blog/vue/vue3-effect-api.html",
    "revision": "f5636d96e51474b7bb403b3c5e1fd20d"
  },
  {
    "url": "blog/vue/vue3-introduce.html",
    "revision": "f16b31a7243c34f00a388122321a4ee2"
  },
  {
    "url": "blog/vue/vue3-lifecycle.html",
    "revision": "d3754063c9be22506f11b73dc4b067ad"
  },
  {
    "url": "blog/vue/vue3-reactive.html",
    "revision": "95b9a734da47606de6342724a2c0ec36"
  },
  {
    "url": "blog/vue/vue3-render.html",
    "revision": "523f5a1c6d72e26a0fd7bbcfdbb4a4b7"
  },
  {
    "url": "blog/vue/vue3-scheduler.html",
    "revision": "2c33e5368158aded991702fb3bfb33fe"
  },
  {
    "url": "blog/vue/vue3-vnode.html",
    "revision": "893ea1a750fdf7191d314065b49c1704"
  },
  {
    "url": "Goal.html",
    "revision": "5889cd493fca5437415e892dba8a362a"
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
    "revision": "698b5df293e913ffc4cf43e94ee5b33f"
  },
  {
    "url": "interview/css.html",
    "revision": "7c797083d0a07295f39a0bf0545d1d53"
  },
  {
    "url": "interview/history.html",
    "revision": "8066a619ae3b478a9aa75484dddc4dfa"
  },
  {
    "url": "interview/html.html",
    "revision": "125f12a7e1860f1ca3ebc8d0b9756838"
  },
  {
    "url": "interview/index.html",
    "revision": "6228982f7b1a6655ff9edb6869500c05"
  },
  {
    "url": "interview/js.html",
    "revision": "c56cafddc9cbc915b58fabc34c37219e"
  },
  {
    "url": "interview/nodejs.html",
    "revision": "241d679a284d60e1e2fef0c258481c3a"
  },
  {
    "url": "interview/OLDREADME.html",
    "revision": "a93261394c7c3d36b132ef47703c2731"
  },
  {
    "url": "interview/quote.html",
    "revision": "503623e6f9ee6c677f1423a45391f267"
  },
  {
    "url": "interview/react.html",
    "revision": "0b1a2893ba112387af5c3c8272a68bec"
  },
  {
    "url": "interview/vue.html",
    "revision": "f24322f2be595e50a2f48a0319618670"
  },
  {
    "url": "interview/webpack.html",
    "revision": "6012e1eb6bc411121addb6f92785712a"
  },
  {
    "url": "interview/小程序.html",
    "revision": "57e539b2dd4bf4e2c130e8aec12323a5"
  },
  {
    "url": "sharing/index.html",
    "revision": "da729fd7628f3b0986c2835a2cbe8004"
  },
  {
    "url": "sharing/sharing-blog.html",
    "revision": "06b5366dfee89a447a9e244b89f55853"
  },
  {
    "url": "sharing/software.html",
    "revision": "19da1583feb54c7a508fbed389a6650c"
  },
  {
    "url": "sharing/utils-web.html",
    "revision": "dee5f557a40067fd8de43d302b31b211"
  },
  {
    "url": "test.png",
    "revision": "7576bc4c1260c05485c5adec94a0cc25"
  },
  {
    "url": "Todo.html",
    "revision": "b39b330ddf31071035de093bb696337b"
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
