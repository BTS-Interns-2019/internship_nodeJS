// 'use strict'
const jwt = require('jsonwebtoken');
const db = require('./db');
const compare = require('./crypt');


function postUser(body) {
  return new Promise((resolve, reject) => {
    db.getConnection((error, connection) => {
      if (error) { throw error; }

      connection.query(`SELECT * FROM user WHERE email = '${body.email}'`, (error, results, fields) => {
        connection.release();
        if (error) { throw error; }
        // check if the results exists, in case of email was uncorrect

        if (results[0] !== undefined) {
          compare(body.password, results[0].password)
            .then((data) => {
              const tokenData = body;

              const token = jwt.sign(tokenData, 'Secret Password', {
                expiresIn: 60 * 60 * 24, // expires in 24 hours
              });

              resolve(token);
            })
            .catch((data) => reject(data));
        } else {
          reject('Wrong credentials');
        }
      });
    });
  });
}

module.exports = postUser;
