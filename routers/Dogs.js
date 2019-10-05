'use strict'

//Get router
const express = require('express');
const dogsRouter = express.Router();

//Get resource
const dogs = require('../resources/dogs');

//Set router
dogsRouter.post('/addDog', dogs.addDogs);
dogsRouter.get('/getDogs', dogs.getDogs);
dogsRouter.delete('/deleteDog', dogs.deleteDog);

module.exports = dogsRouter;