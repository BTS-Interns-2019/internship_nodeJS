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