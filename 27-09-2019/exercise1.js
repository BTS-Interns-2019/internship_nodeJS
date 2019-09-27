"use strict";

const http = require("http");
const fs = require("fs");

//create a instance of the http server to handle http request
let app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  fs.readFile("./example.txt", () => {
    res.end();
  });
});

//Start the server on port 5000
app.listen(3000, "127.0.0.1");
console.log("Node server running on port 3000");
