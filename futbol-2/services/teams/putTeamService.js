  'use strict';

const editarEquipo= require('../../daos/putTeam');

/**
 * @return {Promise} promise del signUp
 */
function editar(body) {
    return new Promise((resolve, reject) => {
     editarEquipo(body)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
    });
  }
  
  module.exports =editar;