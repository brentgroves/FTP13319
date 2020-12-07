const FtpSrv = require('ftp-srv');
const ftpServer = new FtpSrv({ options ... });
// "ftp://127.0.0.1:21"
 
ftpServer.on('login', (data, resolve, reject) => { ... });
...
 
ftpServer.listen()
.then(() => { ...