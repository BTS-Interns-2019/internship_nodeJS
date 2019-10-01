'use strict'

const Http = require('http');
const fs = require('fs');

Http.createServer( (req, res) => {

  let stream = fs.createReadStream('../readable.json', () => {
    console.log('Reading file.')
  });

  stream.on('open', () => {
    res.writeHead(200, {"Content-Type": "application/json"})
    stream.pipe(res)
  });

  stream.on('error', (err) => {
    res.end('Internal error.', err)
  });


}).listen(3030, () => { console.log('Running at port: 3030')});