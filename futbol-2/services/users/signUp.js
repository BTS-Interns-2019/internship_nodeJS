  
'use strict';

const addUser= require('../../daos/signUp');

/**
 * @return {Promise} promise del signUp
 */
function signUp(body) {
    return new Promise((resolve, reject) => {
     addUser(body)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
    });
  }
  
  module.exports = signUp;