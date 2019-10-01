'use strict'
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    if (request.method === 'POST') {
        let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
            console.log(chunk);

        }).on('end', () => {
            body = Buffer.concat(body).toString();

            console.log('I recieved', body);
            response.writeHead(200, { 'Content-Type': 'application/json' });

            fs.writeFile('db.json', body,(err, data) => {
                if (err) {
                    response.end(`There was an error writing the file\n ${err}`)
                }
                console.log('File created')
            })

            fs.readFile('db.json','utf-8',(err, data) => {
                if (err) {
                    response.data(`Error trying to read the file ${err}`);
                }
                response.end(data)
                console.log('Read');
                
            })

        });
    }
    
});

server.listen(5000, '127.0.0.1');
console.log('Server listen on port 5000');
