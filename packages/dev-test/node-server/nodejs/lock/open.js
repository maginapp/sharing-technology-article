const fs = require('fs')

fs.open('./open-file.loc', 'wx', function(err, fd) {
  if (err) return console.error(err);
  //这里开始可以放心的读写文件
  fs.writeFile('./open-file', 'test --- 1' ,(err) => {
    if (err) console.log(err)
    fs.close(fd, () => {
      fs.unlinkSync('./open-file.loc')
      fs.open('./open-file.loc', 'wx', function(err, fd) {
        if (err) return console.error(err);
        //这里开始可以放心的读写文件
        fs.writeFile('./open-file', 'test1 6000' ,(err) => {
          if (err) console.log(err)
          fs.close(fd, () => {})
        })
      });
    })
  })
});

