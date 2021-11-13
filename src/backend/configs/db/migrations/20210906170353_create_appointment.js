exports.up = function (knex) {
  return knex.schema.createTable("appointment", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
    table.date("date_of_appointment").notNullable();
    table.time("time_of_appointment").notNullable();
    table
      .uuid("client_id")
      .references("client.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .defaultTo(knex.raw("(UUID())"));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("appointment");
};
