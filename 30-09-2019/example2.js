'use strict'

const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  // only accept POST requests
  if (req.method === 'POST') {
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();

      fs.writeFile('./db.json', body, (err) => {
        if (err) {
          res.writeHead(400, {
            'Content-Type': 'text/plain',
          });

          res.end('There was an error writing the file');
          return;
        }

        res.writeHead(200, {
          'Content-Type': 'application/json',
        });

        res.end(body);
      });
    });
  }
});

app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000...');
