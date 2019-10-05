'use strict'

//Get router
const express = require('express')
const usersRouter = express.Router();

//Get user resource
const users = require('../resources/users');

//Set user routers
usersRouter.post('/', users.signUp);
usersRouter.post('/login', users.logIn);


module.exports = usersRouter;