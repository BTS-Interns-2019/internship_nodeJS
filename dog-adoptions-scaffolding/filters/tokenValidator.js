
'use strict'
const config = require('../config/constants');
const jwt = require('jsonwebtoken');

function getToken(obj){
  return new Promise((resolve, reject) => {
    jwt.sign(obj, config.TOKEN_KEY, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}

function decriptToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.TOKEN_KEY, (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  });
}

module.exports = {
  getToken
}