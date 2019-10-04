'use strict';

// get router
const usersRouter = require('express').Router();

// get resource
const users = require('../resources/users');

usersRouter.get('/' ,users.getUsers);

module.exports = usersRouter;
