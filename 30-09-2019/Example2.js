//Cris
//400 bad rquest, 401 Not autorization, 402 need pay, 403 prohivid, 404 not found, 407 need autentication proxy
'use strict';
const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res)=>{
    if(req['method'] === "POST"){
        res.writeHead(200, {"content-type":"text/plain"});

        let arr=[];
        
        req.on('data',(data)=>{
            arr.push(data);
        }).on('end',()=>{
            arr = Buffer.concat(arr).toString();

            //checar si el archivo ya existe
            // if(fs.existsSync("db.json")){
            //     fs.appendFile("db.json",","+arr,(err)=>{
            //         if(err){
            //             res.writeHead(400,{"content-type":"text/plain"});
            //             res.end("Error to append file db.json");
            //         }
            //     });
            // }
            // else{
                fs.writeFile("db.json",arr,(err)=>{
                    if(err){
                        res.writeHead(400,{"content-type":"text/plain"});
                        res.end("Error to write file db.json"); 
                    }
                });
            // }
            res.end(arr);
        })
    }else{
        res.writeHead(403,{"content-type":"text/plain"});
        res.end("prohived action");
    }
}).listen(3000);