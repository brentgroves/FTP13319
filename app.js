
/*
I don't have any code for this but there is a CLI 
npx ftp-srv ftp://0.0.0.0:9876 --root ~/Documents
*/
/*
Sample code that has not been tested yet
*/
const FtpSrv = require('ftp-srv');
const ftpServer = new FtpSrv({ options ... });
// "ftp://127.0.0.1:21"
 
ftpServer.on('login', (data, resolve, reject) => { ... });
...
 
ftpServer.listen()
.then(() => { ...