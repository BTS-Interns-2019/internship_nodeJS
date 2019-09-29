const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    const res = new Promise((resolve, reject) => {
        fs.readFile('../readable.json','utf-8', (err, data)=> {
            if (err) {
                reject(err)
            }
            // const toJson = JSON.parse(data)
            
           resolve(data)
        })
    })
    res.then((data) => response.end(data))
    .catch((data) => response.end(data))
});

server.listen(3000, '127.0.0.1');
console.log('Server listen');
