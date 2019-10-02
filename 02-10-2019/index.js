'use strict'
const Express = require('express');
const  user = require('./userDB');
const bodyParser =require('body-parser');
const postUser = require('./postUserDB');



const app = Express();
const port = 5000;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/', (req, res) => {

    user()
    .then((data)=>{

        res.set('Content-Type', 'application/json');
        res.send(data);

    })
});


app.post('/', (req, res) =>{

    postUser(req.body);
})




app.listen(port, () => {
    console.log(`app running on port ${port}`);
});