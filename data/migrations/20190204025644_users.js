exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", users => {
    users.increments();

    users
      .string("username", 128)
      .notNullable()
      .unique()
      .unsigned()
      .references("category");

    users.string("password", 128).notNullable();

    users.integer("rank1").unsigned();
    users.integer("rank2").unsigned();
    users.integer("rank3").unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
