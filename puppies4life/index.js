'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const login = require ('./getUserLogin');
const signUp = require ('./signUp');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    login()
    .then((data)=>{
        res.set('Content-Type','application/json');
        res.status(200);
        res.send(data);
    })
})

app.post('/signUp', (req, res)=>{
    signUp()
    .then((data)=>{
        res.set('Content-Type', 'application/json');
        res.status(200);
        res.send(data);
    })
})

// and here
app.listen(port, 'localhost', () => {
    console.log('Server Running on port');
});
