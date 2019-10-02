"use strict";

//Express import
const express = require("express");
const actor = require("./actorDB");
// create an express app
const app = express();
const port = 3000;

app.get("/", (req, res) => {
//end poin
  //get the film
  actor().then(record => {
    res.set("Content-Type", "application/json");
    res.send(record);
  });
});


app.post('/actor',(req, res)=>{
    actor().then(record => {
        res.set("Content-Type", "application/json");
        res.send(record);
      });
    });
    

app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`);
});
