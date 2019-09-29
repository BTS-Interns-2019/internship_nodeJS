const http = require('http');
const fs = require('fs');
let cont = 1;
const app = http.createServer((req, res) => {
    fs.readFile('../readable.json', 'utf8', (err, data) => {
        if (err) { 
            throw Error;
        };
        let Jfile = JSON.parse(data);
        let properties = Object.keys(Jfile['web-app'].taglib);

        properties.forEach((property) => {
            if (property.includes('request')) {
            cont += 1;
        };
        });

Jfile['web-app'].taglib[`request${cont}`] = `request${cont}`;
data = JSON.stringify(Jfile);    

fs.writeFile('../readable.json', data, (err) => {
    if (err) {
        throw Error;
    };
});

res.writeHead(200, {'conten-type': 'application/json'});
res.end(data);

    });
});

app.listen(5000, '127.0.0.1');
console.log('Server listen on port 5000');