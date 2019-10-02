'use strict'
// Express and dependencies
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 5000;

app.use( bodyParser.urlencoded({ extended: false }) ); // Parse incomme body as key:value
app.use( bodyParser.json() ); // key:value config parsed to JSON

app.get('/', (req, res) => {

  fs.exists('../30-09-2019/db.json', (exists) => {
    console.log(exists)
    if(!exists){
      res.status(404).send('404 Not Found')
      return;
    }
  });

  fs.readFile('../30-09-2019/db.json', (err, data) => {
    //File doesn't exist
    if(err){
      res.writeHead(400,{"Content-Type": "text/plain"});
      res.end('Oop! Something went wrong, try again.');
    }; 
    // File exist.
    if(data.toString() === ''){
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.end('No content available.');
    }
    else {
      res.writeHead(200,{"Content-Type": "application/json"});
      res.end(data);
    };
  });
 });

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
