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
  server.use(cors({ credentials: true, origin: ["http://localhost:3000", "https://my-top-9.herokuapp.com/"] }));
  server.use(session(sessionConfig));
};
