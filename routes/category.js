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

router.put("/categories/:id", (req, res) => {
  const { name, description, img } = req.body; // same as const name = req.body.name, const description = req.body.description, etc...
  const categoryUpdates = { name, description, img };
  categoryDb
    .updateCategory(req.params.id, categoryUpdates)
    .then(id => res.status(201).json({ id }))
    .catch(err => res.status(500).json(err));
});

router.post("/categories", (req, res) => {
  const { name, description, img } = req.body; // same as const name = req.body.name, const description = req.body.description, etc...
  const newCategory = { name, description, img };
  categoryDb
    .addCategory(newCategory)
    .then(categoryId => res.status(201).json({ categoryId, newCategory }))
    .catch(err => res.status(500).json(err));
});

router.delete("/categories/:id", (req, res) => {
  const id = req.params.id;
  categoryDb
    .deleteCategory(id)
    .then(count => {
      if (count === 1) {
        res.status(200).json(count);
      } else {
        res.status(404).json({ message: "Category not found, try again." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Could not delete category", err });
    });
});

module.exports = router;
