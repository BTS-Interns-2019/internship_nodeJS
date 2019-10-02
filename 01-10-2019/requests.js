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
                if (metodo == "post") {
                    write(req.body)
                    data = JSON.stringify(req.body)
                } else {
                    res.status(400)
                    res.set('Content-Type', 'text/plain')
                    res.end('El archivo no existe o esta vacío')
                    return
                }
            }
            let data_json = JSON.parse(data)
            res.set('Content-Type', 'application/json')
            if (metodo == "get") {
                res.send(data_json)
                return
            }
            let body = req.body
            for (let key in body) {
                if (!data_json.hasOwnProperty(key) && (metodo == 'put' || (metodo == 'delete' && body[key] === true))) {
                    res.writeHead(400, { 'Content-Type': 'text/plain' });
                    res.end(`No se encontró la propiedad a actualizar ${key}`)
                    return
                }
                if (metodo == 'delete') {
                    if (body[key] == true) {
                        delete data_json[key]
                    }
                } else {
                    data_json[key] = body[key];
                }
            }
            write(data_json)
            res.send(data_json)
            return
        })
    })
}

function write(data) {
    data = JSON.stringify(data)
    fs.writeFile('./db.json', data, function (err) {
        if (err) throw err;
    })
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

module.exports = request;