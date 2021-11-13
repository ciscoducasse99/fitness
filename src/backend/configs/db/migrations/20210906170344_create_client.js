exports.up = function (knex) {
  return knex.schema.createTable("client", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("phone_number").notNullable();
    table.float("current_weight", 4, 1).notNullable();
    table
      .uuid("admin_id")
      .references("admin.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .defaultTo(knex.raw("(UUID())"));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("client");
};
