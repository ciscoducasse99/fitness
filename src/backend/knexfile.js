// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "cisco",
      password: "123456",
      database: "fitness",
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
      host: "127.0.0.1",
      user: "cisco",
      password: "123456",
      database: "fitness",
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
