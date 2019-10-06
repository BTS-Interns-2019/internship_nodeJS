'use strict'

const bcrypt = require('bcryptjs');
const userDaos = require('../../daos/userDaos');
const getToken = require('../../filters/tokenValidator');

/**
 * 
 * @param {request} req
 * @param {result} res
 */
function logIn(body) {
  return new Promise((resolve, reject) => {
    const email = body.email;
    const password = body.password;
    if(!(email && password)){
      reject('Rquire email and password');
    }
    userDaos.logIn(email)
    .then((result) => {
      if (!result) {
        reject('email wrong');
      }
      bcrypt.compare(password, result.password, (err, verify) => {
        if (!verify) {
          reject('password wrong');
        }
        getToken({ id: result.id, email: result.email })
        .then((token) => {
          delete result.password;
          result.token = token;
          resolve(result);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
      })
    })
    .catch((err) => {
      reject('Ve a ver el servidor');
    });
  })  
}

module.exports = { logIn };