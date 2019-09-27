'use strict'
const http = require('http');
const fs = require('fs');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer(function(req, res){

    fs.readFile('../example.txt','utf-8', (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(data);

    });

});

// start the server on port 5000
app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000');