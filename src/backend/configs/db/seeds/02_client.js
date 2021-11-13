exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("client")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("client").insert([
        {
          id: "7f772a98-96eb-41f1-a8ca-697f169ca547",
          first_name: "Cisco",
          last_name: "Ducasse",
          phone_number: "9788455589",
          current_weight: 245.5,
          admin_id: "e464ab0e-9e28-4acd-bb43-b6120971b385",
        },
        {
          id: "f528500a-4204-4a4e-9dd2-012bafaec119",
          first_name: "Amira",
          last_name: "Dohdouh",
          phone_number: "9784561235",
          current_weight: 154.5,
          admin_id: "e464ab0e-9e28-4acd-bb43-b6120971b385",
        },
        {
          id: "34adf850-bc9b-4496-bdac-0aeeb6aee8f2",
          first_name: "Zeus",
          last_name: "Murphy",
          phone_number: "9784587785",
          current_weight: 158.5,
          admin_id: "6f024410-eeaf-4f6f-8b10-f4086f863b6f",
        },
      ]);
    });
};
