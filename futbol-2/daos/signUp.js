"use strict";
const db = require("../config/db");
const bcrypt = require("bcryptjs");

/**
 *
 * @param {user} user object
 * @return {Promise} promise query
 */
function addUser(user) {
  return new Promise((resolve, reject) => {
    db.getConnection(function(err, connection) {
      if (err) {
        reject("DB connection error", err);
      }
      bcrypt
        .hash(user.password, 5)
        .then(res => {
          user.password = res;
          connection.query(
            `INSERT INTO user (email, password) values ('${user.email}','${user.password}')`,
            function(error, results, fields) {
              connection.release();
              if (error) {
                throw error;
              }
              resolve(user);
            }
          );
        })
        .catch(err => console.error(err.message));
    });
  });
}

module.exports = addUser;
