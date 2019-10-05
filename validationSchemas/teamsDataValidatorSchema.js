'use strict'

const teamsDataSchema = {
  description: 'Validation for teams',
  properties: {
    logo: {
      type: 'string',
      minLength: 1,
      maxLength: 16777215,
      pattern: '\\S+'
    },
    name: {
      type: 'string',
      minLength: 1,
      maxLength: 120,
      pattern: '\\S+'
    },
    location: {
      type: 'string',
      minLength: 1,
      maxLength: 120,
      pattern: '\\S+'
    },
    stadium: {
      type: 'string',
      minLength: 1,
      maxLength: 120,
      pattern: '\\S+'
    },
    position: {
      type: 'number',
      minimum: 1,
      maximum: 4294967295
    },
    points: {
      type: 'number',
      minimum: 0,
      maximum: 4294967295
    },
    games_played: {
      type: 'number',
      minimum: 0,
      maximum: 4294967295
    },
    games_won: {
      type: 'number',
      minimum: 0,
      maximum: 4294967295
    },
    games_tied: {
      type: 'number',
      minimum: 0,
      maximum: 4294967295
    },
    games_lost: {
      type: 'number',
      minimum: 0,
      maximum: 4294967295
    },
    goals_in_favor: {
      type: 'number',
      minimum: 0,
      maximum: 4294967295
    },
    goals_against: {
      type: 'number',
      minimum: 0,
      maximum: 4294967295
    },
    goal_difference: {
      type: 'number',
      minimum: -2147483648,
      maximum: 2147483647
    }
  },
  additionalProperties: false,
  required: [
    'logo',
    'name',
    'location',
    'stadium',
    'games_won',
    'games_tied',
    'games_lost',
    'goals_in_favor',
    'goals_against'
  ],
};

module.exports = teamsDataSchema;
