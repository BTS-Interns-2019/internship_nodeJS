'use strict'
const http = require('http');
const fs = require('fs');

// Create an instance of the http server to handle HTTP requests
const app = http.createServer((req, res) => {
  const file = fs.readFileSync('../readable.json');
  res.end(file);
});

// Start the server on port 5000;
app.listen(5000, '127.0.0.1');
console.log('Node Server running on port 5000');
console.log('example3');