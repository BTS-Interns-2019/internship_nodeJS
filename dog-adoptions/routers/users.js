'use strict';

// get router
const usersRouter = require('express').Router();

// get resource
const users = require('../resources/users');

usersRouter.post('/' ,users.addUsers);

module.exports = usersRouter;