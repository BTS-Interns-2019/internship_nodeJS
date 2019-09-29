const fs = require('fs');
var reqn



'use strict'
const http = require('http');
//
var va = 0;
let app = http.createServer((req, res) => {
    fs.readFile('../readable.json', 'utf8', function (err, data) {
        if (err) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Hubo un error')
        } else {
            let j = JSON.parse(data);

            do {
                va++;
                reqn = "request" + va;
            } while (j["web-app"].taglib[reqn] !== undefined)
            j["web-app"].taglib[reqn] = reqn;
            data = JSON.stringify(j)
            fs.writeFile('../readable.json', data, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            })
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data)
        }
    });
})

app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000')