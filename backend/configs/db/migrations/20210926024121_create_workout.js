exports.up = function (knex) {
  return knex.schema.createTable("workout", (table) => {
    // should be pointing to an api served element

    table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
    table
      .enum("day", [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ])
      .defaultTo("Sunday");
    table
      .uuid("client_id")
      .references("client.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .defaultTo(knex.raw("(UUID())"));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("workout");
};
