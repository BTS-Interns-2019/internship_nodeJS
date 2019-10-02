//Cris
//400 bad rquest, 401 Not autorization, 402 need pay, 403 prohivid, 404 not found, 407 need autentication proxy
'use strict';
const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res)=>{
    if(req['method'] === "POST"){
        // res.writeHead(200, {"content-type":"text/plain"});

        let arr=[];
        
        req.on('data', (data)=>{
            arr.push(data);
        }).on('end',()=>{
            arr = Buffer.concat(arr).toString();
            const arra = JSON.parse(arr);
            //checar si el archivo ya existe
            if(fs.existsSync("db.json")){
                fs.readFile("db.json", (err,dato)=>{
                    if(err){
                        res.writeHead(400,{"content-type":"text/plain"});
                        res.end("Error to read file db.json");
                    }else{
                        const file = JSON.parse(dato);
                        file[Object.keys(arra)] = Object.values(arra)[0];
                        fs.writeFile("db.json",JSON.stringify(file),(err)=>{
                            if(err){
                                res.writeHead(400,{"content-type":"text/plain"});
                                res.end("Error to write file db.json"); 
                            }else{
                                res.writeHead(200,{"content-type":"aplication/json"});
                                res.end(JSON.stringify(file));
                            }
                        });
                    }
                });
            }
            else{
                fs.writeFile("db.json",arr,(err)=>{
                    if(err){
                        res.writeHead(400,{"content-type":"text/plain"});
                        res.end("Error to write file db.json"); 
                    }else{

                    }
                });
            }
            res.end(arr);
        })
    }else{
        res.writeHead(403,{"content-type":"text/plain"});
        res.end("prohived action");
    }
}).listen(3000, '127.0.0.1');