const fs = require('fs');
// writes in a provided file the buffer
function writeFile(file, buffer) {
    return new Promise((resolve, reject) => {
      fs.writeFile(file, buffer, (err) => {
        if (err) {
          reject(err)
        }
        resolve(buffer)
  
      })
    });
  }

  module.exports = writeFile;