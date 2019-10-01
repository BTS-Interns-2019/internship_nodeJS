"use strict";

const http = require("http");
const fs = require("fs");

//create a instance of the http server to handle http request
let app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  fs.readFile("../example.txt", (data) => {
    res.end(data);
  });
});

//Start the server on port 300
app.listen(3000, "127.0.0.1");
console.log("Node server running on port 3000");
