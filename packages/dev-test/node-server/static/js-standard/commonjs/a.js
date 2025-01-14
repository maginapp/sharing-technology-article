exports.a1 = true;
const b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.a2 = true;
const fn = require('./c.js');
console.log(module)
{/* <ref *1> Module {
  id: '.',
  path: 'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard',
  exports: { a1: true, a2: true },
  parent: null,
  filename: 'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard\\a.js',
  loaded: false,
  children: [
    Module {
      id: 'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard\\b.js',
      path: 'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard',
      exports: [Object],
      parent: [Circular *1],
      filename: 'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard\\b.js',
      loaded: true,
      children: [Array],
      paths: [Array]
    }
  ],
  paths: [
    'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard\\node_modules',
    'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\node_modules',
    'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\node_modules',
    'E:\\study\\maginapp-sharing-technology-article\\test\\node_modules',
    'E:\\study\\maginapp-sharing-technology-article\\node_modules',   
    'E:\\study\\node_modules',
    'E:\\node_modules'
  ]
} */}
console.log(require.cache)

// [Object: null prototype] {
//   'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard\\a.js': Module {
//     id: '.',
//     path: 'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard',
//     exports: { a1: true, a2: true },
//     parent: null,
//     filename: 'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard\\a.js',
//     loaded: false,
//     children: [ [Module] ],
//     paths: [
//       'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard\\node_modules',
//       'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\node_modules',
//       'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\node_modules',
//       'E:\\study\\maginapp-sharing-technology-article\\test\\node_modules',
//       'E:\\study\\maginapp-sharing-technology-article\\node_modules', 
//       'E:\\study\\node_modules',
//       'E:\\node_modules'
//     ]
//   },
//   'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard\\b.js': Module {
//     id: 'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard\\b.js',
//     path: 'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard',
//     exports: { b1: 2 },
//     parent: Module {
//       id: '.',
//       path: 'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard',
//       exports: [Object],
//       parent: null,
//       filename: 'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard\\a.js',
//       loaded: false,
//       children: [Array],
//       paths: [Array]
//     },
//     filename: 'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard\\b.js',
//     loaded: true,
//     children: [ [Module] ],
//     paths: [
//       'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\js-standard\\node_modules',
//       'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\static\\node_modules',
//       'E:\\study\\maginapp-sharing-technology-article\\test\\node-server\\node_modules',
//       'E:\\study\\maginapp-sharing-technology-article\\test\\node_modules',
//       'E:\\study\\maginapp-sharing-technology-article\\node_modules', 
//       'E:\\study\\node_modules',
//       'E:\\node_modules'
//     ]
//   }
// }