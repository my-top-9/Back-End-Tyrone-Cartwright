exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", users => {
    users.increments();

    users
      .string("username", 128)
      .notNullable()
      .unique()

    users.string("password", 128).notNullable();

    users.integer("rank1").unsigned().defaultTo(1);
    users.integer("rank2").unsigned().defaultTo(1);
    users.integer("rank3").unsigned().defaultTo(1);
    users.integer("rank4").unsigned().defaultTo(1);
    users.integer("rank5").unsigned().defaultTo(1);
    users.integer("rank6").unsigned().defaultTo(1);
    users.integer("rank7").unsigned().defaultTo(1);
    users.integer("rank8").unsigned().defaultTo(1);
    users.integer("rank9").unsigned().defaultTo(1);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
