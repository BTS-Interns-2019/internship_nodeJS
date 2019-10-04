'use strict'

const login = require('../../daos/getUserLogin');
const returnToken = require('../../filters/tokenValidator');

function loginUser(body) {
    
  return new Promise((resolve, reject) => {
    login(body)
      .then((data) => {
        resolve(returnToken(data));
      })
      .catch((err) => {
        reject(err);
      },

      );
  });
}

module.exports = loginUser;
