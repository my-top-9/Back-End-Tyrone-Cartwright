const express = require("express");
const router = express.Router();
const categoryDb = require("../data/helpers/categoryDb.js");

router.get("/category", (req, res) => {
  categoryDb
    .getAllCategory()
    .then(category => {
      res.json(category);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
