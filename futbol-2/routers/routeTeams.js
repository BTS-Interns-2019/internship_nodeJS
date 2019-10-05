'use strict'

const teamsRouter = require('express').Router();
// get teams
const teams = require('../resources/teams/getTeams');

teamsRouter.get('/', teams);


module.exports = teamsRouter;