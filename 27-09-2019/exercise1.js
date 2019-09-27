const http = require('http');
const fs = require('fs');

//Crea un nuevo servidor en el localhost con el puerto 5000
let app=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    let data = fs.readFileSync('../example.txt');
    res.end(data);
})

app.listen(5000,'127.0.0.1');
console.log('Node server running on port 5000');