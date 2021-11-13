exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("workout")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("workout").insert([
        {
          id: "e13c35e5-dc9c-4be0-96f8-e32e0f814dd8",
          day: "Monday",
          client_id: "7f772a98-96eb-41f1-a8ca-697f169ca547",
        },
        {
          id: "c9fe1490-a573-4fe2-b805-a0f230b13092",
          day: "Friday",
          client_id: "7f772a98-96eb-41f1-a8ca-697f169ca547",
        },
        {
          id: "ca3ca546-d806-45e4-bc1f-ce489d94d97e",
          day: "Sunday",
          client_id: "f528500a-4204-4a4e-9dd2-012bafaec119",
        },
      ]);
    });
};
