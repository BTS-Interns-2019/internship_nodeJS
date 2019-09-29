const http = require('http');
const fs = require ('fs');

let app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    const txt= fs.readFile('../example.txt','utf-8',(err, data) => {
        if (err) {
            console.log(err);
        }
        res.end(data);
    })
});

app.listen(5000, '127.0.0.1');
console.log('Node server is running on port 5000');