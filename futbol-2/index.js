'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const login = require('./getUserLogin');
const signUp = require('./signUp');
var jwt = require('jsonwebtoken');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


//Validacion de usuario y envio de token
app.post('/login', (req, res) => {
    login(req.body)
    .then((data)=>{
        res.set('Content-Type','application/json');
        res.status(200);
        res.send(data);
    })
    .catch((err) => {
        res.set('Content-Type','application/json');
        res.status(400);
        console.log(data)
        res.send(err);
    }

    );
})


//Crear usuario
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

// Validacion de token
app.get('/secure', (req, res) => {
    var token = req.headers['authorization']
    if(!token){
        res.status(401).send({
          error: "Es necesario el token de autenticación"
        })
        return
    }

    token = token.replace('Bearer ', '')

    jwt.verify(token, 'Secret Password', function(err, user) {
      if (err) {
        res.status(401).send({
          error: 'Token inválido'
        })
      } else {
        res.send({
          message: 'Autenticado'
        })
      }
    })
})





// and here
app.listen(port, 'localhost', () => {
    console.log('Server Running on port');
});
