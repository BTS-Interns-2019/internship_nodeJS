const fs = require('fs');

const readFile = new Promise((resolve, reject) => {
  fs.readFile('./db.json', (err, data) => {
    if (err && err.code === 'ENOENT') {
      reject('File does not exist');
    }

    resolve(data);
  });
});

module.exports = readFile;
