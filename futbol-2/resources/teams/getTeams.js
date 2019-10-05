'use strict'

const getTeamsService = require('../../services/teams/getTeamsService');
/**
 * @return {Promise}, from services
*/

function getTeams(req, res) {
  return new Promise((resolve, reject) => {
    getTeamsService()
      .then((results) => {
        res.set('Content-Type', 'application/json');
        res.send({ 
          status: 200,
          message: 'Get data succesfully',
          data: {
            results,
          },
        });
      })
      .catch((err) => {
        res.send({
          status: err.statusCode,
          message: err.statusMessage,
          data: {},
        })
      });
  });
}

module.exports = getTeams;