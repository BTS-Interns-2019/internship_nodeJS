'use strict'

const express = require('express');
const fs = require('fs');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) {
            res.status(404);
            res.send('File doesn´t exist');
        }else {
        if(!data) {
             res.status(200);
             res.send('File is empty');
        } else {
            res.set('content-type', 'application/json');
            res.send(data);
        }
    }
    });
});

app.listen(port, () => {
    console.log(`Node server listenning on port ${port}`);
})