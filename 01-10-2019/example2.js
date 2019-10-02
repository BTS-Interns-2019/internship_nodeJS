'use strict'
var bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');


const app = express(); // se crea el servidor
const port = 5000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var key;
var val;
var obt;

app.post('/', (req, res) => {

    fs.readFile('./db.json', 'utf-8',(err, data)=>{

    key = Object.keys(req.body)
    val = Object.values(req.body)
    obt = JSON.parse(data)

    for(let i = 0; i < key.length; i++){
       
        obt[`${key[i]}`] = val[i];

    }

    obt = JSON.stringify(obt);


    fs.writeFileSync('db.json', obt);
    fs.readFile('./db.json', 'utf-8',(err, data)=>{

        res.set('Content-Type', 'application/json');
        res.status(201);
        res.send(data);

        });
    })
})


app.listen(port, () => {
    console.log(`example app listening on ${port}`);
})