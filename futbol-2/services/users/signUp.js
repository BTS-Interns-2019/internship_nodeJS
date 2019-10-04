  
'use strict';

const addUser= require('../../daos/signUp');

/**
 * @return {Promise} promise del signUp
 */
function signUp() {
    return new Promise((resolve, reject) => {
     addUser()
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
    });
  }
  
  module.exports = signUp;