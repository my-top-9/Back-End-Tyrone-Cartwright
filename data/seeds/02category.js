exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("category")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("category").insert([
        {
          name: "basketball",
          description: "game with shot clock",
          img: "img.png"
        },
        { name: "celebrities", description: "famous people", img: "img.png" },
        { name: "baseball", description: "game with bats", img: "img.png" },
        { name: "music", description: "sound bites", img: "img.png" },
        { name: "arts", description: "painting", img: "img.png" },
        { name: "food", description: "dining", img: "img.png" }
      ]);
    });
};
