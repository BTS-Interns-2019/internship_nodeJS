'use strict'

const Http = require('http');
const fs = require('fs');

Http.createServer( (req, res) => {
  fs.readFile( '../readable.json', (err, data) => {
    if (err) throw new Error( 'File corrupted, cannot deploy.' )
    
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end(data);
  })

}).listen(8080, () => { 
  console.log('Running server at port: 8080')
});

