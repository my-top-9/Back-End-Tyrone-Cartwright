exports.up = function(knex, Promise) {
  return knex.schema.createTable("category", cat => {
    cat.increments();

    cat
      .string("name", 128)
      .notNullable()
      .unique();

    cat.string("category", 128).notNullable();

    cat.text("description").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("category");
};
