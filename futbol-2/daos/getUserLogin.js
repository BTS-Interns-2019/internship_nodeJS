"use strict";

const db = require("../config/db");

function postUser(body) {
  return new Promise((resolve, reject) => {
    db.getConnection((error, connection) => {
      if (error) reject("DB connection Error:", error);

      connection.query(
        `SELECT email, password FROM user WHERE email = '${body.email}'`,
        (error, results, fields) => {

          connection.release();

          if (error) {
            throw error;
          }
          // console.log(results[0].password, body.password);
          if (results[0] !== undefined) {
            resolve(results[0])
          }
        }
      );
    });
  });
}

module.exports = postUser;
