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

router.get("/category/:id", (req, res) => {
  const { id } = req.params.id;
  categoryDb
    .getCategoryById()
    .then(category => {
      if (category) {
        res.status(200).json(category);
      } else {
        res.status(404).json({
          message: `Category not found with the specified ${id} given, try again.`
        });
      }
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

router.post("/category", (req, res) => {
  const { img, name, description } = req.body;
  const newCategory = { img, name, description };
  categoryDb
    .addCategory(newCategory)
    .then(category => {
      res.status(201).json(category);
    })
    .catch(err => {
      res.status(500).json({
        error: "Could not add a new category, category already exists.",
        err
      });
    });
});

module.exports = router;
