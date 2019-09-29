const http = require("http");
const fs = require("fs");

let num = 0;

let app = http.createServe((request, response) => {
    fs.readFile('../readable.json', 'utf-8', (err, data) => {
        
    })
} )