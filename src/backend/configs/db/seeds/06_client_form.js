exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("client_form")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("client_form").insert([
        {
          id: "c6a2cdba-e304-4eb6-a89a-e167e4c27d07",
          first_name: "Brian",
          last_name: "Dutton",
          phone_number: "9784866879",
        },
        {
          id: "cfb71c4f-6756-442c-ae19-a50f728847d5",
          first_name: "America",
          last_name: "Ducasse",
          phone_number: "9784479986",
          message: "I want to be more fit.",
        },
      ]);
    });
};
