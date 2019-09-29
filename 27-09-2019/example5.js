'use strict'
const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res)=>{
    res.writeHead(200,{"content-type":"video/mp4"});
    fs.readFile('../HARINA.mp4',(err,data)=>{
        res.end(data)
    });
    
}).listen(5000,'127.0.0.1');

console.log("Server corriendo");