'use strict'

const http = require('http');
const fs = require('fs');

let app = http.createServer((req, res) => {
    if (req['method'] === 'GET'){
    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) { 
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end("File doesn't exist");
        };
        if(!data) {
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end("File is empty");
        }
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(data);
    });
}else {
    res.writeHead(200, {'content-type': 'text/plain'});
            res.end("The request method is not GET");
}
});

app.listen(5000, '127.0.0.1');
console.log('Node server listen on port 5000');