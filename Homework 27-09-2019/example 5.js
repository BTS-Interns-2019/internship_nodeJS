const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'video/mp4'});
    let data = fs.readFileSync('../HARINA.mp4');
    res.end(data);
})

server.listen(5000,'127.0.0.1');
console.log("Conexion abierta");