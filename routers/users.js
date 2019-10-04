'use strict'

// get router
const usersRouter = require('express').Router();

// get resource (the one sending the responses)
const users = require('../resources/users');

// set routes
usersRouter.post('/', users.signUp);
usersRouter.post('/login', users.logIn);

module.exports = usersRouter;
