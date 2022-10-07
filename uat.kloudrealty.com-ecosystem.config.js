module.exports = {
    apps: [
      {
        name: 'kb-api',
        cwd: '/var/www/uat.kloudrealty.com/api',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
          DATABASE_HOST: 'kloud-db-do-user-3345218-0.b.db.ondigitalocean.com', // database endpoint
          DATABASE_PORT: '25060',
          DATABASE_NAME: 'kb-uat', // DB name
          DATABASE_USERNAME: 'kb-admin', // your username for psql
          DATABASE_PASSWORD: 'AVNS_FE7_8BlkwxMD8OCxigQ', // your password for psql
        },
      },
    ],
  };