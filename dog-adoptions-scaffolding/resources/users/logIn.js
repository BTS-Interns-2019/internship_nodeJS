'use strict'

const userServices = require('../../services/users/logIn');

/**
 * 
 * @param {object} req
 * @param {object} res
 */

function logIn(req, res) {
  res.set('Content-Type', 'application/json');
  return userServices.logIn(req.body)
  .then((result) => {
    res.status(200);
    res.send({
      status: 'success',
      message: 'User logged succesful',
      data: result,
    });
  })
  .catch((err) => {
    res.send({
      status: 'failure',
      message: 'There was an error log up the user',
      data: err,
    });
  });
}

module.exports = logIn;