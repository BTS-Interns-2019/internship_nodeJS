'use strict'

const loginDataSchema = {
  description: 'Validation for login',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      minLength: 1,
      maxLength: 300,
      pattern: '\\S+'
    },
    password: {
      type: 'string',
      minLength: 1,
      maxLength: 300,
      pattern: '\\S+'
    },
  },
  additionalProperties: false,
  required: [
    'email',
    'password',
  ],
};

module.exports = loginDataSchema;
