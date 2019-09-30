'use strict'

// create a NodeJS server
const http = require('http');
const fs = require('fs');

/**
 * Example 3 - Send the JSON
 */
// create an instance of the http server to handle HTTP requests
const app = http.createServer((req, res) => {
  fs.readFile('../readable.json', (err, data) => {
    if (err) {
      res.writeHead(400, {
        'Content-Type': 'application/json',
      });
      
      return res.end(JSON.stringify(err));
    }
    
    // writing the status code and headers
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    // write the response
    return res.end(data.toString());
  });
});

// start the server on port 5000 and hostname 127.0.0.1
app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000...');
