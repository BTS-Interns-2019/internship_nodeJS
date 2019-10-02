'use strict'

const db = require('./db');

function getFirstFilm() {
  return new Promise((resolve, reject) => {
      db.getConnection(function(err, connection) {
          if (err) { reject('DB Connection error'); } // not connected!

          // Use the connection to execute a query
          connection.query('SELECT * FROM film', function (error, results, fields) {

              // When done with the connection, release it
              connection.release();

              // Handle error after release
              if (error) { throw error};

              // Resolve the promise
              resolve(results[0]);
          });
      });
  });
}


function postFilm() {
  return new Promise((resolve, reject) => {
    db.getConnection(function(err, connection) {
      if (err) { reject('DB Connection error'); } // not connected!

      // Use the connection to execute a query

      connection.query('INSERT * INTO film',(error, result) => {

          response.status(201).send(`User added with ID: ${result.insertId}`);
      });

          // When done with the connection, release it
          connection.release();

          // Handle error after release
          if (error) { throw error};

          // Resolve the promise
          resolve(results[0]);
      });
  });
}


module.exports =  {
  getFirstFilm,
  postFilm
}