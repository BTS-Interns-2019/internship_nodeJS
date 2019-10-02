'use strict'
const express = require('express');
const actor = require('./getFirstActor');
const postActor = require('./postActor');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
// connect to DB
// connection.connect((err) => {
//     if (err) {
//         console.log('connection error', err);
//         return;
//     }
//     console.log('Connection succesfull');

// });
// Get the user 
actor()
.then ((record) => {
    res.set('Content-Type', 'application/json');
    res.send(record);
});
// execute query
// connection.end();
})

app.post('/', (req, res) => {
    console.log(req.body);
    
    postActor(req.body)
    .then((data) => {
        res.set('Content-Type', 'application/json');
        res.status('201');
        res.send(data)
    })
    .catch((data) => {
        res.set('Content-Type', 'application/json');
        res.status('400');
        res.send(data)
    });
});

app.listen(port, '127.0.0.1', () => {
    console.log(`Server listen on port ${port}`);
    
});