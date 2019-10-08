'use strict'

let loginValidationData = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      minLength: 3,
      format: 'email'
    },
    password: {
      type: 'string',
      minLength: 6
    }
  },
  aditionalProperties: false,
  required: ['email', 'password']
};

module.exports = loginValidationData;