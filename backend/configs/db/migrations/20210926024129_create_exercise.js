exports.up = function (knex) {
  return knex.schema.createTable("exercise", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("(UUID())"));
    table.integer("wger_id");
    table.integer("category").notNullable();
    table.integer("sets");
    table.integer("reps");
    table.integer("time");
    table
      .uuid("workout_id")
      .references("workout.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .defaultTo(knex.raw("(UUID())"));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("exercise");
};
