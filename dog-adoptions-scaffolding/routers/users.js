'use strict'

const usersRouter = require('express').Router();

const users = require('../resources/users');

usersRouter.post('./auth/users', users.addUsers);

module.exports = usersRouter;