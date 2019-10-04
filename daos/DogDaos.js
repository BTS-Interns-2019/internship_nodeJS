'use strict'

const db = require('../config/db.js');

function getDog() {
  return new Promise((resolve, reject) => {

    
db.getConnection(function(err, connection) {
    if (err) { 
        // Not connected!
        reject('DB Connection error'); 
    } 

    //invoque connection to execute a query
    connection.query('SELECT * FROM dogs', function (error, results, fields) {

        // Release, when connection finish
      connection.release();

      // Handle error after release
      if (error) { throw error};

      // Promise resolve
      resolve(results);
      });
    });
  });
}

module.exports = {
getDog
} 