'use strict'

const Http = require('http');
const fs = require('fs');

Http.createServer( (req, res) => {

  const stream = fs.createReadStream('../HARINA.mp4');

  stream.on('error', (err) => {
    res.end(err)
  });

  stream.on('data', () => {
    stream.pipe(res)
  });
}).listen(8000, () => {
  console.log('Server runing at port: 8000')
});