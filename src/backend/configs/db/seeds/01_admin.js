exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("admin")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("admin").insert([
        {
          id: "e464ab0e-9e28-4acd-bb43-b6120971b385",
          email: "admin1@email.com",
          password: "testingadmin1",
          admin_name: "admin_1",
        },
        {
          id: "6f024410-eeaf-4f6f-8b10-f4086f863b6f",
          email: "admin2@email.com",
          password: "testingadmin2",
          admin_name: "admin_2",
        },
        {
          id: "04d816b9-a231-4601-8f20-b1e559898377",
          email: "admin3@email.com",
          password: "testingadmin3",
          admin_name: "admin_3",
        },
      ]);
    });
};
