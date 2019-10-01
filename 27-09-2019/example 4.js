const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    let data = fs.readFileSync('../readable.json');
    res.end(data);
})

server.listen(5000,'127.0.0.1');
console.log("Conexion abierta");