const fs = require('fs')

fs.open('./open-file.loc', 'wx', function(err, fd) {
  if (err) return console.error('first open', err);
  fs.writeFile('./open-file', 'test --- truncate' ,(err) => {
    if (err) console.log('first writeFile', err)
    // setTimeout(() => {
    //   try {
    //     fs.unlinkSync('./open-file.loc')
    //   } catch (e){
    //     console.log('first unlinkSync', e)
    //   }
    // }, 100);
    fs.closeSync(fd, () => {})
  })
});



const http = require('http')

http.createServer(()=> {}).listen('8892')