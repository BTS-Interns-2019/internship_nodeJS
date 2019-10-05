'use strict';

const loginUserService = require('../../services/users/loginUser');

function loginUser(req, res) {
    console.log(req.body);
    
  return loginUserService(req.body)
    .then((token) => {
      res.set('Content-Type', 'application/json');
      res.send({ 
        status: 200,
        message: 'Authorization success',
        data: { user: token  }
      });
    })
    .catch((err) => {
      res.status(err.statusCode);
      res.send({
        status: err.statusCode,
        message: err.message,
        data: {},
      });
    });
}

module.exports = loginUser;
