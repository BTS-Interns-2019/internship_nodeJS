'use strict';
const http = require('http');
const fs = require('fs');

const app = http.createServer((req,res)=>{
    let arr = [];
    if(req['method']==="PUT"){
        req.on('data',(chunk)=>{
            arr.push(chunk);
        }).on('end',()=>{
            arr = Buffer.concat(arr).toString();
            arr = JSON.parse(arr);
            if(fs.existsSync("db.json")){
                fs.readFile("db.json",(err,data)=>{
                    if(err){
                        res.writeHead(400,{"content-type":"text/plain"});
                        res.end("Error to read file");
                    }else{
                        const file = JSON.parse(data);
                        if(file.hasOwnProperty(Object.keys(arr))){
                            file[Object.keys(arr)] = Object.values(arr)[0];
                            fs.writeFile("db.json",JSON.stringify(file),(err)=>{
                                if(err){
                                    res.writeHead(400,{"content-type":"text/plain"});
                                    res.end("Error to edit property");
                                }else{
                                    res.writeHead(200,{"content-type":"text/plain"});
                                    res.end(JSON.stringify(file));
                                }
                            })
                        }else{
                            res.writeHead(400,{"content-type":"text/plain"});
                            res.end("Property dont found, dont use 2 or more propertys");
                        }
                    }
                })
            }else{
                res.writeHead(404,{"content-type":"text/plain"});
                res.end("Error 404 file not found, you need create db.json");
            }
        });
    }else{
        res.writeHead(403,{"content-type":"text/plain"});
        res.end("Prohived action");
    }
}).listen(3000,'127.0.0.1');