'use strict'

const db = require ('./db');
const bcrypt = require('bcryptjs');

const saltRounds = 10;

function createUser(body) {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if(err) { reject('DB Connection error'); } // not connected!

      connection.query(`SELECT * FROM users WHERE email = '${body.email}'`, (error, results, fields) => {
        if(error) { reject(error.message); }
        if(results.length > 0){
          reject(`ERROR: The email ${email} already exists!`);
        }

        bcrypt.hash(body.password, saltRounds, (err, hash) => {
          if(err) { reject(err.message) }

          connection.query(`INSERT INTO users (email, password) VALUES ('${body.email}', '${hash}')`, (error, results, fields) => {
            // When done with the connection, release it
            connection.release();
    
            // Handle error after the release
            if(error) { reject(error.message); }
    
            // resolve the promise
            resolve(`User created succesfully with the following email: ${body.email}`);
          });
        });
      });
    });
  });
}

module.exports = createUser;