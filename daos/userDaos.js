'use strict'

const db = require('../config/db');

/**
* getUsers method
* get all users from the database
* @return {object} database records
**/
async function getUsers() {
  return await new Promise((resolve, reject) => {
    // Use the connection to execute a query
    db.query('SELECT * FROM user', function (error, results, fields) {
    
      // Handle error after the release.
      if (error) { reject(error) };

      // resolve the promise
      resolve(results);
    });
  });
}

module.exports = {
  getUsers
};