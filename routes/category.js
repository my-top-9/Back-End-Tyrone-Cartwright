const express = require("express");
const router = express.Router();
const categoryDb = require("../data/helpers/categoryDb.js");

router.get("/categories", (req, res) => {
    categoryDb
        .getAllCategory()
        .then(category => {
            res.json(category);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

router.get("/categories/:id", (req, res) => {
    categoryDb
        .getCategoryById(req.params.id || req.body.id)
        .then(category => res.status(200).json(category))
        .catch(err => res.status(500).json(err));
});

router.post("/categories/:id", (req, res) => {
    const { name, description, img } = req.body; // same as const name = req.body.name, const description = req.body.description, etc...
    const categoryUpdates = { name, description, img };
    categoryDb
        .updateCategory(req.params.id, categoryUpdates)
        .then(id => res.status(201).json({ id }))
        .catch(err => res.status(500).json(err));
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
