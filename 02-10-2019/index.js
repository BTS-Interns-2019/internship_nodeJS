const consultas = require('./teamsDB');

const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    consultas.firstTeam()
    .then((record)=>{
        res.set("Content-Type","application/json");
        res.send(record);
    }).catch((e)=>{
        console.log(e)
    });  
});
app.post('/', (req,res)=>{

});

app.listen(port,()=>{
    console.log("Se armo en 5000");
});