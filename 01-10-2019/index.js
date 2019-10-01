'use strict'

const express = require('express');
const fs = require('fs');

const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    new Promise((resolve, reject)=>{
        fs.readFile('./db.json', (err, data) => {
            if (err){
                reject(err);
            }
            resolve(data);
        })
    })
    .then((data)=>{
        new Promise((resolve, reject)=>{
            if(data.length>0){
                resolve(data);
            }else{
                reject("There is no content in the file");
            }
        })
        .then((data)=>{
            res
            .set('Content-Type','application/json')
            .status(200)
            .send(data);
        })
        .catch((msg)=>{
            console.warn("Warning empty File: "+msg);
            res.status(204)
            .send();
        })
    })
    .catch((err)=>{
        console.error("File doesn't exist: "+err);
        res.status(404)
        .send("File doesn't exist");
    })
})

app.listen(port, ()=>{
    console.log(`Example listening on port ${port}`);
})