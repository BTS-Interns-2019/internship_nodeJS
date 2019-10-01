'use strict'

const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  // only accept PUT requests
  if (req.method === 'PUT') {
    let body = [];
    const path = './db.json';

    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();

      // check if file exists
      fs.access(path, (err) => {
        if (err) {
          res.writeHead(400, {
            'Content-Type': 'text/plain',
          });

          res.end('File "db.json" does not exist');
          return;
        }

        // read the file
        fs.readFile(path, (err, data) => {
          if (err) {
            res.writeHead(400, {
              'Content-Type': 'text/plain',
            });

            res.end('There was an error reading the file "db.json".');
            return;
          }

          let dataObject = JSON.parse(data.toString());
          const bodyObject = JSON.parse(body);
          const keys = Object.keys(bodyObject);

          // update the properties of the object
          keys.forEach((key) => {
            if (dataObject.hasOwnProperty(key)) {
              dataObject[key] = bodyObject[key];
            }
          });

          dataObject = JSON.stringify(dataObject);

          // write the file with the updated object
          fs.writeFile(path, dataObject, (err) => {
            if (err) {
              res.writeHead(400, {
                'Content-Type': 'text/plain',
              });

              res.end('There was an error updating the file "db.json".');
            }

            res.writeHead(200, {
              'Content-Type': 'application/json',
            });
    
            res.end(dataObject);
          });
        });
      });
    });
  }
});

app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000...');
