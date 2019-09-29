'use strict'
const http = require('http');
const fs = require('fs');

const app = http.createServer((req,res)=>{    
    res.writeHead(200,{'content-type':'text/palin'});
    const json = require('../readable.json');
    var cont = Object.values(json["web-app"]["taglib"]).length;
    if(json["web-app"]["taglib"]["request1"]){
        var a = "request"+(cont-1);
        json["web-app"]["taglib"][a] = a ;
    }else{
        json["web-app"]["taglib"]["request1"] = "request1";
    }
    fs.writeFile('../readable.json',JSON.stringify(json),(err)=>{
        if(err){
            console.error('Algo salió mal');
        }
        console.log(__dirname);
    });
    res.end(JSON.stringify(json));
});

app.listen(5000, '127.0.0.1');
console.log('Creado');