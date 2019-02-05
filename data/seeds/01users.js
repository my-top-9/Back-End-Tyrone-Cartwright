const bcrypt = require("bcryptjs");

const password = bcrypt.hashSync("password", 15);
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "victorVUE",
          password: password,
          rank1: "1",
          rank2: "3",
          rank3: "2"
        },
        {
          username: "carolSASS",
          password: password,
          rank1: "3",
          rank2: "1",
          rank3: "2"
        },
        {
          username: "jimSASS",
          password: password,
          rank1: "20",
          rank2: "6",
          rank3: "2"
        },
        {
          username: "bobSASS",
          password: password,
          rank1: "3",
          rank2: "1",
          rank3: "2"
        },
        {
          username: "samSASS",
          password: password,
          rank1: "3",
          rank2: "1",
          rank3: "2"
        },
        {
          username: "joelSASS",
          password: password,
          rank1: "4",
          rank2: "1",
          rank3: "2"
        },
        {
          username: "lucasSASS",
          password: password,
          rank1: "5",
          rank2: "1",
          rank3: "2"
        },
        {
          username: "austinSASS",
          password: password,
          rank1: "3",
          rank2: "1",
          rank3: "2"
        },
        {
          username: "karenSASS",
          password: password,
          rank1: "3",
          rank2: "1",
          rank3: "2"
        },
        {
          username: "keithSASS",
          password: password,
          rank1: "3",
          rank2: "1",
          rank3: "2"
        },
        {
          username: "rogerREACT",
          password: password,
          rank1: "2",
          rank2: "1",
          rank3: "3"
        }
      ]);
    });
};
