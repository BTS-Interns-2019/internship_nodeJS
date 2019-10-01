"use strict";
const http = require("http");
const fs = require("fs");

let app = http.createServer((req, res) => {
  fs.readFile("db.json", "utf8", (error, data) => {
    if (data) {
      let body = [];
      req.on("data", (chunk) => {
          body.push(chunk);
          console.log(chunk);
        }).on("end", () => {
          body = Buffer.concat(body).toString()
        })
          console.log("recibiendo", body);
          res.writeHead(200, { "Content-type": "text/plain" });
          res.end(body);
       
    } else {
        res.end('El archivo no existe o esta vacio')
    }
  })
});

app.listen(3000, "127.0.0.1");
console.log("Node server running on port 3000");
