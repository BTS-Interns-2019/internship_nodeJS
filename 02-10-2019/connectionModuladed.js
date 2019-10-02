'use strict'

const express = require('express');
const connection = require('./dbConfig');


const app = express();
const port = 5000;

app.get('/',(req, res)=>{
    connection.connect();
    connection.query('SELECT * FROM film', function(err, rows, fields){
        if(err)throw "Connection error"
        res.set('Content-Type','application/json');
        res.send(rows[0]);
    })
    connection.end();
});

app.listen(port,()=>{
    console.log(`Init connection, listening in port ${port}`);
})