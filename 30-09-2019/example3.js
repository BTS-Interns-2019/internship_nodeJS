'use strict'
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    if (request.method === 'PUT') {
        //Check if file exists on current directory

        let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
            console.log(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();

            console.log('I recieved', body);

            response.writeHead(200, { 'Content-Type': 'application/json' });

            fs.readFile('db.json', 'utf-8', (err, data) => {
                if (err) {
                    response.data(`Error trying to read the file ${err}`);
                }

                if (data === '') {
                    response.end('Empty File')
                }
                const newProp = JSON.parse(body)
                const prevData = JSON.parse(data)

                // Check if data exists on the previous data, if yes, update the property
                const keys = Object.keys(newProp);
                for (const key in prevData) {
                    if (prevData.hasOwnProperty(keys)) {
                        prevData[keys] = Object.values(newProp)[0];
                    }
                }
                fs.writeFile('db.json', JSON.stringify(prevData), (err, data) => {
                    if (err) {
                        response.end(`There was an error writing the file\n ${err}`)
                    }
                    console.log('Update success')
                });

                response.end(JSON.stringify(prevData))
                console.log('Read success');
            });
        });

    }
});

server.listen(5000, '127.0.0.1');
console.log('Server listen on port 5000');
