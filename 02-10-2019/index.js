'use strict'
//const connection = require('./dbConfig.js')
var bodyParser = require('body-parser')
const express = require('express')
const user = require('./userDB').getAllUser
const add = require('./userDB').addUser
const update = require('./userDB').updateUser
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    // connection.connect()
    // connection.query('SELECT * FROM user', function (error, rows, fields) {
    //     if (error) throw error;
    //     res.set('Content-Type','application/json')
    //     res.send(rows[0])
    //   });
    
    // connection.end()
    user().then((record)=>{
      res.set('Content-Type','application/json')
      res.send(record)
    })
})

app.post('/',(req,res)=>{
  add(req.body).then((record)=>{
    res.set('Content-Type','application/json')
    res.send(record)
  })
})
app.put('/',(req,res)=>{
  update(req.body).then((record)=>{
    res.set('Content-Type','application/json')
    res.send(record)
  })
})
app.listen(3000, () => { console.log('server on port 3000') })
