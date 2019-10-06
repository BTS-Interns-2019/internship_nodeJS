'use strict'

const updateTeamSchema = {
  description: 'Validation for update team',
  properties: {
    logo: {
      type: 'string',
      minLength: 1,
    },
    name: {
      type: 'string',
      minLength: 1,
    },
    location: {
      type: 'string',
      minLength: 1,
    },
    stadium: {
      type: 'string',
      minLength: 1,
    },
    position: {
      type: 'string',
      minLength: 1,
    },
    games_won: {
      type: 'number',
      minimum: 0,
    },
    games_tied: {
      type: 'number',
      minimum: 0,
    },
    games_lost: {
      type: 'number',
      minimum: 0,
    },
    goals_in_favor: {
      type: 'number',
      minimum: 0,
    },
    goals_against: {
      type: 'number',
      minimum: 0,
    },
  },
};

module.exports = updateTeamSchema;