// Update with your config settings.

require("dotenv").config({ path: __dirname + "/configs/dev-config.env" });

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.DB_DEV_HOST,
      user: process.env.DB_DEV_USER,
      password: process.env.DB_DEV_PASS,
      database: process.env.DB_DEV_NAME,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/configs/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/configs/db/seeds`,
    },
  },

  production: {
    client: "mysql",
    connection: {
      host: process.env.DB_PROD_HOST,
      user: process.env.DB_PROD_USER,
      password: process.env.DB_PROD_PASS,
      database: process.env.DB_PROD_NAME,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/configs/db/migrations`,
    },
    seeds: {
      directory: `${__dirname}/configs/db/seeds`,
    },
  },
};
