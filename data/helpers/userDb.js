const db = require("../dbConfig.js");

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
  getAllUsers,
  updateUser,
  deleteUser
};

function registerUser(user) {
  return db("users").insert(user);
}

function loginUser(user) {
  return db("users")
    .where({ username: user.username })
    .first();
}

function getAllUsers() {
  return db("users").select("id", "username", "rank1", "rank2", "rank3", "rank4", "rank5", "rank6", "rank7", "rank8", "rank9",);
}

function getUserInfo(user) {
  console.log(user);
  return db("users")
    .select("id", "username")
    .where({ username: user.username });
}

function updateUser(id, updateInfo) {
  return db("users")
    .where({ id })
    .update(updateInfo);
}

function deleteUser(id) {
  return db("users")
    .where({ id })
    .del();
}
