'use strict'

//Get router
const usersRouter = require('express').Router();

//Get resource
const users = require('../resources/users');

//Set routers
usersRouter.get('/', users.getUsers);
//usersRouter.post('/', users.signUp);
//usersRouter.post('/login', users.logIn);


module.exports = usersRouter;