'use strict'

const login = require('../../daos/getUserLogin');

function loginUser(user) {
  return new Promise((resolve, reject) => {
    login(req.body)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      },

      );
  });
}

module.exports = loginUser;
