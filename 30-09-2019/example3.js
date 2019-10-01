'use strict'
let http = require('http');
let fs = require('fs');

let app = http.createServer((req, res) => {
  if (req.method === 'PUT') {
    fs.readFile('./db.json', 'utf8', function (err, data) {
        if (err) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('File not found')
        } else {
            let body = [];
            req.on('data', (chunk) => {
                body.push(chunk)
            }).on('end', () => {
                body = Buffer.concat(body).toString();
                let request = JSON.parse(body)
                let datares = JSON.parse(data)
                for (let prop in request) {
                    if (!datares.hasOwnProperty(prop)) {
                        res.writeHead(400, { 'Content-Type': 'text/plain' });
                        res.end('No se encontró la propiedad que trata de actualizar')
                        return
                    }
                    datares[prop] = request[prop]
                }
                let result = JSON.stringify(datares);
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(result)
                fs.writeFile('./db.json', result, (err) => {
                          if (err) throw err;
                      })
            })
        }
    })     
} else {
    res.writeHead(400, { 'Content-Type' : 'text/plain'})
    res.end('Invalid method')
  }
})
            
app.listen(5000, '127.0.0.1');
console.log('Server run in port 5000')