const net = require('net')

const getCanUsePort = (app, port) => {
  return new Promise((resolve, reject) => {
    let server = net.createServer().listen(port)
    server.on('listening', function () {
      server.close()
      resolve(port)
    });
    server.on('error', function (err) {
      if (err.code == 'EADDRINUSE') {
        resolve(getCanUsePort(app, port + 1))
      }
    })
  })
}

module.exports = getCanUsePort