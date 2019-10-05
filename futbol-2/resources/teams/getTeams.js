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
        res.send({ data: results });
      })
      .catch((err) => {
        res.send(err)
      });
  });
}

module.exports = getTeams;