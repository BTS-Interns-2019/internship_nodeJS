'use strict'

const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
    if(req['method'] === 'DELETE') {
          let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
    });
        fs.readFile('./db.json', 'utf8', (err, data) => {
            if (err) {
                 res.writeHead(200, {'content-type': 'text/plain'});
                 res.end("File doesn't exist");
            };

            data = JSON.parse(data);
            body = JSON.parse(body);
            if (Object.values(data).length > 0) {  
                if (data.hasOwnProperty(Object.keys(body))) {
                    delete data[Object.keys(body)];
                } 

            fs.writeFile('./db.json', JSON.stringify(data), (err) => {
                if (err) {
                    res.writeHead(200, {'content-type': 'text/plain'});
                    res.end("Error on write file");
                };
                fs.readFile('./db.json', 'utf8', (err, data1) => {
                    if (err) {
                        res.writeHead(200, {'content-type': 'text/plain'});
                        res.end("Error on read file");
                    };

                    res.writeHead(200, {'content-type': 'application/json'});
                    res.end(data1);
                })
            })
        } else {
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end("The property does not exist on db.json");
        }

        });
    } else {
         res.writeHead(200, {'content-type': 'text/plain'});
         res.end("The request method is not DELETE");
    };
});

app.listen(5000, '127.0.0.1');
console.log('Node server listen on port 5000');