exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", users => {
    users.increments();

    users
      .string("username", 128)
      .notNullable()
      .unique()

    users.string("password", 128).notNullable();

    users.integer("rank1").unsigned();
    users.integer("rank2").unsigned();
    users.integer("rank3").unsigned();
    users.integer("rank4").unsigned();
    users.integer("rank5").unsigned();
    users.integer("rank6").unsigned();
    users.integer("rank7").unsigned();
    users.integer("rank8").unsigned();
    users.integer("rank9").unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
