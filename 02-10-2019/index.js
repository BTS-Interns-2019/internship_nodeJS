const consultas = require('./teamsDB');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    consultas.getFirstTeam()
    .then((record)=>{
        res.set("Content-Type","application/json");
        res.send(record);
    }).catch((e)=>{
        console.log(e)
    });  
});
app.post('/', (req,res)=>{
    const body = req.body;
    if(body["name"]){
        if(body["locations"]){
            if(body["stadium"]){
                if(body["logo"]){
                    consultas.insertTeam(body["name"],body["locations"],body["stadium"],body["logo"])
                    .then((e)=>{
                        res.status(200);
                        res.send("Agregado");
                    })
                    .catch((e)=>{
                        res.status(500);
                        res.send("No se ha podido agregar: " + e);
                    });
                }else{
                    res.status(400);
                    res.send("Falta 'logo'");    
                }
            }else{
                res.status(400);
                res.send("Falta 'stadium'");
            }
        }else{
            res.status(400);
            res.send("Falta 'locations'");
        }
    }else{
        res.status(400);
        res.send("Falta 'name'");
    }
    // console.log(body);
    // consultas.insertTeam()
    // .then()
});

app.listen(port,()=>{
    console.log("Se armó en 5000");
});