exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("appointment")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("appointment").insert([
        {
          id: "559e52e5-24c2-4144-b4dc-214b362d4118",
          date_of_appointment: "2021-09-25",
          time_of_appointment: "05:30:00",
          client_id: "7f772a98-96eb-41f1-a8ca-697f169ca547",
        },
        {
          id: "2a03b8c2-d740-4e12-b905-476029436752",
          date_of_appointment: "2021-09-26",
          time_of_appointment: "11:45:00",
          client_id: "7f772a98-96eb-41f1-a8ca-697f169ca547",
        },
        {
          id: "deccd2ce-a9c0-4abf-b37e-aa1bca7ffd47",
          date_of_appointment: "2021-09-25",
          time_of_appointment: "05:30:00",
          client_id: "f528500a-4204-4a4e-9dd2-012bafaec119",
        },
      ]);
    });
};
