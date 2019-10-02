'use strict'

const db = require ('./db');

function createDog(body) {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if(err) { reject('DB Connection error'); } // not connected!

      const keys = Object.keys(body).join(', '); 
      const values = Object.values(body).map((item) => {
        if(typeof item === 'string'){
          return `"${item}"`;
        }
        return item;
      }).join(', ');
      const insert = `INSERT INTO dogs (${keys}) VALUES (${values})`;

      // Use the connection to execute a query
      connection.query(insert, (error, results, fields) => {
        // When done with the connection, release it
        connection.release();

        // Handle error after the release
        if(error) { reject(error.message); }

        // resolve the promise
        resolve();
      });
    });
  });
}

module.exports = createDog;