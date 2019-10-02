'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 5000;
//manipular el body de los request

//saber si el 
app.use(bodyParser.urlencoded({extended:false}));
//resolver todo el rollo del stream y combierte lo que llega en json
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    fs.readFile('db.json', 'utf8', (err,data)=>{
        if(err){
            res.status(404);
            res.send("No existe el archivo Json");
            // return;
        }else{
            if(!data){
                res.set("content-type", "text/plain");
                res.send("bd.json vacío");
            }else{
                res.set("content-type", "aplication/json");
                res.send(data);
            }
        }
    });
});

app.post('/',(req, res)=>{
    let body = req.body;
    if(fs.existsSync("db.json")){
        fs.readFile("db.json",(err,data)=>{
            if(err){
                res.set("content-type","text/palin");
                res.status(500);
                res.send("Error in write file db.json");
                return;
            }
            let file = JSON.parse(data);
            if(Object.keys(body).length>1){
                let valores = Object.keys(body);
                for (const obj in valores) {
                    file[valores[obj]] = Object.values(body)[obj];
                }
                fs.writeFile("db.json",JSON.stringify(file),(err)=>{
                    if(err){
                        res.set("content-type","text/palin");
                        res.status(500);
                        res.send("Error to write db.json file");
                        return;
                    }
                    res.set("content-type","aplication/json");
                    res.status(200);
                    res.send(JSON.stringify(file));
                });

            }else if(Object.keys(body).length===1){
                file[Object.keys(body)]=Object.values(body)[0];
            }else{
                res.set("content-type","text/palin");
                res.status(400);
                res.send("Write one property:value");
                return;
            }
        });
    }else{
        fs.writeFile("db.json",JSON.stringify(body),(err)=>{
            if(err){
                res.set("content-type","text/palin");
                res.status(500);
                res.send("Error in write file db.json");
                return;
            }
            res.set("content-type","aplication/json");
            res.status(200);
            res.send(JSON.stringify(body));
        });
    }
});
// let read = new Promise((rej, res)=>{
//     fs.readFile("db.json", (err, data)=>{
//         if(err){
//             rej();
//         }else{
//             res(JSON.parse(data));
//         }
//     });
// });
app.put('/',(req, res)=>{
    let body = req.body;
    leer().then((obj)=>{
        if(Object.keys(body).length>1){
            for (const i in obj) {
                for (const e in body) {
                    if(i === e){
                        obj[i] = body[e];
                    }
                }
            }
            fs.writeFile("db.json", JSON.stringify(obj),(err)=>{
                if(err){
                    res.set("content-type","text/palin");
                    res.status(500);
                    res.send("Error in write db.json");        
                }
            })
            res.set("content-type","aplication/json");
            res.status(200);
            res.send(obj);
        }else if(Object.keys(body).length===1){
            if(obj.hasOwnProperty(Object.keys(body))){
                obj[Object.keys(body)] = Object.values(body)[0];
                fs.writeFile("db.json", JSON.stringify(obj),(err)=>{
                    if(err){
                        res.set("content-type","text/palin");
                        res.status(500);
                        res.send("Error in write db.json");        
                    }
                })
                res.set("content-type","aplication/json");
                res.status(200);
                res.send(obj);
            }else{
                res.set("content-type","text/palin");
                res.status(400);
                res.send("Property not found");
            }
        }
        
    })
    .catch((a)=>{
        res.set("content-type","text/palin");
        res.status(404);
        res.send("File db.json not found" + a);
    });
});
function leer(){
    return new Promise((resolve, reject)=>{
        fs.readFile("db.json", (err, data)=>{
            if(err){
                reject(err);
            }else{
                resolve(JSON.parse(data));
            }
        });
    })
}
app.delete('/',(req,res)=>{
    let body = req.body;
    leer().then((obj)=>{
        if(Object.keys(body).length>1){
            for (const i in obj) {
                for (const e in body) {
                    if(i === e){
                        delete obj[i];
                    }
                }
            }
            fs.writeFile("db.json", JSON.stringify(obj),(err)=>{
                if(err){
                    res.set("content-type","text/palin");
                    res.status(500);
                    res.send("Error in write db.json");        
                }
            })
            res.set("content-type","aplication/json");
            res.status(200);
            res.send(obj);
        }else if(Object.keys(body).length===1){
            if(obj.hasOwnProperty(Object.keys(body))){
                delete obj[Object.keys(body)];
                fs.writeFile("db.json", JSON.stringify(obj),(err)=>{
                    if(err){
                        res.set("content-type","text/palin");
                        res.status(500);
                        res.send("Error in write db.json");        
                    }
                })
                res.set("content-type","aplication/json");
                res.status(200);
                res.send(obj);
            }else{
                res.set("content-type","text/palin");
                res.status(400);
                res.send("Property not found");
            }
        }
        
    })
    .catch((a)=>{
        res.set("content-type","text/palin");
        res.status(404);
        res.send("File db.json not found" + a);
    });
});

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}!`);
});

//solo con get
// app.get('/', (req,res)=>{
//     //header mal
//     // res.writeHead(200, {"content-type":"text/plain"});
//     //header bien
//     res.set("content-type", "aplication/json");
//     res.status(200);
//     res.send({});
// });

// app.post('/', (req,res)=>{
//     console.log(req.body);
//     res.set("content-type", "aplication/json");
//     res.status(200);
//     res.send(req.body);
// });

//parametros
// app.get('/:uno/paht/:variable', (req,res)=>{
//     console.log(req.params);
//     res.send('Hello world!');
// });