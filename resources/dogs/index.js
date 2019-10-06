'strict mode';

const getDogs = require('./getDogs');
const addDogs = require('./addDogs');
const editDogs = require('./editDogs');
 

const deleteDog = require('./deleteDog');

module.exports = {
  getDogs,
  addDogs,
  editDogs,
  deleteDog,
};
