'use strict'
const http = require('http');
const fs = require('fs');

let req_count = 0;
const file = fs.readFileSync('../readable.json');
let obj = JSON.parse(file);
let prop = Object.keys(obj)[0];

// Create an instance of the http server to handle HTTP requests
const app = http.createServer((req, res) => {

  req_count += 1;
  let add = `request${req_count}`;
  obj[prop].taglib[add] = add;

  res.end(JSON.stringify(obj, null, 2));
});

// Start the server on port 5000;
app.listen(5000, '127.0.0.1');
console.log('Node Server running on port 5000');
console.log('example4');