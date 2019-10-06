'use strict';

// get router
const dogsRouter = require('express').Router();

// get resource
const dogs = require('../resources/dogs');

const dogsDataValidator = require('../filters/dogs');
dogsRouter.post('/add', dogsDataValidator.dogsAddDataValidators);

dogsRouter.get('/', dogs.getDogs);
dogsRouter.post('/add', dogs.addDogs);
dogsRouter.delete('/:id', dogs.deleteDogs);

module.exports = dogsRouter;