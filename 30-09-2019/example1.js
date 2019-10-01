'use strict'
let http = require('http');
let fs = require('fs');

let app = http.createServer((req, res) => {
  fs.readFile('./db.json', 'utf8', (error, data) => {
    if (error) {
      res.writeHead(400, { 'Content-Type' : 'text/plain'})
      res.end('db.json does not exist')
    } else {
      if (req.method == 'GET'){
        res.end(data)
      } else {
        res.end('invalid method')
      }
    }
  })
});
        
app.listen(5000, '127.0.0.1');
console.log('Server run in port 5000')

