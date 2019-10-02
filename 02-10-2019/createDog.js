'use strict'

const db = require ('./db');

function createDog(body) {
  return new Promise((resolve, reject) => {
    // db.getConnection((err, connection) => {
    //   if(err) { rejected('DB Connection error'); } // not connected!

    //   // Use the connection to execute a query
    //   // connection.query('INSERT INTO dogs ()', (error, results, fields) => {

    //     // When done with the connection, release it
    //     // connection.release();

    //     // Handle error after the release
    //     // if(err) { throw err }

    //     // resolve the promise
    //     resolve(req.body);
    // });
    console.log(body);
    resolve(body);
  });
}

module.exports = createDog;