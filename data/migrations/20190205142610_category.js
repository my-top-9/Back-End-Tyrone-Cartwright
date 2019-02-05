exports.up = function(knex, Promise) {
  return knex.schema.createTable("category", cat => {
    cat.increments();

    cat.string("img", 255).notNullable();

    cat
      .string("name", 128)
      .notNullable()
      .unique();

    cat.text("description").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("category");
};
