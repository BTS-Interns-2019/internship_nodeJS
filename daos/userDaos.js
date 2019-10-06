'use strict'

const db = require('../config/db.js');

/**
* add a new user (signUp method)
* post an users to the database
* @params {object} data - contain the user data
* @params {string} hash - user password hashed 
* @return {object} user record
**/
function signUp(data, hash) {
  return new Promise((resolve, reject) => {

    db.getConnection((err, connection) => {
      if (err) { 
        //Not Connected!
        reject('DB Connection error'); 
      } 

      connection.query(`SELECT * FROM users WHERE email = '${data.email}'`, (error, results, fields) => {
        if(error) { 
          reject(error.message); 
        }
        if(results.length > 0){
          reject(`ERROR: The email ${data.email} already exists!`);
        } else {
          //Make a query to insert the new user into the database
          connection.query(`INSERT INTO users (firstName, lastName, email, password) VALUES ('${data.firstName}', '${data.lastName}','${data.email}', '${hash}')`, function (error, results, fields) {
       
            //Release the connection
            connection.release();

            //Handle error
            if (err) { 
              reject (err);
            };

            //Resolve the Promise
            resolve(results);
          });
        }
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
          reject(err.message);
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