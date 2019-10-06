'use strict'

// get router
const teamsRouter = require('express').Router();

// get resource (the one sending the responses)
const teams = require('../resources/teams');

// get filters
const tokenValidator = require('../filters/tokenValidator');
const teamDataValidator = require('../filters/teams');

teamsRouter.put('/:id', tokenValidator);
// JSON schema validator middleware
teamsRouter.put('/:id', teamDataValidator);

// set routes
teamsRouter.get('/', teams.getTeams);
teamsRouter.get('/:id', teams.getTeam);
teamsRouter.put('/:id', teams.updateTeam);
teamsRouter.get('/logo/:img', teams.getImage);

module.exports = teamsRouter;
