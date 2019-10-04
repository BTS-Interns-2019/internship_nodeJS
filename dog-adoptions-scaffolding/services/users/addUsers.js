'use strict';

const userDaos = require('../../daos/userDaos');
const log4js = require('log4js');
const bcrypt = require('bcryptjs');
const logger = log4js.getLogger('Service addUser.js');
logger.level = 'debug';

/**
* addUsers service
* use the userDaos to add users to the database
* @return {object} the user record added or an error
**/

function addUsers() {
  logger.debug('add users service');
  return new Promise((req, res) => {
    res.set('Content-Type', 'application/json');
    
    const { body } = req;
    if (body.password === body.confirm_password) {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          res.status(400);
          res.send(err);
        }

        bcrypt.hash(body.password, salt, (err, hash) => {
          if (err) {
            res.status(400);
            res.send('Error generating the hash. Try again');
          }

          userDaos.addUsers(body, hash)
            .then((result) => {
              res.status(201);
              res.send(result);
            }).catch((err) => {
              res.send(err)
            })
        });
      });
    } else {
      res.status(400);
      res.send('Password does not match');
    }
  })
};

module.exports = addUsers;