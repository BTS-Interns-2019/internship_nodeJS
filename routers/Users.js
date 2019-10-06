'use strict'

//Get router
const express = require('express')
const usersRouter = express.Router();

//Get user resource
const users = require('../resources/users');

//Get the filters
const dataValidation = require('../filters/users');

//Set schema validators as middleware
usersRouter.post('/', dataValidation.newUserValidation);
usersRouter.post('/login', dataValidation.loginValidation);

//Set user routers
usersRouter.post('/', users.signUp);
usersRouter.post('/login', users.logIn);


module.exports = usersRouter;