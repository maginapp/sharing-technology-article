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
    "revision": "e94e0e2701b4871280fd859d063fc67f"
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
    "url": "assets/js/17.69c7200e.js",
    "revision": "da79876a4533b38ab96843928143b4e9"
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
    "url": "assets/js/40.d70798da.js",
    "revision": "122a890ea75a9c8295a5ef698f2b29bb"
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
    "url": "assets/js/app.2befd897.js",
    "revision": "e45495a50f7c88f4dacdc3605588dce8"
  },
  {
    "url": "assets/js/vendors~flowchart.16e34617.js",
    "revision": "2bde1976bbf9e7e2f108bccb37f75be3"
  },
  {
    "url": "blog/about-config/vscode-multi-column.html",
    "revision": "806cd64e51121037d8373355da0c1676"
  },
  {
    "url": "blog/about-config/vuepress-github-website.html",
    "revision": "210006a47735959b489a74a0cc78cf7c"
  },
  {
    "url": "blog/about-config/vuepress-plugin-introduce.html",
    "revision": "e7b17482d6a4361c46dd316466facd8c"
  },
  {
    "url": "blog/frontend-records/css/sticky.html",
    "revision": "21021158f06b48c39cc5948e9f2d0785"
  },
  {
    "url": "blog/frontend-records/ecmascript.html",
    "revision": "45687af83a884fbb28a0005839f0c835"
  },
  {
    "url": "blog/frontend-records/image-gif.html",
    "revision": "30a38535ed99fa1f4a56aeae6fda8d87"
  },
  {
    "url": "blog/frontend-records/image-sharp.html",
    "revision": "78be4e059819f46e8a13f11d27851c8f"
  },
  {
    "url": "blog/frontend-records/pwa-webpush.html",
    "revision": "b462d05f30c6f5cf2413430d06b61c7f"
  },
  {
    "url": "blog/frontend-records/special-css.html",
    "revision": "6f19d6a9bbf7c637d0185749ef698ec2"
  },
  {
    "url": "blog/html-test/hash-test.html",
    "revision": "9ba28c6d9f8edfd2be2c67cd66638d4e"
  },
  {
    "url": "blog/html-test/just-test.html",
    "revision": "558fe70d9c0cebdc2f1da0ad7e900e9a"
  },
  {
    "url": "blog/html-test/summary-test.html",
    "revision": "64fc35a2ad294322b20853d5506e85f0"
  },
  {
    "url": "blog/index.html",
    "revision": "b84c40caaa91ae9d0fe8cdd23b2cc1f4"
  },
  {
    "url": "blog/node-server/koa-bodyParser-myself.html",
    "revision": "100483764d729a555fb56d4edeb2d1e8"
  },
  {
    "url": "blog/node-server/koa-middleware.html",
    "revision": "1cb5495b9239d9c5028ee11789a260c5"
  },
  {
    "url": "blog/node-server/koa-mysql.html",
    "revision": "5a23b6f825bd8275108faa904e485ad5"
  },
  {
    "url": "blog/node-server/koa-router.html",
    "revision": "086cfbcbef6fb1d34d49b8536543e885"
  },
  {
    "url": "blog/node-server/koa-server-init.html",
    "revision": "c0b5ec71fc9c9da9ffe5f5c6f7f8697c"
  },
  {
    "url": "blog/node-server/node-crawler.html",
    "revision": "f5c48c0629de8792b412a33ee0db4366"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "9e1fd1a0397a22ceea70c042abd82fd2"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "19692944dfb6d577a36d38ffa11f5a2c"
  },
  {
    "url": "blog/vue/promote-of-vue.html",
    "revision": "83f7f05c21d73cb7f8b1000b66303f7b"
  },
  {
    "url": "blog/vue/vue3-diff.html",
    "revision": "3c10ae00738c3bc48c36685005b393dd"
  },
  {
    "url": "blog/vue/vue3-effect-api.html",
    "revision": "309808a5e3d5a9e1ce356940f77c16b7"
  },
  {
    "url": "blog/vue/vue3-introduce.html",
    "revision": "ff0a42297e6c595f8bd679abb0a300d5"
  },
  {
    "url": "blog/vue/vue3-lifecycle.html",
    "revision": "fcf401c98511bce5a2fd794887e748a6"
  },
  {
    "url": "blog/vue/vue3-reactive.html",
    "revision": "d1687ddb188645517675e26e59187691"
  },
  {
    "url": "blog/vue/vue3-render.html",
    "revision": "e9fe79ae2df8e1cc0bc2291810d3ff7c"
  },
  {
    "url": "blog/vue/vue3-scheduler.html",
    "revision": "301923733626dae1df0afbbe864a3ae0"
  },
  {
    "url": "blog/vue/vue3-vnode.html",
    "revision": "cb6fbadc7a535fdaf5f75125262e42d6"
  },
  {
    "url": "Goal.html",
    "revision": "60184fc1a8fe471e104072f61851e2b3"
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
    "revision": "ea40b1f4b22b31bd26f3b0660f78d8bf"
  },
  {
    "url": "interview/css.html",
    "revision": "bb2a3d0e95267bf7b1c37b7e270cadae"
  },
  {
    "url": "interview/history.html",
    "revision": "84022bb0b8921b17b858cc992f2d9009"
  },
  {
    "url": "interview/html.html",
    "revision": "9ca96217c0f1e7c62397cc8f9608447b"
  },
  {
    "url": "interview/index.html",
    "revision": "94b06b69e8a28c336d0e4c52d75e65f0"
  },
  {
    "url": "interview/js.html",
    "revision": "ebb4172aa9fec15e4d3bbc7d66f59a14"
  },
  {
    "url": "interview/nodejs.html",
    "revision": "0b183c6af6470485afd3798d7a73e06f"
  },
  {
    "url": "interview/OLDREADME.html",
    "revision": "a3ae7b2c75807e6cc6e2e02e77a90d30"
  },
  {
    "url": "interview/quote.html",
    "revision": "924d52b9a5a34ac92c806d9947e5fbe5"
  },
  {
    "url": "interview/react.html",
    "revision": "cdfd2a52150fdc755f8e29d490bc6022"
  },
  {
    "url": "interview/vue.html",
    "revision": "36eb38f53021c1f0991405d46810a461"
  },
  {
    "url": "interview/webpack.html",
    "revision": "bcb5f343b56805d062b49a1154445bd4"
  },
  {
    "url": "interview/小程序.html",
    "revision": "cae3235f4a0b15714b13a5d754325f37"
  },
  {
    "url": "sharing/index.html",
    "revision": "2c3bf286453e1d6318a2e94ec4a0c9d9"
  },
  {
    "url": "sharing/sharing-blog.html",
    "revision": "6b730e5a6fe650aadcd1a03a417c7e6a"
  },
  {
    "url": "sharing/software.html",
    "revision": "be3710932e8ebe3cf06852c434b224f7"
  },
  {
    "url": "sharing/utils-web.html",
    "revision": "30d6e5198683d7d34a206f8bdc08126a"
  },
  {
    "url": "test.png",
    "revision": "7576bc4c1260c05485c5adec94a0cc25"
  },
  {
    "url": "Todo.html",
    "revision": "d364ac003fdd88a253e7b8f24eeaf8c7"
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
