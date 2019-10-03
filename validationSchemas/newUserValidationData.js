'use strict';

let metadataValidationData = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 1
    },
    password: {
      type: 'string',
      minLength: 1
    },
  },
  required: ['name', 'password'],
};

module.exports = metadataValidationData;
