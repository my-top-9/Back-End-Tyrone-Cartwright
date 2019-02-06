const express = require("express");
const configMWare = require("../config/globalMWare");
const routeLogin = require("../routes/login");
const routeCategory = require("../routes/category");
const server = express();

configMWare(server);

server.use("/api", routeLogin);
server.use("/api", routeCategory);

module.exports = server;
