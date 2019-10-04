'use strict'

// get router
const teamsRouter = require('express').Router();

// get resource (the one sending the responses)
const teams = require('../resources/teams');

// set routes
teamsRouter.get('/', teams.getTeams);
teamsRouter.get('/:id', teams.getTeam);
teamsRouter.get('/logo/:img', teams.getImage);

module.exports = teamsRouter;
