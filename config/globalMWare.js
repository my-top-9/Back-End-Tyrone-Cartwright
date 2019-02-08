const helmet = require("helmet");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const sessionConfig = require("./sessionConfig");

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(morgan("short"));
  server.use(cors());
  server.use(session(sessionConfig));
};
