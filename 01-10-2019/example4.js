'use strict'
var bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');


const app = express(); // se crea el servidor
const port = 5000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let key;
let val;
let obt;
let obtkeys;
let keyspost = [];
let valspost = [];

app.delete('/', (req, res) => {

    fs.readFile('./db.json', 'utf-8', (err, data) => {

        key = Object.keys(req.body)
        val = Object.values(req.body)
        obt = JSON.parse(data)
        obtkeys = Object.keys(obt)

        console.log(Object.entries(obt))

        for (let i = 0; i < key.length; i++) {
            for (let j = 0; j < obtkeys.length; j++) {
                if (key[i] == obtkeys[j] && val[i] == true ) {
                    keyspost.push(key.slice(i, i + 1))
                    valspost.push(val.slice(i, i + 1))
                }
            }
        }
        console.log(keyspost, valspost)

        for (let i = 0; i < keyspost.length; i++) {

            obt[`${keyspost[i]}`] = valspost[i];

        }
        keyspost = [];
        valspost = [];


        obt = JSON.stringify(obt);


        fs.writeFileSync('db.json', obt);
        fs.readFile('./db.json', 'utf-8', (err, data) => {

            res.set('Content-Type', 'application/json');
            res.status(201);
            res.send(data);

        });
    })
})


app.listen(port, () => {
    console.log(`example app listening on ${port}`);
})