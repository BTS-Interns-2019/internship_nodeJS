'use strict'

// create a NodeJS server
const http = require('http');
const fs = require('fs');

/**
 * Example 4 - Modify the JSON before sending
 */
// create an instance of the http server to handle HTTP requests
const app = http.createServer((req, res) => {
  fs.readFile('../readable.json', (err, data) => {
    if (err) {
      res.writeHead(400, {
        'Content-Type': 'application/json',
      });
      
      return res.end(JSON.stringify(err));
    }

    // parse data as object
    const jsonObj = JSON.parse(data.toString());
    // set counter of requests
    let reqCounter = 1;

    // get keys from the property
    const keys = Object.keys(jsonObj['web-app'].taglib);

    keys.forEach((key) => {
      // add to counter if there are other request properties
      if (key.includes('request')) {
        reqCounter += 1;
      }
    });

    jsonObj['web-app'].taglib[`request${reqCounter}`] = `request${reqCounter}`;

    // write to the json file
    fs.writeFile('../readable.json', JSON.stringify(jsonObj), (err) => {
      if (err) {
        return err;
      }
    });

    // writing the status code and headers
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });

    // write the response
    return res.end(JSON.stringify(jsonObj));
  });
});

// start the server on port 5000 and hostname 127.0.0.1
app.listen(5000, '127.0.0.1');
console.log('Node server running on port 5000...');
