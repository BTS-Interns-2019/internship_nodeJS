'use strict'

const db = require ('./db');

function getDogs() {
  return new Promise((resolve, rejected) => {
    db.getConnection((err, connection) => {
      if(err) { rejected('DB Connection error'); } // not connected!

      // Use the connection to execute a query
      connection.query('SELECT * FROM dogs', (error, results, fields) => {

        // When done with the connection, release it
        connection.release();

        // Handle error after the release
        if(error) { throw error }

        // resolve the promise
        resolve(results);
      }); 
    });
  });
}

module.exports = getDogs;