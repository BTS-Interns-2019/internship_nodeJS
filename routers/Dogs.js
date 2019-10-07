'use strict'

//Get router
const express = require('express');
const dogsRouter = express.Router();

//Get resource
const dogs = require('../resources/dogs'); 

//Get de filters
const dataDogValidation = require('../filters/dogs');
const tokenValidation = require('../filters/tokenValidator');

dogsRouter.post('/addDog', tokenValidation);
// dogsRouter.get('/getDogs', tokenValidation);
dogsRouter.put('/editDog/:id', tokenValidation);
dogsRouter.delete('/deleteDog/:name', tokenValidation);


//Set the schema validation as a middleware
dogsRouter.post('/addDog', dataDogValidation.newDogValidation);
dogsRouter.put('/editDog/:id', dataDogValidation.newDogValidation);
dogsRouter.delete('/deleteDog/:name', dataDogValidation.deleteDogValidation);


//Set router
dogsRouter.post('/addDog', dogs.addDogs);
dogsRouter.get('/getDogs', dogs.getDogs);
dogsRouter.put('/editDog/:id', dogs.editDogs);
dogsRouter.delete('/deleteDog', dogs.deleteDog);

module.exports = dogsRouter;