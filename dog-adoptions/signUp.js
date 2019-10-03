'use strict'

const db = require('./db');

function signUp(data, hash) {
  return new Promise((resolve, reject) => {

db.getConnection(function(err, connection) {
    if (err) { reject('DB Connection error'); }
    connection.query('INSERT INTO users SET ?', data, function (error, results, fields) {
      connection.release();
      if (error) { throw error};
      resolve(results);
      });
    });
  });
}

module.exports = {
  signUp
}