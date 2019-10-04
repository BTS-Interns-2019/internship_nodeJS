'use strict';

// get router
const usersRouter = require('express').Router();

// get resource
const login = require('../resources/users/loginUser');
const signUp = require('../resources/users/signUp');

usersRouter.get('/' ,login.login);
usersRouter.get('/' ,signUp.signUp);



module.exports = usersRouter;

