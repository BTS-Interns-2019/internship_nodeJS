'use strict'
const http = require('http')
const fs = require('fs')
let app = http.createServer((req, res) => {
    fs.readFile('./db.json', 'utf8', function (err, data) {
        if (err || data == '') {
            res.end('El archivo no existe o esta vacío')
        } else {
            /*let body = [];
            req.on('data', (chunk) => {
                body.push(chunk)
            }).on('end', () => {
                body = Buffer.concat(body).toString();
            })*/
            if(req.method == 'GET'){
                res.end(data)
            }else{
                res.end('this server only listen GET requests')
            }
        }
    })
})

app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000')