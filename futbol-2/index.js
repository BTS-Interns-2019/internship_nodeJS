'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const login = require('./getUserLogin');
const signUp = require('./signUp');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    login(req.body)
        .then((data) => {
            

            bcrypt
                .compare(req.body.password, data)
                .then(res => {
                    console.log(res.password);
                    res.set('Content-Type', 'application/json');
                    res.status(200);
                    res.send(res);

                })
                .catch(err => console.error(err.message));


        })
})

app.post('/signUp', (req, res) => {
    signUp(req.body)
        .then((data) => {
            res.set('Content-Type', 'application/json');
            res.status(200);
            res.send(data);
        }).catch((e) => {
            res.set('Content-Type', 'text/plain');
            res.status(400);
            res.send(e);
        })
})

// and here
app.listen(port, 'localhost', () => {
    console.log('Server Running on port');
});
