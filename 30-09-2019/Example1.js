'use strict'
const http = require ('http');
const fs = require ("fs")

let app = http.createServer((req, res)=>{
    
   res.writeHead(200, {"Content-type": "text/plain"});
   fs.readFile ("./db.json", "utf8", (error, data) =>{
        if(error){
            console.log('tenemos un error' + error)
        }
        res.end(data);
   })
})

app.listen(3000, "127.0.0.1");
console.log("Node server running on port 3000")