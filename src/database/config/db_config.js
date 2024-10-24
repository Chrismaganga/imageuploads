const { Sequelize } = require('sequelize');

const db_config = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql', // Specify the dialect here
  }
);

module.exports = db_config;