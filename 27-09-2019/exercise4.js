'use strict'
const http = require('http');
const fs = require('fs');

var count = 0;
let app = http.createServer((req, res) => {
    fs.readFile('../readable.json', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('There was an error');
        } else {

            count++;

            let reqData = JSON.parse(data)
            if (!reqData["web-app"].taglib[`request${count}`]) {
                reqData["web-app"].taglib[`request${count}`] = `request${count}`;
                data = JSON.stringify(reqData)
                fs.writeFile('../readable.json', data, (err) => {
                    if (err) throw err;
                    console.log('Data saved!');
                })
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data)
            }
        }
    });
})

app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000')

