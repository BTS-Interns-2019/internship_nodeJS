'use strict'

//Get router
const dogsRouter = require('express').Router();

//Get resource
const dogs = require('../resources/dogs');

//Set router
dogsRouter.get('./dog', dogs.getDogs);

module.exports = dogsRouter;