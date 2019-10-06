'use strict';

// get router
const usersRouter = require('express').Router();

// get resource
const users = require('../resources/users');

const userDataValidator = require('../filters/users');

// JSON schema validator middleware
usersRouter.post('/user', userDataValidator.addUserDataValidator);
usersRouter.post('/login', userDataValidator.loginDataValidator);

usersRouter.post('/user', users.addUsers);
usersRouter.post('/login', users.logIn);

module.exports = usersRouter;