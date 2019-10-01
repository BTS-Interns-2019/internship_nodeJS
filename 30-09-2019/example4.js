'use strict'

const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  // only accept PUT requests
  if (req.method === 'DELETE') {
    let body = [];
    const path = './db.json';

    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();

      // read the file
      fs.readFile(path, (err, data) => {
        if (err) {
          res.writeHead(400, {
            'Content-Type': 'text/plain',
          });

          res.end('There was an error reading the file "db.json". Maybe it does not exist.');
          return;
        }

        let dataObject = JSON.parse(data.toString());
        const bodyObject = JSON.parse(body);
        const keys = Object.keys(bodyObject);

        // delete a property if exists in the original object and is set to true in the new one
        keys.forEach((key) => {
          if (
            dataObject.hasOwnProperty(key)
            && typeof dataObject[key] === 'boolean'
            && !dataObject[key]
            && typeof bodyObject[key] === 'boolean'
            && bodyObject[key]
          ) {
            delete dataObject[key];
          }
        });

        dataObject = JSON.stringify(dataObject);

        fs.writeFile(path, dataObject, (err) => {
          if (err) {
            res.writeHead(400, {
              'Content-Type': 'text/plain',
            });

            res.end('There was an error updating the file "db.json".');
            return;
          }

          res.writeHead(200, {
            'Content-Type': 'application/json',
          });

          res.end(dataObject);
        });
      });
    });
  }
});

app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000...');
