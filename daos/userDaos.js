'use strict'

const db = require('../config/Db.js');

/**
* add a new user (signUp method)
* post an users to the database
* @return {object} user record
**/

function signUp(data, hash) {
  return new Promise((resolve, reject) => {

    db.getConnection(function(err, connection) {
      if (err) { 
          //Not Connected!
          reject('DB Connection error'); 
        } 

      //Make a query to insert the new user into the database
      connection.query(`INSERT INTO users (first_name, last_name, username, password) VALUES ('${data.first_name}', '${data.last_name}','${data.username}', '${hash}')`, function (error, results, fields) {
       
       //Release the connection
        connection.release();

        //Handle error
        if (error) { throw error};

        //Resolve the Promise
        resolve(results);
      });
    });
  });
}

/**
 * logIn method
 * obtain the user's password to compare it
 * @param {string} email user's email
 * @return {object} database record
 */
function logIn(email) {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        reject('Error connecting to the database');
      }

      // make query to catch valid users
      const query = `SELECT * FROM users WHERE email='${email}'`;

      connection.query(query, (err, results) => {
        // release connection
        connection.release();

        // handle errors
        if (err) {
          reject(err);
        }

        resolve(results[0]);
      });
    });
  });
}



module.exports = { 
    signUp,
    logIn
    }