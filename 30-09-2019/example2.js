'use strict'

const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    if (req['method'] === 'POST'){
        let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
    });
        fs.writeFile('./db.json', body, (err) => {
            if (err) {
                res.writeHead(200, {'content-type': 'text/plain'});
                res.end("Error on Write File");
            }
            fs.readFile('./db.json', 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(200, {'content-type': 'text/plain'});
                    res.end("Error on Read File");
                }
                res.writeHead(200, {'content-type': 'application/json'});
                res.end(data);

            });
            
        });
    } else {
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end("The request method is not POST");
};
});

app.listen(5000, '127.0.0.1');
console.log('Node server listen on port 5000');
