'use strict';

const signupSchema = {
  type: 'object',
  properties: {
    first_name: {
      type: 'string',
      minLength: 1,
    },
    last_name: {
      type: 'string',
      minLength: 1,
    },
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
  additionalProperties: false,
  required: ['first_name', 'last_name', 'email', 'password'],
};

const loginSchema = {
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
  additionalProperties: false,
  required: ['email', 'password'],
}
module.exports = { signupSchema, loginSchema } ;