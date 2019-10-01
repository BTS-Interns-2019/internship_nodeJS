'use strict'
const http = require('http')
const fs = require('fs')
let app = http.createServer((req, res) => {
    if (req.method != 'POST') {
        console.log('this server only listen POST requests')
        return
    }
    let body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(body)
            fs.writeFile('./db.json', body, function (err) {
                if (err) throw err;
            })
        })
})

app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000')