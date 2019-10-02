'use strict'

const express = require('express');
const film = require('./userDB');

const app = express();
const port = 5000;

app.get('/',(req, res)=>{
    film.getAllUsers()
    .then((record)=>{
        res.set('Content-Type','application/json');
        res.send(record);
    });
});

app.listen(port,()=>{
    console.log(`Init connection, listening in port ${port}`);
})