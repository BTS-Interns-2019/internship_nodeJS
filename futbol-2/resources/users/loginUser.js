'use strict';

const loginUserService = require('../../services/users/loginUser');

function loginUser(req, res) {
  return loginUserService()
    .then((token) => {
      res.set('Content-Type', 'application/json');
      res.send({ user: token });
    })
    .catch((err) => {
      res.send(err);
    });
}

module.exports = loginUserService;
