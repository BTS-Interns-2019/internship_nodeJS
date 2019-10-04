'use strict'

const login = require('../../daos/getUserLogin');
const returnToken = require('../../filters/tokenValidator');

function loginUser() {
  return new Promise((resolve, reject) => {
    login(req.body)
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
