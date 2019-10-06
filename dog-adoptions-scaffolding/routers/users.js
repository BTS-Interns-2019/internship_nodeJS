'use strict';

// get router
const usersRouter = require('express').Router();

// get resource
const users = require('../resources/users');

usersRouter.post('/user', users.addUsers);
usersRouter.post('/login', users.logIn);

module.exports = usersRouter;