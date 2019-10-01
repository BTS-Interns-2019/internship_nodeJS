'use strict'
var bodyParser = require('body-parser');
const express = require ('express');
const fs = require('fs');
const files = require('./files')

const app = express();
const port = 5000;

app.get('/', (req, res)=>{  //si es peticion GET y se hace desde la raíz hace lo siguiente

    fs.readFile('./db.json', 'utf-8',(err, data)=>{

        if(data == undefined || data.length == 0){
            res.set('Content-Type', 'text/plain');
            res.status(404);
            res.send('El archivo no existe o está vacío');
        }else{
            res.set('Content-Type', 'application/json');
            res.status(200);
            res.send(data);
            console.log(data)
        }
    });

});

app.listen(port, ()=>{
    console.log(`example app listening on ${port}`);
})