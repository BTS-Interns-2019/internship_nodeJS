'use strict'

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    getData(req,res);
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res)=>{
    new Promise((resolve, reject)=>{
        fs.readFile('./db.json', (err, data) => {
            if (err){
                reject('No file case');
            }
            resolve(data);
        })
    })
    .then((data)=>{
        new Promise((resolve, reject)=>{
            if(data.length>0){
                resolve(data);
            }else{
                reject('No content case');
            }
        })
        .then((data)=>{
            let d = data.toString();
            let newdata=`[${d.substring(1,data.length-1)},${JSON.stringify(req.body)}]`;
            fs.writeFileSync('./db.json',newdata);
            console.log("Written");
            getData(req,res);
        })
        .catch((err)=>{
            fs.writeFile('./db.json',`[${req.body}]`,(err)=>{
                if(err){
                    return console.error("Error in writing the file");
                }
                console.log("Written");
                getData(req,res);
            });
        })
    })
    .catch((err)=>{
        fs.writeFile('./db.json',`[${req.body}]`,(err)=>{
            if(err){
                return console.error("Error in writing the file");
            }
            console.log("Written");
            getData(req,res);
        });
    })
})

app.put('/', (req, res)=>{
    new Promise((resolve, reject)=>{
        fs.readFile('./db.json', (err, data) => {
            if (err){
                reject("There is no file to be modified");
            }
            let d = data.toString();
            resolve(d);
        })
    })
    .then((data)=>{
        new Promise((resolve, reject)=>{
            if(data.length>0){
                resolve(data);
            }else{
                reject('There is no content in the file');
            }
        })
        .then((data)=>{
            new Promise((resolve, reject)=>{
                let request = req.body;
                if(typeof request.id != 'undefined'){
                    resolve(data);
                }else{
                    reject('There is no id property in the body of the request');
                }
            })
            .then((data)=>{
                let jdata = JSON.parse(data);
                let newdata = jdata.map((key)=>{
                    if(key.id === req.body.id){
                        return req.body;
                    }else{
                        return key;
                    }
                })
                fs.writeFileSync('./db.json',JSON.stringify(newdata));
                console.log("Edited");
                getData(req,res);
            })
            .catch((err)=>{
                console.error("Body request id property error: "+err);
                res.status(400)
                .send("Body request id property error");
            })
            
        })
        .catch((err)=>{
            console.error("File hasn't content: "+err);
            res.status(400)
            .send("File hasn't content");
        })
    })
    .catch((err)=>{
        console.error("File doesn't exist: "+err);
        res.status(404)
        .send("File doesn't exist");
    })
})

app.delete('/', (req, res)=>{
    new Promise((resolve, reject)=>{
        fs.readFile('./db.json', (err, data) => {
            if (err){
                reject("There is no file for delete properties");
            }
            let d = data.toString();
            resolve(d);
        })
    })
    .then((data)=>{
        new Promise((resolve, reject)=>{
            if(data.length>0){
                resolve(data);
            }else{
                reject('There is no content in the file');
            }
        })
        .then((data)=>{
            new Promise((resolve, reject)=>{
                let request = req.body;
                if(typeof request.id != 'undefined'){
                    resolve(data);
                }else{
                    reject('There is no id for proceed to deleting process');
                }
            })
            .then((data)=>{
                let jdata = JSON.parse(data);
                let newdata = jdata.filter((key)=>{
                    return key.id != req.body.id;
                })
                fs.writeFileSync('./db.json',JSON.stringify(newdata));
                console.log("Deleted");
                getData(req,res);
            })
            .catch((err)=>{
                console.error("Body request id property error: "+err);
                res.status(400)
                .send("Body request id property error");
            })
            
        })
        .catch((err)=>{
            console.error("File hasn't content: "+err);
            res.status(400)
            .send("File hasn't content");
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

/* FUNCTIONS */
function getData(req, res){
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
}