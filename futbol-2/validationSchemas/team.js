'use strict';

let metadataValidationData = {
  type: 'object',
  properties: {
    idequipo: {
      type: 'number',
      minLength: 1,
    },
    logo: {
      type: 'string',
      minLength: 1,
    },
    name: {
      type: 'string',
      minLength: 1
    },
    location: {
      type: 'string',
      minLength: 1
    },
    stadium: {
      type: 'string',
      minLength: 1
    },
    position: {
      type: 'number',
      minLength: 1
    },
    points: {
      type: 'number',
      minLength: 1
    },
    games_played: {
      type: 'number',
      minLength: 1
    },
    games_won: {
      type: 'number',
      minLength: 1
    },
    games_tied: {
      type: 'number',
      minLength: 1
    },
    games_lost: {
      type: 'number',
      minLength: 1
    },
    games_in_favor: {
      type: 'number',
      minLength: 1
    },
    games_against: {
      type: 'number',
      minLength: 1
    },
    goal_difference: {
      type: 'number',
      minLength: 1
    }
  },
  required: ['logo', 'name', 'location', 'stadium', 'position', 'points', 'games_played', 'games_won', 'games_tied', 'games_lost', 'goals_in_favor', 'goals_against', 'goal_difference' ],
};

module.exports = metadataValidationData;