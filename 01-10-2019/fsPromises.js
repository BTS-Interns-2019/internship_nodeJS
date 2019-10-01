const fs = require('fs');

// function that returns a promise
function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
} 

module.exports = readFile;
