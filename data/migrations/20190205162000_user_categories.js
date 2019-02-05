exports.up = function(knex, Promise) {
  return knex.schema.createTable("users_categories", tbl => {
    tbl.increments();
    tbl
      .integer("userId")
      .unsigned()
      .references("id")
      .inTable("users");

    tbl
      .integer("catId")
      .unsigned()
      .references("id")
      .inTable("category");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users_categories");
};
