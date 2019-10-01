'use strict'
const http = require('http')
const fs = require('fs')
let app = http.createServer((req, res) => {
    if (req.method != 'PUT') {
        console.log('this server only listen POST requests')
        return
    }

    fs.readFile('./db.json', 'utf8', function (err, data) {
        if (err) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('No se encontró el archivo')
        } else {
            let body = [];
            req.on('data', (chunk) => {
                body.push(chunk)
            }).on('end', () => {
                body = Buffer.concat(body).toString();
                let request_json = JSON.parse(body)
                let data_json = JSON.parse(data)
                for (let key in request_json) {
                    if (!data_json.hasOwnProperty(key)) {
                        res.writeHead(400, { 'Content-Type': 'text/plain' });
                        res.end('No se encontró la propiedad')
                        return
                    }
                    data_json[key] = request_json[key]
                }
                let respuesta = JSON.stringify(data_json)
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(respuesta)
                fs.writeFile('./db.json', respuesta, function (err) {
                    if (err) throw err;
                })
            })
        }
    });

})

app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000')