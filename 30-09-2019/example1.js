'use strict'
const http = require('http');
const fs = require('fs');

// Create an instance of the http server to handle HTTP requests
const app = http.createServer((req, res) => {
  if(req.method === 'GET') {
    fs.readFile('./db.json', (err, data) => {
      if(err){
        res.writeHead(500, {'Content-Type' : 'text/plain'});
        res.end("ERROR: The file db.json don't exist.");
      } else {
        if(data.toString() === '') {
          res.writeHead(500, {'Content-Type' : 'text/plain'});
          res.end("ERROR: The file db.json is empty.");
        } else {
          res.writeHead(200, {'Content-Type' : 'text/plain'});
          res.end(data);
        }
      }
    });
  } else {
    res.writeHead(400, {'Content-Type' : 'text/plain'});
    res.end(`ERROR: The method ${req.method} is not valid in this request.`);
  }
});

// Start the server on port 5000;
app.listen(5000, '127.0.0.1');
console.log('Node Server running on port 5000');