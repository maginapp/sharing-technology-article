const fs = require('fs')

fs.open('./open-file.loc', 'w', function(err) {
  if (err) return console.error(err);
  //这里开始可以放心的读写文件
  fs.writeFile('./open-file', 'test 10000' ,(err) => console.log(err))
});

fs.open('./open-file.loc', 'wx', function(err) {
  if (err) return console.error(err, 2);
  //这里开始可以放心的读写文件
  fs.writeFile('./open-file', 'test1' ,(err) => {
    if (err) console.log(err, 2)
  })
});

const http = require('http')

http.createServer(()=> {}).listen('8892')