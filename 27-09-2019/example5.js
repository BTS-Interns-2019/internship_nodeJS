'use strict'

// create a NodeJS server
const http = require('http');
const fs = require('fs');
const path = require('path');

/**
 * Example 5 - Send the HARINA video
 */
// create an instance of the http server to handle HTTP requests
const app = http.createServer((req, res) => {
  fs.stat('../HARINA.mp4', (err, stats) => {
    if (err) {
      res.writeHead(400, {
        'Content-Type': 'application/json',
      });
      
      return res.end(JSON.stringify(err));
    }

    // create a stream to read the video
    const readStream = fs.createReadStream('../HARINA.mp4');

    res.writeHead(200, {
      'Content-Type': 'video/mp4',
      'Content-Length': stats.size,
    });
  
    // transmit the video by stream to the response
    readStream.pipe(res);
  });
});

// start the server on port 5000 and hostname 127.0.0.1
app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000...');
