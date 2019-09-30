'use strict'
const http = require('http');
const fs = require('fs');

// Create an instance of the http server to handle HTTP requests
const app = http.createServer((req, res) => {
  let video = fs.statSync('../HARINA.mp4');

  res.writeHead(200, {
    'Content-Type': 'video/mp4',
    'Content-Length': video.size
  });

  let readStream = fs.createReadStream('../HARINA.mp4');
  readStream.pipe(res);
});

// Start the server on port 5000;
app.listen(5000, '127.0.0.1');
console.log('Node Server running on port 5000');
console.log('example5');