'use strict'
const express = require('express');
var bodyParser = require('body-parser');
const fs = require('fs');
// Help us to maniulate the request's body

//Create app
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Set the routes nd methods to listen
app.get('/', (req, res) => {
    console.log(req.body);
    getContent('db.json')
        .then((data) => {
            res.set('Content-Type', 'application/json');
            res.status(200);
            res.send(data);
        })
        .catch((err) => {
            if (err === 404) {
                res.set('Content-Type', 'application/json');
                res.status(404);
                res.send('File not found');
            } else {
                res.set('Content-Type', 'application/json');
                res.status(400);
                res.send(err);
            }
        });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});



function getContent(file) {
    return new Promise((resolve, reject) => {
        fs.access(file, fs.F_OK, (err) => {
            if (err) {
                reject(404)
            }
        });
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            }
            if (data === '') {
                resolve('Empty file')
            }
            resolve(data);
        })
    });
}