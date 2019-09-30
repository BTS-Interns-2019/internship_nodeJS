const http = require('http');
const fs = require('fs');

let app = http.createServer((req, res) => {
    fs.readFile ('../readable.json', 'utf8', (err, data) => {
        if (err) {
            throw Error;
        }

        res.writeHead(200, {'content-type': 'application/json'});
        res.end(data);
    });
});

app.listen(5000, '127.0.0.1');
console.log('Server listen on port 5000');