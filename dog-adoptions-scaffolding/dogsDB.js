'use strict'

const db = require('./db');


function getDog() {
  return new Promise((resolve, reject) => {

    
db.getConnection(function(err, connection) {
    if (err) { reject('DB Connection error'); } // not connected!

    // Use the connection to execute a query
    connection.query('SELECT * FROM users', function (error, results, fields) {

        // When done with the connection, release it
      connection.release();

      // Handle error after release
      if (error) { throw error};

      // Resolve the promise
      resolve(results);
    });
  });
});
}

module.exports = {
getDog
} 