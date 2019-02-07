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
          rank3: "2",
          rank4: "4",
          rank5: "5",
          rank6: "6",
          rank7: "7",
          rank8: "8",
          rank9: "9"
        },
        {
          username: "carolSASS",
          password: password,
          rank1: "3",
          rank2: "1",
          rank3: "2",
          rank4: "4",
          rank5: "5",
          rank6: "6",
          rank7: "7",
          rank8: "8",
          rank9: "9"
          
        },
        {
          username: "jimSASS",
          password: password,
          rank1: "3",
          rank2: "6",
          rank3: "2",
          rank4: "4",
          rank5: "5",
          rank6: "6",
          rank7: "7",
          rank8: "8",
          rank9: "9"
        },
        {
          username: "bobSASS",
          password: password,
          rank1: "3",
          rank2: "6",
          rank3: "2",
          rank4: "4",
          rank5: "5",
          rank6: "6",
          rank7: "7",
          rank8: "8",
          rank9: "9"
        },
        {
          username: "samSASS",
          password: password,
          rank1: "3",
          rank2: "1",
          rank3: "2",
          rank4: "4",
          rank5: "5",
          rank6: "6",
          rank7: "7",
          rank8: "8",
          rank9: "9"
        },
        {
          username: "joelSASS",
          password: password,
          rank1: "3",
          rank2: "6",
          rank3: "2",
          rank4: "4",
          rank5: "5",
          rank6: "6",
          rank7: "7",
          rank8: "8",
          rank9: "9"
        },
        {
          username: "lucasSASS",
          password: password,
          rank1: "5",
          rank2: "1",
          rank3: "2",
          rank4: "4",
          rank5: "5",
          rank6: "6",
          rank7: "7",
          rank8: "8",
          rank9: "9"
        },
        {
          username: "austinSASS",
          password: password,
          rank1: "3",
          rank2: "1",
          rank3: "2",
          rank4: "4",
          rank5: "5",
          rank6: "6",
          rank7: "7",
          rank8: "8",
          rank9: "9"
        },
        {
          username: "karenSASS",
          password: password,
          rank1: "3",
          rank2: "1",
          rank3: "2",
          rank4: "4",
          rank5: "5",
          rank6: "6",
          rank7: "7",
          rank8: "8",
          rank9: "9"
        },
        {
          username: "keithSASS",
          password: password,
          rank1: "3",
          rank2: "1",
          rank3: "2",
          rank4: "4",
          rank5: "5",
          rank6: "6",
          rank7: "7",
          rank8: "8",
          rank9: "9"
        },
        {
          username: "rogerREACT",
          password: password,
          rank1: "2",
          rank2: "1",
          rank3: "3",
          rank4: "4",
          rank5: "5",
          rank6: "6",
          rank7: "7",
          rank8: "8",
          rank9: "9"
        }
      ]);
    });
};
