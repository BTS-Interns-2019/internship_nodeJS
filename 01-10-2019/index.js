'use strict'
var bodyParser = require('body-parser');
const express = require ('express');
const fs = require('fs');


const app = express(); // se crea el servidor
const port = 5000;

app.get('/', (req, res)=>{  //si es peticion GET y se hace desde la raíz hace lo siguiente

    fs.readFile('./db.json', 'utf-8',(err, data)=>{     // se lee el archivo

        if(data == undefined || data.length == 0){ //si el archivo está vacío 
            res.set('Content-Type', 'text/plain');
            res.status(404);
            res.send('El archivo no existe o está vacío');
        }else{                                      // si el archivo tien contenido va a enviarlo con un status 200 como json
            res.set('Content-Type', 'application/json');
            res.status(200);
            res.send(data);
            console.log(data)
        }
    });

});

app.listen(port, ()=>{ // el servidor estará escuchando en al puerto 5000
    console.log(`example app listening on ${port}`);
})