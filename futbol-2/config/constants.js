"use strict";
require('dotenv').config()

module.exports = {
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT,
  APP_PORT: process.env.APP_PORT,
  ENV: process.env.ENV
};
