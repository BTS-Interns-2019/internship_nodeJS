'use strict'
const db = require('../config/db');

/**
* addUsers method
* add all users from the database
* @return {object} database records
**/
function addUsers(data, hash) {
  return new Promise((resolve, reject) => {
    // Use the connection to execute a query
    db.query(`INSERT INTO users (name, lastName, email, password) VALUES ('${data.name}', '${data.lastName}','${data.email}', '${hash}')`, function (error, results, fields) {
    
      // Handle error after the release.
      if (error) { reject(error) };

      // resolve the promise
      resolve(results);
    });
  });
}

/**
 * 
 * @param {string} email email of the user
 */
function getUserByEmail(email){
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) reject (err);
      connection.query(
        'SELECT * FROM users WHERE email = ?', [ email ], (err, result, fields) => {        
          connection.release();   
          // console.log('resultado: '+result);
          if (err) reject (err);
          resolve(result[0]);
        })
    });
  });
}

module.exports = {
  addUsers,
  getUserByEmail,
};
