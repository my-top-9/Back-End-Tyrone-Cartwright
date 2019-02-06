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
  return db("users")
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

function addCategory(category, user) {
  const newCategory = { ...category, userId: user.id };
  return db("category").insert(newCategory);
}

function updateCategory(id, category) {
  return db("category")
    .where({ id: id })
    .update(category);
}
