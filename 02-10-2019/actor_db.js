'use strict'

const db = require('./db_pool');

function getFirstActor() {
  return new Promise((resolve, reject) => {
    // get a connection from the pool
    db.getConnection((err, connection) => {
      if (err) {
        // not connected!
        reject('Database Connection Error!');
      }

      // use the connection to execute a query
      // execute a query
      connection.query('SELECT * FROM actor', (err, results, fields) => {
        // release connection when finished
        connection.release();

        // handle errors
        if (err) {
          throw err;
        }
        // resolve promise
        resolve(results[0]);
      });
    });
  });
}

function addActor(data) {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        reject('Database Connection Error!');
      }

      // insert actor's data
      connection.query(
        `INSERT INTO actor (first_name, last_name) VALUES ('${data.firstName}', '${data.lastName}')`, (err, results) => {
          // release connection
          connection.release();

          // handle errors
          if (err) {
            throw err;
          }
          // resolve promise
          resolve(results.insertId);
        },
      );
    });
  });
}

module.exports = {
  getFirstActor,
  addActor,
};
