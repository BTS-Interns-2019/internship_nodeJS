'use strict'
const http = require('http');
const fs = require('fs');

// Create an instance of the http server to handle HTTP requests
const app = http.createServer((req, res) => {
  if(req.method === 'DELETE') {
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      body = Buffer.concat(body).toString();
      body = JSON.parse(body);

      if(Object.values(body)[0]){
        let file = fs.readFileSync('./db.json');
        file = JSON.parse(file);

        delete file[Object.keys(body)[0]];
        
        fs.writeFileSync('./db.json', JSON.stringify(file, null, 2));
      }
    });

    let read = fs.readFileSync('./db.json');
    res.end(read);
  }
});

// Start the server on port 5000;
app.listen(5000, '127.0.0.1');
console.log('Node Server running on port 5000');