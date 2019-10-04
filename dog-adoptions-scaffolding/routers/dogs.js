'use strict'

const dogsRouter = require('express').Router();

const dogs = require('../resources/dogs');

dogsRouter.get('./dog', dogs.getDog);

module.exports = dogsRouter;