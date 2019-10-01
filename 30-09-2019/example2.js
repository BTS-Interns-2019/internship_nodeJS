'use strict'
let http = require('http');
let fs = require('fs');

let app = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = [];
    req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString()
    res.writeHead(200, { 'Content-Type' : 'application/json'})
    res.end(body)
    fs.writeFile('./db.json', body, function (err) {
      if (err) throw err;
  })})
  } else {
    res.writeHead(400, { 'Content-Type' : 'text/plain'})
    res.end('Invalid method')
  }
})
            
app.listen(5000, '127.0.0.1');
console.log('Server run in port 5000')