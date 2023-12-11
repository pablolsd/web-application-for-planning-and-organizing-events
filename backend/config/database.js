module.exports = {
  development: {
    username: 'myuser',
    password: 'mypassword',
    database: 'mydatabase',
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
