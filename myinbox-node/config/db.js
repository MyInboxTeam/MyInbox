const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('MyInboxDB', 'yael_user', 'yael123yael', {
  host: 'localhost\\SQLEXPRESS',
  dialect: 'mssql',
});
