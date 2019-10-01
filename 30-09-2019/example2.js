'use strict'
const fs = require('fs');
const http = require('http');

const app = new http.createServer((req, res) => {

    if (req.method == 'POST') {
    
        //Obtiene el stream, agrega los chunks a un array, y al finalizar lo convierte en string  
        let body = [];
        var key;
        var val;
        var obt;
        req.on('data', (chunk) => {
            body.push(chunk);

        }).on('end', ()=>{
            body = Buffer.concat(body).toString();
        })


    fs.readFile('./db.json', 'utf-8',(err, data)=>{
        key = Object.keys(JSON.parse(body))
        val = Object.values(JSON.parse(body))
        obt = JSON.parse(data)
        console.log(key[0])
        obt[`${key[0]}`] = val;
        console.log(obt);
        obt=JSON.stringify(obt);

        // Agrega el contenido recibido al archivo 
        fs.writeFileSync('db.json', obt)

        // envia el contenido del archivo 
        fs.readFile('./db.json', 'utf-8',(err, data)=>{
            res.writeHead(200, {'Content-Type':'application/json'})
            res.end(data);
            });
    });



    
        

    }
    else {
        // Si no es POST envía un error
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Solo puedes hacer POST');
    };

});

app.listen(5000, '127.0.0.1');
console.log('node server running in port 5000');