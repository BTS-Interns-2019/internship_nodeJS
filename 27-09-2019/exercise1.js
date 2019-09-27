//saber que es???!!!
'use strict'
const http = require('http');
const fs = require('fs');
let app = http.createServer((req, res) =>{
    res.writeHead(200,{'content-type':'text/plain'});
    fs.readFile('../example.txt',(err, data)=>{
        if(err){
            console.error("mal");
        }
        // const eso = data.toString();
        res.end(data.toString());
    });
});
// //añadir puerto de escucha
app.listen(5000, '127.0.0.1');
console.log("Listo");