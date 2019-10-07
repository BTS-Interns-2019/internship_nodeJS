'use strict';

// get router
const dogsRouter = require('express').Router();

// get resource
const dogs = require('../resources/dogs');

const dogDataValidator = require('../filters/dog');

dogsRouter.post('/add', dogDataValidator.dogsAddDataValidator);

dogsRouter.get('/', dogs.getDogs);
dogsRouter.post('/add', dogs.addDogs);
dogsRouter.delete('/:id', dogs.deleteDogs);

module.exports = dogsRouter;