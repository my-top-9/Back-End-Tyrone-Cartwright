exports.up = function(knex, Promise) {
    return knex.schema.createTable("category", cat => {
        cat.increments();

        cat.string("name", 210)
            .notNullable()
            .unique();
        cat.text("description")
            .notNullable()
            .unique();
        cat.string("img", 25)
            .notNullable()
            .unique();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("category");
};

// reset
