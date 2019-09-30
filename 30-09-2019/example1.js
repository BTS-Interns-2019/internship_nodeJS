'use strict'
let http = require('http');
let fs = require('fs');

let app = http.createServer((req, res) => {
    fs.readFile('./db.json', 'utf8', (error, data) => {
        if (data) {
            let body = [];
            req.on('data', (chunk) => {
            body.push(chunk);
            console.log(chunk);
            }).on('end', () => {
                body = Buffer.concat(body).toString()})
                res.writeHead(200, { 'Content-Type' : 'text/plain'})
                res.end(body)
        } else {
            res.writeHead(400, { 'Content-Type' : 'text/plain'})
            res.end('db.json does not exist')
        }
    })
});

           
app.listen(5000, '127.0.0.1');
console.log('Server run in port 5000')

