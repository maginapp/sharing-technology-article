
const download = require('download-git-repo');

// download('https://mygitlab.com:flippidippi/download-git-repo-fixture#my-branch', 'test/tmp', { clone: true }, function (err) {
//   console.log(err ? 'Error' : 'Success')
// })

// download('maginapp/vue-start', 'test2/start', { clone: true }, function (err) {
//   console.log(err ? 'Error' : 'Success')
// })

download('github.com:maginapp/vue-start', 'test4/start5', function (err) {
  console.log(err)
})