'use strict'

const newUserSchema = {
  description: 'Validation for new sign up',
  properties: {
    firstName: {
      type: 'string',
      minLength: 1,
      maxLength: 120,
      pattern: '\\S+'
    },
    lastName: {
      type: 'string',
      minLength: 1,
      maxLength: 120,
      pattern: '\\S+'
    },
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
    validatePassword: {
      type: 'string',
      minLength: 1,
      maxLength: 300,
      pattern: '\\S+'
    },
  },
  additionalProperties: false,
  required: [
    'firstName',
    'lastName',
    'email',
    'password',
    'validatePassword',
  ],
};

module.exports = newUserSchema;
