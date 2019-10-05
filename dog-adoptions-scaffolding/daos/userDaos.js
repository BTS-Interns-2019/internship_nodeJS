'use strict'
const db = require('../config/db');

/**
* addUsers method
* add all users from the database
* @return {object} database records
**/
function addUsers(data, hash) {
  return new Promise((resolve, reject) => {
    
    db.query(`INSERT INTO users (name, lastName, email, password) VALUES ('${data.name}', '${data.lastName}','${data.email}', '${hash}')`, function (error, results, fields) {
    
      if (error) { reject(error) };
      resolve(results);
    });
  });
}

module.exports = {
  addUsers
};