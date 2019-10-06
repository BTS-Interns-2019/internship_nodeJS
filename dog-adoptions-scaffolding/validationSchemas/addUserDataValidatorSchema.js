'use strict'

const newUserSchema = {
  description: 'Validation for new sign up',
  properties: {
    name: {
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
    confirm_password: {
      type: 'string',
      minLength: 1,
      maxLength: 300,
      pattern: '\\S+'
    },
  },
  additionalProperties: false,
  required: [
    'name',
    'lastName',
    'email',
    'password',
    'confirm_password',
  ],
};

module.exports = newUserSchema;