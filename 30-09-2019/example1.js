'use strict'
const fs = require('fs');
const http = require('http');

const app = new http.createServer((req, res)=>{

    if(req.method=='GET'){

    fs.readFile('./db.json', 'utf-8',(err, data)=>{
        console.log(data);

        if(data==undefined || data.length == 0){
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('el archivo no existe o está vacío');
        }
        else{
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
        }

    });
}
else{
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.end('Solo puedes hacer GET');
};

}); 

app.listen(5000, '127.0.0.1');
console.log('node server running in port 5000');