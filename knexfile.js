// Update with your config settings.

const localpg = {
  host: "localhost",
  database: "next-react-node"
};
const productionDbConnection = process.env.DATABASE_URL || localpg;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./server/database/db.db3"
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./server/database/migrations"
    },
    seeds: {
      directory: "./server/database/seeds"
    }
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./server/database/testing.db3"
    },
    migrations: {
      directory: "./server/database/migrations"
    },
    seeds: {
      directory: "./server/database/seeds"
    }
  },

  production: {
    client: "pg",
    connection: productionDbConnection,
    migrations: {
      directory: "./server/database/migrations"
    },
    seeds: {
      directory: "./server/database/seeds"
    }
  }
};
