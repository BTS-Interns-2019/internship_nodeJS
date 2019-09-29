'use strict'
const http = require('http');
const fs = require('fs');

const app = http.createServer((req, response)=>{
    response.writeHead(200, {'content-type':'text/plain'});
    fs.readFile('../readable.json', (err, data)=>{
        if(err){
            console.error("Errorsote: " + err);
        }
        response.end(data.toString());
    });
});

app.listen(5000, '127.0.0.1');
console.log('se armó');