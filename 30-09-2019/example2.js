'use strict'
const http = require('http');
const fs = require('fs');

// Create an instance of the http server to handle HTTP requests
const app = http.createServer((req, res) => {
  if(req.method === 'POST') {
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      body = Buffer.concat(body).toString();
      fs.writeFile('./db.json', body, (err) => {
        if(err) throw err;
      });
    });

    fs.readFile('./db.json', (err, data) => {
      if(err) throw err
      res.end(data);
    });
  }
});

// Start the server on port 5000;
app.listen(5000, '127.0.0.1');
console.log('Node Server running on port 5000');