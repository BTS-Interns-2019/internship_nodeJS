'use strict';

// get router
const dogsRouter = require('express').Router();

// get resource
const dogs = require('../resources/dogs');

// const dogsDataValidator = require('../filters/dog');
// dogsRouter.post('/add', dogsDataValidator.dogsAddDataValidator);

dogsRouter.get('/', dogs.getDogs);
dogsRouter.post('/add', dogs.addDogs);
dogsRouter.delete('/:id', dogs.deleteDogs);

module.exports = dogsRouter;