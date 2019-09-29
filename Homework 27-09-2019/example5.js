const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
     response.writeHead(200, {'Content-type': 'video/mp4'});
     fs.createReadStream('../HARINA.mp4').pipe(response);
});

server.listen(3000, '127.0.0.1');
console.log('Streaming video on port 3000');
