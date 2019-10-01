'use strict'
const http = require('http');
const fs = require('fs');

// Create an instance of the http server to handle HTTP requests
const app = http.createServer((req, res) => {
  if(req.method === 'PUT'){
    let body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      body = Buffer.concat(body).toString();
      body = JSON.parse(body);

      let file = fs.readFileSync('./db.json', {encoding: 'utf-8'});
      let read = JSON.parse(file);

      if(read.hasOwnProperty(Object.keys(body)[0])) {
        read[Object.keys(body)[0]] = Object.values(body)[0];
        fs.writeFileSync('./db.json', JSON.stringify(read, null, 2));
      }
    });
    
    let file2 = fs.readFileSync('./db.json');
    res.end(file2);
  }
});

// Start the server on port 5000;
app.listen(5000, '127.0.0.1');
console.log('Node Server running on port 5000');