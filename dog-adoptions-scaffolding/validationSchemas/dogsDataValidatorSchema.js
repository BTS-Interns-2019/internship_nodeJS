'use strict'

const dogsDataSchema = {
  description: 'Validation for dogs',
  properties: {
    name: {
      type: 'string',
    },
    age: {
      type: 'number',
      minLength: 1,
      maxLength: 20,
    },
    sex: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    imgUrl: {
      type: 'string',
      minLength: 1,
      maxLength: 16777215,
      pattern: '\\S+'
    }
  },
  additionalProperties: false,
  required: [
    'name',
    'age',
    'sexo',
    'description',
    'imgUrl',
  ],
};

module.exports = dogsDataSchema;