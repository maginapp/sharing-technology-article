const http = require('http')
const fork = require('child_process')

http.createServer(()=> {}).listen('8888')


fork.fork('./file1.js')
fork.fork('./file2.js')

