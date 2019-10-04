"use strict";

const apiApp = require("express")();

const users = require("../routers/routers");

apiApp.use("/user", users);

module.exports = apiApp;
