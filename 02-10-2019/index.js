'use strict'

const express = require('express');
const film = require('./userDB');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req, res)=>{
    film.getAllUsers()
    .then((record)=>{
        res.set('Content-Type','application/json');
        res.send(record);
    });
});

app.post('/',(req, res)=>{
    film.postNewUser(req)
    .then((record)=>{
        res.set('Content-Type','application/json');
        res.send(record);
    })
    .catch((err)=>{
        console.error(err);
    })
})

app.listen(port,()=>{
    console.log(`Init connection, listening in port ${port}`);
})