'use strict'
const http = require('http');
const fs = require('fs')


let app = http.createServer((req, res) => {
  let text = fs.readFile('../example.txt', 'utf8', (req, res) => {
  });
  res.writeHead(200, {'Content-Type': 'text/plain'}); // object with headers
  res.end(JSON.stringify(text))
});

// Start the server on port 5000
app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000');