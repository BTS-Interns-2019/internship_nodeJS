'use strict'

const jwt = require('jsonwebtoken');

const key = 'Esta es la clavecilla secreta';

function getToken(obj){
  return new Promise((resolve, reject) => {
    jwt.sign(obj, key, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}

function decriptToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, key, (err, data) => {
      if (err) reject(err);
      resolve(data);
    })
  });
}

module.exports = {
  getToken
}

