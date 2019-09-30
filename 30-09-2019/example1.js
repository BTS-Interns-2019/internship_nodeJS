'use strict'

const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  // only accept GET requests
  if (req.method === 'GET') {
    // read db.json
    fs.readFile('./db.json', (err, data) => {
      if (err) {
        res.writeHead(400, {
          'Content-Type': 'text/plain',
        });

        // if file does not exits
        if (err.code === 'ENOENT') {
          res.end('The file "db.json" does not exist.');
        }
      }

      // file is empty
      if (data.byteLength === 0) {
        res.writeHead(400, {
          'Content-Type': 'text/plain',
        });
        
        res.end('The file "db.json" is empty.');
      }

      res.writeHead(200, {
        'Content-Type': 'application/json',
      });
      res.end(data.toString());
    });
  }
});

app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000...');
