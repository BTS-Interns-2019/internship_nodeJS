'use strict'

// create a NodeJS server
const http = require('http');
const fs = require('fs');

// create an instance of the http server to handle HTTP requests
const app = http.createServer((req, res) => {
  // write the response
  fs.readFile('../example.txt', (err, data) => {
    if (err) {
      return JSON.stringify(err);
    }

    // writing the status code and headers
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });

    res.end(data.toString());
  });
});

// start the server on port 5000 and hostname 127.0.0.1
app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000...');
