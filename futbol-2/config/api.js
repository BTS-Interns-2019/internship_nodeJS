"use strict";

const apiApp = require("express")();

const users = require("../routers/routers");
const teams = require('../routers/routeTeams');
apiApp.use("/user", users);

apiApp.use('/teams', teams);

module.exports = apiApp;
