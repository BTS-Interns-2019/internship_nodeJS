'use strict'

const loginUserService = require('../../services/users/loginUser');

function loginUser(req, res) {
  return loginUserService()
    .then((token) => {
      res.set('Content-Type', 'application/json');
      res.send({ users: data });
    })
    .catch((err) => {
        res.send(err);
    });
}
