'use strict'

const teamsRouter = require('express').Router();
// get teams
const teams = require('../resources/teams/getTeams');
const team = require('../resources/teams/putTeam');
const get = require('../resources/teams/getTeam');

teamsRouter.get('/:id', get);
teamsRouter.get('/', teams);
teamsRouter.put('/:id', team)


module.exports = teamsRouter;