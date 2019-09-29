const http = require('http');
const fs = require('fs');

const server= http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': 'text/plain'});
    fs.readFile('../readable.json','utf-8', (err, data)=> {
        if (err) {
            console.log(err);
        }
        res.end(data);
    })

});

server.listen(3000, '127.0.0.1');
console.log('Node on port 3000');
