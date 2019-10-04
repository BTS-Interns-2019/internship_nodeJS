'use strict'

const db = require('../config/db');

/**
* getUsers method
* get all users from the database
* @return {object} database records
**/
function getUsers() {
  return new Promise((resolve, reject) => {
    db.getConnection(function(err, connection) {
      if (err) { reject('DB Connection error'); } // not connected!

      // Use the connection to execute a query
      connection.query('SELECT * FROM user', function (error, results, fields) {

        // When done with the connection, release it.
        connection.release();
      
        // Handle error after the release.
        if (error) { throw error };

        // resolve the promise
        resolve(results);
      });
    });
  });
}

module.exports = {
  getUsers
};