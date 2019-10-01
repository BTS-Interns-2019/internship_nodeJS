const fs = require('fs');

// functions that return a promise

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

function writeFile(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
}

function checkFile(path) {
  return new Promise((resolve, reject) => {
    fs.access(path, fs.F_OK, (err) => {
      if (err) {
        reject(err);
      }

      resolve('File exists');
    });
  });
}

function deleteFromFile(originalData, newData) {
  const keys = Object.keys(newData);

  keys.forEach((key) => {
    if (
      originalData.hasOwnProperty(key)
      && typeof originalData[key] === 'boolean'
      && !originalData[key]
      && typeof newData[key] === 'boolean'
      && newData[key]
    ) {
      delete originalData[key];
    }
  });

  return JSON.stringify(originalData);
}

function BreakChain() {}

module.exports = {
  readFile,
  writeFile,
  checkFile,
  deleteFromFile,
  BreakChain,
};
