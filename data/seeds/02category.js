exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("category")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("category").insert([
        { /* 1 */
          name: "basketball",
          description: "game with shot clock",
          img: "img.png"
        },
        {/* 2 */ name: "celebrities", description: "famous people", img: "img.png" },
        {/* 3 */ name: "baseball", description: "game with bats", img: "img.png" },
        {/* 4 */ name: "music", description: "sound bites", img: "img.png" },
        {/* 5 */ name: "arts", description: "painting", img: "img.png" },
        {/* 6 */ name: "food", description: "dining", img: "img.png" }
      ]);
    });
};
