const FtpSrv = require('ftp-srv');
const ftpServer = new FtpSrv({ options ... });
 
ftpServer.on('login', (data, resolve, reject) => { ... });
...
 
ftpServer.listen()
.then(() => { ...