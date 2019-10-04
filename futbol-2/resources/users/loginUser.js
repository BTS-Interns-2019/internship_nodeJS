'use strict';

const loginUserService = require('../../services/users/loginUser');

function loginUser(req, res) {
    console.log(req.body);
    
  return loginUserService(req.body)
    .then((token) => {
      res.set('Content-Type', 'application/json');
      res.send({ user: token });
    })
    .catch((err) => {
      res.send(err);
    });
}

module.exports = loginUser;
