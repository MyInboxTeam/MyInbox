// db.js - scaffolded for myinbox-node project
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: 'postgres',
  logging: false, // או true אם את רוצה לראות שאילתות בקונסול
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('DB Connected');
  } catch (error) {
    console.error('DB Connection Error:', error);
  }
};

module.exports = { sequelize, connectDB };

