'use estrict'
const http = require('http');
const fs = require('fs');

const app = http.createServer((req,res)=>{
    if(req["method"]=="GET"){
        fs.readFile('db.json',(err,data)=>{
            if(err){
                res.end("No existe el archivo Json");
            }else{
                res.end(data);
            }
        });
    }else{
        res.end("El metodo no es de tipo get :(");
    }
    
});
app.listen(3000,'127.0.0.1');