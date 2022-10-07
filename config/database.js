module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'kloud-db-do-user-3345218-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'kb-prod'),
      user: env('DATABASE_USERNAME', 'kb-admin'),
      password: env('DATABASE_PASSWORD', 'AVNS_FE7_8BlkwxMD8OCxigQ'),
      ssl: {
        rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
  },
});
