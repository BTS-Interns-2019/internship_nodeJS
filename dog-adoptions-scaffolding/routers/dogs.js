'use strict';

// get router
const dogsRouter = require('express').Router();

// get resource
const dogs = require('../resources/dogs');

dogsRouter.get('/', dogs.getDogs);
dogsRouter.post('/add', dogs.addDogs)

module.exports = dogsRouter;