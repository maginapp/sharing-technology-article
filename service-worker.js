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
    "revision": "cc49aaf5903da838a8fe328fbde05cc5"
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
    "url": "assets/js/10.cf71462a.js",
    "revision": "075d85105ac1cf42b6fa600e845317e2"
  },
  {
    "url": "assets/js/11.f080d5a9.js",
    "revision": "f85a34ab45937993029b65437d731f5c"
  },
  {
    "url": "assets/js/12.2c80440e.js",
    "revision": "cdeeab31d4141e9b6cab2755a8483b3b"
  },
  {
    "url": "assets/js/13.b89a14d5.js",
    "revision": "1c5d857eef1e55c1873519472f2f7de9"
  },
  {
    "url": "assets/js/14.684108ce.js",
    "revision": "36fa9c12751facd701ec34707b6f3098"
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
    "url": "assets/js/17.40eae331.js",
    "revision": "f05957512b52290a5469b8885858809b"
  },
  {
    "url": "assets/js/18.4b7375e2.js",
    "revision": "08a0915420182ab6cc25a4d6c8248475"
  },
  {
    "url": "assets/js/19.354b93b8.js",
    "revision": "32b29f2211160829ed92a6e71da75691"
  },
  {
    "url": "assets/js/20.30f4e97a.js",
    "revision": "bd968fb3b5ac2973753edaf3cab83b0f"
  },
  {
    "url": "assets/js/21.8986a248.js",
    "revision": "30dcf82e662ba5efe8244bbbc2d713e3"
  },
  {
    "url": "assets/js/22.5d757bf9.js",
    "revision": "63e8db80833731f27917c071dbfa1989"
  },
  {
    "url": "assets/js/23.6aede9b6.js",
    "revision": "d5269d604fbbba612bcc7b2bab5961de"
  },
  {
    "url": "assets/js/24.97901f88.js",
    "revision": "3834ae46cd1af48fb9377b89a15862a9"
  },
  {
    "url": "assets/js/25.6b594106.js",
    "revision": "02daa62d948f941c41b9a0a18c52497c"
  },
  {
    "url": "assets/js/26.16b6f9f6.js",
    "revision": "3c4da7804e60ebd89d152acda7e9410c"
  },
  {
    "url": "assets/js/27.e097520c.js",
    "revision": "445763108c9463f6c3497b12137a4c23"
  },
  {
    "url": "assets/js/28.6fa513f0.js",
    "revision": "ec26e129dd02375b1fbfcae2ed366939"
  },
  {
    "url": "assets/js/29.9ddc4e65.js",
    "revision": "5172cdc41c82e2e72af58b56c3f99186"
  },
  {
    "url": "assets/js/3.806a3dc6.js",
    "revision": "ab5cb4081501d4530ab3c16fced9ff45"
  },
  {
    "url": "assets/js/30.5a635834.js",
    "revision": "1bca4e509116a03d788dcdd4f89c8bcb"
  },
  {
    "url": "assets/js/31.73619865.js",
    "revision": "f3460394a18b7171037d176329082fc5"
  },
  {
    "url": "assets/js/32.22f4b882.js",
    "revision": "bac03bc5d6e6c16ebe5b95cdf31f63bf"
  },
  {
    "url": "assets/js/33.c9c11749.js",
    "revision": "cdf1fe84e10209814fc688c3d7c0ecb3"
  },
  {
    "url": "assets/js/34.ed8d9b3e.js",
    "revision": "ad63d75e6aca5114885fb5b73c3e2098"
  },
  {
    "url": "assets/js/35.68187c6e.js",
    "revision": "bc219e650fd0f975ecdc83cdf7ae401b"
  },
  {
    "url": "assets/js/36.be5f5bda.js",
    "revision": "a24efe7cd0d47a949c23bccc72054fc1"
  },
  {
    "url": "assets/js/37.7e8dbbbe.js",
    "revision": "ae26d152e8acae4fc8bbc34e8b36d976"
  },
  {
    "url": "assets/js/38.8f498684.js",
    "revision": "13c33d4448a6191debecfeae2c8bce7a"
  },
  {
    "url": "assets/js/39.f6ba84aa.js",
    "revision": "0203a699090f59a5186c06183ada661a"
  },
  {
    "url": "assets/js/4.9a6fe97a.js",
    "revision": "4d88bab21c42a8a92bebff7b3422569c"
  },
  {
    "url": "assets/js/40.d9639a7a.js",
    "revision": "58438cc783de78540fbf1b2b8d6b7209"
  },
  {
    "url": "assets/js/41.dd74cbc2.js",
    "revision": "453406eb27c55149c1ce05deb1bb658f"
  },
  {
    "url": "assets/js/42.4d77639a.js",
    "revision": "5b1286b3af43a508f40965bef12f6043"
  },
  {
    "url": "assets/js/43.524bcecd.js",
    "revision": "036fa8cf804840e8c52d23330769ed90"
  },
  {
    "url": "assets/js/44.729012a1.js",
    "revision": "d6f0cefd4e60414862a6bc7919d1b8c0"
  },
  {
    "url": "assets/js/45.91e804d6.js",
    "revision": "198d8a17e210bfe1b0de81a31b54e5ef"
  },
  {
    "url": "assets/js/46.e2cc9d4d.js",
    "revision": "88800b989c455e4599ed3e03eef304ca"
  },
  {
    "url": "assets/js/47.92ce67f1.js",
    "revision": "5eb5a189152c212849854d0a9fca6920"
  },
  {
    "url": "assets/js/48.2bcd47d8.js",
    "revision": "e0e69753592f54290690d04e5aa311f1"
  },
  {
    "url": "assets/js/49.c0f8f2ad.js",
    "revision": "a9defb265d6fb011b93829debc4e08b0"
  },
  {
    "url": "assets/js/5.64f53352.js",
    "revision": "4b0af09fd13efdb3647e6891e9a04854"
  },
  {
    "url": "assets/js/50.d0c05d0c.js",
    "revision": "0001b92cc0ee94da55d908c9dc58bec5"
  },
  {
    "url": "assets/js/51.530ebacb.js",
    "revision": "096f65790312513716504c7cb305f007"
  },
  {
    "url": "assets/js/52.50b7b343.js",
    "revision": "42fa5ad2dfdba2b753d2b93c78da3038"
  },
  {
    "url": "assets/js/53.e9d3e07e.js",
    "revision": "438491b6ed0d7ebe38483b2b3a629d66"
  },
  {
    "url": "assets/js/54.a27f4534.js",
    "revision": "3bd2cc48b9c00ba8ba9e87fa6cc6420b"
  },
  {
    "url": "assets/js/55.a7f51cb7.js",
    "revision": "4ac1f8961ae233c3b8b4a7e888d16f0e"
  },
  {
    "url": "assets/js/56.781619a4.js",
    "revision": "b3dd771213373cf9c3335ee860eba26f"
  },
  {
    "url": "assets/js/57.563b56ac.js",
    "revision": "59aa36ea7f736a6ccc231f314a8342b2"
  },
  {
    "url": "assets/js/58.ee5d460b.js",
    "revision": "85505925b0af8c50e0d7158b8f7c3b5b"
  },
  {
    "url": "assets/js/59.71a02791.js",
    "revision": "69f4715773e806e75ebdec64238128e6"
  },
  {
    "url": "assets/js/6.b934b1c2.js",
    "revision": "899803b62f25ae73119edbfd0bb16b9e"
  },
  {
    "url": "assets/js/60.b5d16263.js",
    "revision": "fc498469b557bb4328373183d42c3752"
  },
  {
    "url": "assets/js/61.935787ca.js",
    "revision": "3f25a8cbbffe97a14b82c8882e396a70"
  },
  {
    "url": "assets/js/62.0c760f90.js",
    "revision": "9b1223b7ea777d8701658c979ecebcb0"
  },
  {
    "url": "assets/js/63.0476a07b.js",
    "revision": "00c8c30fb66f79350d000f2b8bda8bd2"
  },
  {
    "url": "assets/js/64.ad07c592.js",
    "revision": "243c7702c73e7e79abfdd9c3e15523cc"
  },
  {
    "url": "assets/js/65.f41f6c86.js",
    "revision": "4a726c3ac0b82210a631be37cf9c8ef6"
  },
  {
    "url": "assets/js/66.cd02a142.js",
    "revision": "eb4cdf3cee7fd68b74e97e1e350a0c86"
  },
  {
    "url": "assets/js/67.0fdb719f.js",
    "revision": "195cd3b9998a34415d7257976d537825"
  },
  {
    "url": "assets/js/7.ff28708b.js",
    "revision": "567aa603e1418e13b344f2184ce83600"
  },
  {
    "url": "assets/js/8.47bb4ac7.js",
    "revision": "df25f3abb56080bbf9d7a7919c89c54f"
  },
  {
    "url": "assets/js/9.6148fa05.js",
    "revision": "37006c08df6955a01280e3282a951a6a"
  },
  {
    "url": "assets/js/app.6a25dd10.js",
    "revision": "6280343c29ab1f1ed56b47246964d6d8"
  },
  {
    "url": "assets/js/vendors~flowchart.16e34617.js",
    "revision": "2bde1976bbf9e7e2f108bccb37f75be3"
  },
  {
    "url": "blog/about-config/vscode-multi-column.html",
    "revision": "bf1d9d3eccf21b120468b2dec3ab7b36"
  },
  {
    "url": "blog/about-config/vuepress-flowchart.html",
    "revision": "797314e6b304393b4df556300e3a41a2"
  },
  {
    "url": "blog/about-config/vuepress-github-website.html",
    "revision": "769acf8e7d48cd2d1501656dba79cd86"
  },
  {
    "url": "blog/about-config/vuepress-plugin-introduce.html",
    "revision": "84bea66984683e7589b0544ee7b9f732"
  },
  {
    "url": "blog/about-config/vuepress-toc.html",
    "revision": "55bb5759100b3584cd98755fcd720fd6"
  },
  {
    "url": "blog/frontend-records/css/sticky.html",
    "revision": "e634329b2b4482f177cb51fa3f43db9e"
  },
  {
    "url": "blog/frontend-records/ecmascript.html",
    "revision": "40eaf5e5d12eab0fabcd84379afb21f5"
  },
  {
    "url": "blog/frontend-records/image-gif.html",
    "revision": "cb672fd55b259ec0a2ef72bee3e342f7"
  },
  {
    "url": "blog/frontend-records/image-sharp.html",
    "revision": "0a1b7d4a3de570d295637352f8dc8e94"
  },
  {
    "url": "blog/frontend-records/pwa-webpush.html",
    "revision": "0cdcacd33dbae34a1ce55b414ca62d3c"
  },
  {
    "url": "blog/frontend-records/special-css.html",
    "revision": "0a9072d217b7da7be1b0fe6925f36124"
  },
  {
    "url": "blog/html-test/hash-test.html",
    "revision": "096ad1f8ee462b8fb5571a82ec3519a2"
  },
  {
    "url": "blog/html-test/just-test.html",
    "revision": "c59540403ca858d5f298654018017f15"
  },
  {
    "url": "blog/html-test/summary-test.html",
    "revision": "fa159633f409efb66974f7147213bab6"
  },
  {
    "url": "blog/index.html",
    "revision": "0b329445c999a1c382dab322acde3e5e"
  },
  {
    "url": "blog/node-server/koa-bodyParser-myself.html",
    "revision": "f34ca8a8ae0cf5d7d94ca4cd7aa7b3e7"
  },
  {
    "url": "blog/node-server/koa-middleware.html",
    "revision": "5ae7153889666a4624a22bf26809f8fc"
  },
  {
    "url": "blog/node-server/koa-mysql.html",
    "revision": "555ba6912b77c08b274a18b852877ffc"
  },
  {
    "url": "blog/node-server/koa-router.html",
    "revision": "af18fe608a34b7e8cf08ab864f92a190"
  },
  {
    "url": "blog/node-server/koa-server-init.html",
    "revision": "6e5da8b806cf277ecdfbdf372a7a369f"
  },
  {
    "url": "blog/node-server/koa-toc.html",
    "revision": "0cf4e830c0b32b2fe64dd23e66e70780"
  },
  {
    "url": "blog/node-server/node-crawler.html",
    "revision": "a273790db4f42e020233476d4cfe8e15"
  },
  {
    "url": "blog/standard/css-BEM.html",
    "revision": "022660f9b2590f4955ee9e7186f8715e"
  },
  {
    "url": "blog/standard/git-commit.html",
    "revision": "9fd987342c959e23838d62cff7f2ad42"
  },
  {
    "url": "blog/standard/internet.html",
    "revision": "48f68fb887125626732f681c57ce2c63"
  },
  {
    "url": "blog/vue/promote-of-vue.html",
    "revision": "8cc189ea65df7fc7377ed076a65294aa"
  },
  {
    "url": "blog/vue/vue3-diff.html",
    "revision": "a5c92653898bb6207b6515f27088e10e"
  },
  {
    "url": "blog/vue/vue3-effect-api.html",
    "revision": "89beaeb4e1357cce5f69ead8964a0f14"
  },
  {
    "url": "blog/vue/vue3-introduce.html",
    "revision": "60430e008084a6ea44b50e95c2cdcb2a"
  },
  {
    "url": "blog/vue/vue3-lifecycle.html",
    "revision": "b87d04a9a7edac905d47ea8bc402d930"
  },
  {
    "url": "blog/vue/vue3-parse-doc.html",
    "revision": "a9634853f8a1d3c047c94c8c29841fa8"
  },
  {
    "url": "blog/vue/vue3-reactive.html",
    "revision": "fb1b6b09926d33a489ed9513aa8c9289"
  },
  {
    "url": "blog/vue/vue3-render.html",
    "revision": "04fb25c84ccaec384c47deb189a085b6"
  },
  {
    "url": "blog/vue/vue3-scheduler.html",
    "revision": "fa2d56ff06b812f06aac259a78e9fde5"
  },
  {
    "url": "blog/vue/vue3-vnode.html",
    "revision": "4f1fb4ea6510e64522111b076b728922"
  },
  {
    "url": "Goal.html",
    "revision": "49c039483a2b4f8697f0575874bb3d50"
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
    "url": "images/quote/bem_css_github_captions.jpg",
    "revision": "b25efb05f14773623fd48e13486f50fa"
  },
  {
    "url": "index.html",
    "revision": "03cde283cfa0aa509e52833a7c843a2e"
  },
  {
    "url": "interview/css.html",
    "revision": "4cd36fb53c75e2a55943ee36a66f5466"
  },
  {
    "url": "interview/history.html",
    "revision": "74f1167bdabfffee670ce24feb57c3c8"
  },
  {
    "url": "interview/html.html",
    "revision": "a853838e8d829182a6672b26f1b38505"
  },
  {
    "url": "interview/index.html",
    "revision": "e6a9e16f1b9a5bb5fe17e0f70dcf7048"
  },
  {
    "url": "interview/js.html",
    "revision": "ae515b8acfa7a72a96be912883d793ec"
  },
  {
    "url": "interview/nodejs.html",
    "revision": "6f1a180d42f2933d1fe901947497fd29"
  },
  {
    "url": "interview/OLDREADME.html",
    "revision": "79b09c43f2576cd3b580149d11bcffa3"
  },
  {
    "url": "interview/quote.html",
    "revision": "e99d1517f8ddb1e6ce90bf652a4711a1"
  },
  {
    "url": "interview/react.html",
    "revision": "5928008d7746c4ded7f006f0cbb68ff4"
  },
  {
    "url": "interview/vue.html",
    "revision": "0578c793b03fee1e8788f439a94a290b"
  },
  {
    "url": "interview/webpack.html",
    "revision": "64617056b41dde5aa588687d5ae38297"
  },
  {
    "url": "interview/小程序.html",
    "revision": "776326ba953cd1320768f1ac4b0f40e5"
  },
  {
    "url": "sharing/index.html",
    "revision": "43a3acdae2b9dcbe6b3654feb6089efa"
  },
  {
    "url": "sharing/sharing-blog.html",
    "revision": "e3a7166c64cf87c25b702f2adbb74968"
  },
  {
    "url": "sharing/software.html",
    "revision": "7d8115b8a892d684295f1841eeaadfaf"
  },
  {
    "url": "sharing/utils-web.html",
    "revision": "ee8d533cb94b7fee795a8022ec6a0888"
  },
  {
    "url": "sharing/utils.html",
    "revision": "2ca4fc0e8d1fe1ef63d1c80bdcf462f1"
  },
  {
    "url": "test.png",
    "revision": "7576bc4c1260c05485c5adec94a0cc25"
  },
  {
    "url": "Todo.html",
    "revision": "c2d3d78daa2e5b4475753b6adfd70b63"
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
