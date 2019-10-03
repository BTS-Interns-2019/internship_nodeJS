'use stric'
let express = require('express');
let bodyParser = require('body-parser');
let dogs = require('./dogsDB');
let signUp = require('./signUp');
let bcrypt = require('bcrypt');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', (req, res) => {
    dogs.getDog()
    .then((record) => {
      res.set('Content-Type', 'application/json');
      res.send(record)
    });
  });

app.post('/auth/users', (req, res) => {
    res.set('Content-Type', 'application/json');
    
    const { body } = req;
    if (body.password === body.confirm_password) {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          res.status(400);
          res.send(err);
        }
  
        bcrypt.hash(body.password, salt, (err, hash) => {
          if (err) {
            res.status(400);
            res.send('Error generating the hash. Try again');
          }
  
          signUp(body, hash)
            .then((result) => {
              res.status(201);
              res.send(result);
            })
        });
      });
    } else {
      res.status(400);
      res.send('Password does not match');
    }
  });
  

app.listen(port, (req, res) => {
    console.log(`Express running in port ${port}`)
})