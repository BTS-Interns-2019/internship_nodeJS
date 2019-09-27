'use strict'

// create a NodeJS server
const http = require('http');
const fs = require('fs');

// create an instance of the http server to handle HTTP requests
const app = http.createServer((req, res) => {
  fs.readFile('../example.txt', (err, data) => {
    if (err) {
      res.writeHead(400, {
        'Content-Type': 'json/application',
      });
      
      return res.end(JSON.stringify(err));
    }
    
    // writing the status code and headers
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    
    // write the response
    return res.end(data.toString());
  });
});

// start the server on port 5000 and hostname 127.0.0.1
app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000...');
