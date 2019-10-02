'use strict'

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const {
 ReadFile,
 WriteFile,
} = require('./modules.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    ReadFile('./db.json')
        .then((data) => {
            if(!data) {
             res.status(200);
             res.send('File is empty');
        } else {
            res.set('content-type', 'application/json');
            res.send(data);
        }
        })
        .catch((err) => {
            res.status(404);
            res.send('File doesn´t exist');
        });
});

app.post('/', (req, res) => {
    WriteFile('./db.json', JSON.stringify(req.body))
        .then((data) => {
            ReadFile('./db.json')
            .then((data) => {
                res.set('content-type', 'application/json');
                res.send(data);
            })
            .catch((err) => {
               res.status(200);
               res.send('Error on read file'); 
            })
        })
        .catch((err) => {
            res.status(500);
            res.send('Error on write file');
        })

});

app.put('/', (req,res) => {
    ReadFile('./db.json')
        .then((data)=> {
            data = JSON.parse(data);
            if (data.hasOwnProperty(Object.keys(req.body))) {   
                    data[Object.keys(req.body)] = Object.values(req.body)[0];
                        WriteFile('./db.json', JSON.stringify(data))
                        .then((data) => {
                            ReadFile('./db.json')
                                .then((data) => {
                                    res.set('content-type', 'application/json');
                                    res.send(data);
                                })
                                .catch((err) => {
                                     res.status(200);
                                     res.send('Error on read file');
                                })
                        })
                        .catch((err) => {
                            res.status(200);
                            res.send('Error on write file');
                        })
            } else {
                    res.status(200);
                    res.send('The property does not exist on db.json');
                };
        })
        .catch((err) => {
             res.status(200);
             res.send('File doesn´t exist');
        })
});

app.delete('/', (req, res) => {
    ReadFile('./db.json')
        .then((data)=> {
            data = JSON.parse(data);
            if (Object.values(data).length > 0) {  
                if (data.hasOwnProperty(Object.keys(req.body)) && Object.values(req.body)[0] === 'true') {
                    delete data[Object.keys(req.body)];
                };
                        WriteFile('./db.json', JSON.stringify(data))
                        .then((data) => {
                            ReadFile('./db.json')
                                .then((data) => {
                                    res.set('content-type', 'application/json');
                                    res.send(data);
                                })
                                .catch((err) => {
                                     res.status(200);
                                     res.send('Error on read file');
                                })
                        })
                        .catch((err) => {
                            res.status(200);
                            res.send('Error on write file');
                        })
                } else {
                    res.status(200);
                    res.send('The property does not exist on db.json');
            };
        })
        .catch((err) => {
             res.status(200);
             res.send('File doesn´t exist');
        })
});

app.listen(port, () => {
    console.log(`Node server listenning on port ${port}`);
})

