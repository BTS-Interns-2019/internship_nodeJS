'use strict';

let metadataValidationData = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      minLength: 1,
    },
    password: {
      type: 'string',
      minLength: 1
    },
  },
  required: ['email', 'password'],
};

module.exports = metadataValidationData;