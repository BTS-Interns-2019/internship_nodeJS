'use strict'

const db = require('./db');

function getFirstUser() {
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
        resolve(results[0]);
      });
    });
  });
}

function updateUserByID(data) {
  // update the user by the ID
}

module.exports = getFirstUser;