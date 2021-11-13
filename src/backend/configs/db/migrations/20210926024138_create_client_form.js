exports.up = function (knex) {
  return knex.schema.createTable("client_form", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("phone_number").notNullable();
    table.text("message");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("client_form");
};
