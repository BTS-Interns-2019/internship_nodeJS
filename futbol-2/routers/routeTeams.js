'use strict'

const teamsRouter = require('express').Router();
// get teams
const teams = require('../resources/teams/getTeams');
const team = require('../resources/teams/putTeam');

teamsRouter.get('/', teams);
teamsRouter.put('/',team)


module.exports = teamsRouter;