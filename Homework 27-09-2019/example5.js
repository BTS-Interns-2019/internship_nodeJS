const fs = require('fs');
const http = require('http');

let app = http.createServer((req, res) =>{
    
        res.writeHead(200,{'Content-type' : 'video/mp4'});
        fs.createReadStream('../HARINA.mp4').pipe(res);

});

app.listen(5000, '127.0.0.1');
console.log('streaming video on port 5000');