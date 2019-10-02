"use strict";

//import express
const express = require("express");
var bodyParser = require("body-parser");
let fs = require("fs");

//create an express app
const app = express(); 
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false })); //indicamos que debe tratarse como llave valor
app.use(bodyParser.json());

//set the routes and methods to listen
//GET
app.get("/", (req, res) => {
  fs.stat("db.json", function(err, data) {
    if (err) {
      res.status(404);
      res.send("El archivo no fue encontrado");
    } else {
      fs.readFile("db.json", "utf-8", (err, data) => {
        res.set("Content-Type", "application/json");
        res.status(200);
        res.send(data);
        console.log(req.body);
      });
    }
  });
});

//POST

app.post("/", (req, res) => {
  fs.stat("db.json", function(err, data) {
    if (err) {
      res.status(404);
      res.send("El archivo no fue encontrado");
    } else {
      fs.writeFile("db.json", JSON.stringify(req.body), (err) => {
        res.set("Content-Type", "application/json");
        res.status(200);
        res.send(data);
        console.log(req.body);
      });
    }
  });
});


//PUT

app.put("/", (req, res) => {
  fs.stat("db.json", function(err, data) {
    if (err) {
      res.status(404);
      res.send("El archivo no fue encontrado");
    } else {
      fs.writeFile("db.json", JSON.stringify(req.body), (err) => {
        res.set("Content-Type", "application/json");
        res.status(200);
        res.send(data);
        console.log(req.body);
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});


