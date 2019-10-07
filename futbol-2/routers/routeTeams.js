'use strict'

const teamsRouter = require('express').Router();
// get teams
const teams = require('../resources/teams/getTeams');
const team = require('../resources/teams/putTeam');
const getTeam = require ('../resources/teams/getTeam')

teamsRouter.get('/', teams);
teamsRouter.get('/:id', getTeam)
teamsRouter.put('/',team)


module.exports = teamsRouter;