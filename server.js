'use strict'
const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
  console.log(req);
  // Set a response type of plain text for the response
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send back a response and end the connection
  res.end('Server testing');
});

// Start the server on port 5000
app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000');