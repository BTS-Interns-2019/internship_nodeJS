'use strict'

const db = require('../config/db');

/**
* insert a new user method
* post an users to the database
* @return {object} user record
**/

function addUsers(data, hash) {
  return new Promise((resolve, reject) => {

    db.getConnection(function(err, connection) {
      if (err) { reject('DB Connection error'); }
      connection.query(`INSERT INTO users (first_name, last_name, username, password) VALUES ('${data.first_name}', '${data.last_name}','${data.username}', '${hash}')`, function (error, results, fields) {
        connection.release();
        if (error) { throw error};
        resolve(results);
      });
    });
  });
}

module.exports = addUsers