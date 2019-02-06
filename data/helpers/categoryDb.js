const db = require("../dbConfig.js");

module.exports = {
  getAllCategory,
  getCategoryById,
  getCategoryByUserId,
  addCategory,
  updateCategory,
  deleteCategory
};

function deleteCategory(id) {
  return db("category")
    .where({ id })
    .del();
}

function getAllCategory() {
  return db("category").select("*");
}

function getCategoryById(id) {
  return db("category").where({ id: id });
}

function getCategoryByUserId(id) {
  return db("category").where({ userId: id });
}

function addCategory(category) {
  return db("category").insert(category);
}

function updateCategory(id, category) {
  return db("category")
    .where({ id: id })
    .update(category);
}
