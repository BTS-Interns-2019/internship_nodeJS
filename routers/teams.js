'use strict'

// get router
const teamsRouter = require('express').Router();

// get resource (the one sending the responses)
const teams = require('../resources/teams');

// get filters
const teamDataValidator = require('../filters/teams');

// JSON schema validator middleware
teamsRouter.put('/:id', teamDataValidator);

// set routes
teamsRouter.get('/', teams.getTeams);
teamsRouter.get('/:id', teams.getTeam);
teamsRouter.get('/logo/:img', teams.getImage);

module.exports = teamsRouter;
