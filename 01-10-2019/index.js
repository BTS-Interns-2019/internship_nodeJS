'use strict'

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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

app.post('/', (req, res) => {
    fs.writeFile('./db.json', JSON.stringify(req.body), (err) => {
        if (err) {
            res.status(500);
            res.send('Error on write file');
        }
        fs.readFile('./db.json', 'utf8', (err, data) => {
                if (err) {
                    res.status(200);
                    res.send('Error on read file');
                };
                res.set('content-type', 'application/json');
                res.send(data);
            });
    });
});

app.put('/', (req,res) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) {
            res.status(404);
            res.send('File doesn´t exist');
        };
            data = JSON.parse(data);
            if (data.hasOwnProperty(Object.keys(req.body))) {   
                    data[Object.keys(req.body)] = Object.values(req.body)[0];
                    fs.writeFile('./db.json', JSON.stringify(data), (err) => {
                        if (err) {
                            res.status(200);
                            res.send('Error on write file');
                        };
                        fs.readFile('./db.json', 'utf8', (err, data1) => {
                            if (err) {
                                res.status(200);
                                res.send('Error on read file');
                            };
                            res.set('content-type', 'application/json');
                            res.send(data1);
                            
                        });
                    });
                } else {
                    res.status(200);
                    res.send('The property does not exist on db.json');
                };

    });
});

app.delete('/', (req, res) => {
    fs.readFile('./db.json', 'utf8', (err, data) => {
        if (err) {
            res.status(404);
            res.send('File doesn´t exist');
        };
            data = JSON.parse(data);
            if (Object.values(data).length > 0) {  
                if (data.hasOwnProperty(Object.keys(req.body)) && Object.values(req.body)[0] === 'true') {
                    delete data[Object.keys(req.body)];
                };
               fs.writeFile('./db.json', JSON.stringify(data), (err) => {
                   if (err) {
                       res.status(200);
                       res.send('Error on write file');
                   };
                   fs.readFile('./db.json', 'utf8', (err, data1) => {
                       if (err) {
                           res.status(200);
                           res.send('Error on read file');
                       };
                        res.set('content-type', 'application/json');
                        res.send(data1);
                   });
               });
            } else {
                res.status(200);
                res.send('The property does not exist on db.json');
            };
    });
});

app.listen(port, () => {
    console.log(`Node server listenning on port ${port}`);
})