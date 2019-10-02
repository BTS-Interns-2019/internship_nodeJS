'use strict'
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    if (request.method === 'GET' ){
        fs.readFile('db.json', 'utf-8', (error, data) => {
            if (error) {
                // If the file doesn't exist return the message
                 response.end('Sorry, but the file does not exist');
            }
            // if the file is empty, return a message, otherwise return data
            if (data !== '') {
                response.end(data);
            }
            response.end('The file is empty')
        })
        
    }
    //Return the body request if we have other request different than GET 
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
        console.log(chunk);

    }).on('end', () => {
        body = Buffer.concat(body).toString();

        console.log('I recieved', body);
        response.writeHead(200, { 'Content-Type': 'text/plain' });

        response.end(body)

    });
});

server.listen(5000, '127.0.0.1');
console.log('Node Server running on port 5000');
