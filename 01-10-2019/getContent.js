const fs = require('fs');
//this function gets the content of a provided file and returned the data, or if its empty
function getContent(file) {
    return new Promise((resolve, reject) => {
      fs.access(file, fs.F_OK, (err) => {
        if (err) {
          reject(404)
        }
      });
      fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
          reject(err)
        }
        if (data === '') {
          resolve('Empty file')
        }
        resolve(data);
      })
    });
  }

  module.exports = getContent;