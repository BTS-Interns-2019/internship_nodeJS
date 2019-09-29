const fs = require('fs');

'use strict'
const http = require('http');
//
let app = http.createServer((req, res) => {
    fs.readFile('../readable.json', 'utf8', function (err, data) {
        if (err) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Hubo un error')
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data)
        }
    });
})

app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000')