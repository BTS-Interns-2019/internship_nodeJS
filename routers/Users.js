'use strict'

//Get router
const express = require('express')
const usersRouter = express.Router();

//Get resource
const users = require('../resources/users');
//Set routers
usersRouter.post('/', users.signUp);
usersRouter.post('/login', users.logIn);


module.exports = usersRouter;