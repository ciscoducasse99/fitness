exports.up = (knex) => {
  return knex.schema.createTable("admin", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("admin_name").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("admin");
};
