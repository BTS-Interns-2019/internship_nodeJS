'use strict'
var bodyParser = require('body-parser')
const express = require('express')
const fs = require('fs')
const app = express()
const port = 5000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

function request(metodo, ruta) {
    app[metodo](ruta, (req, res) => {
        fs.readFile('./db.json', 'utf8', function (err, data) {
            if (err || data == '') {
                res.status(400)
                res.set('Content-Type', 'text/plain')
                res.end('El archivo no existe o esta vacío')
                return
            }
            let data_json = JSON.parse(data)
            res.set('Content-Type', 'application/json')
            if (metodo == "get") {
                res.send(data_json)
                return
            }
            /*if(metodo=="put"){
                let body = req.body
                for(let key in body){

                }
            }*/
        })
    })
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

module.exports = request;