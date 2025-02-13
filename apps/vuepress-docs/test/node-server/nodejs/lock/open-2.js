const fs = require('fs')

try {
  fs.unlinkSync('./open-file.loc')
} catch  (e){
  console.log('unlinkSync init', e)
}


fs.open('./open-file.loc', 'wx', function(err, fd) {
  if (err) return console.error('first open', err);
  console.log('first open', fd)
  //这里开始可以放心的读写文件
  fs.writeFile('./open-file', 'test --- 1' ,(err) => {
    if (err) console.log('first writeFile', err)
    setTimeout(() => {
      try {
        fs.unlinkSync('./open-file.loc')
      } catch (e){
        console.log('first unlinkSync', e)
      }
    }, 100);
  })
});

setTimeout(() => {
  fs.stat('./open-file.loc',(err, stat) => console.log('stat', err, stat))
  fs.open('./open-file.loc', 'wx', function(err) {
    if (err) return console.error('2 open', err);
    //这里开始可以放心的读写文件
    fs.writeFile('./open-file', 'test1 6000' ,(err) => {
      if (err) console.log('2 writeFile', err)
      setTimeout(() => {
        try {
          fs.unlinkSync('./open-file.loc')
        } catch (e){
          console.log('2 unlinkSync', e)
        }
      }, 100);
    })
  });
}, 6000);


const http = require('http')

http.createServer(()=> {}).listen('8892')