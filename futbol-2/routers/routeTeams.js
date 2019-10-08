'use strict'

const teamsRouter = require('express').Router();
// get teams
const teams = require('../resources/teams/getTeams');
const team = require('../resources/teams/putTeam');
const getTeam = require ('../resources/teams/getTeam')

teamsRouter.get('/:id', team);
teamsRouter.get('/', teams);
teamsRouter.put('/:id', getTeam);


module.exports = teamsRouter;