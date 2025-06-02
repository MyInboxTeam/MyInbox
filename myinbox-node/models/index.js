const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('MyInboxDB', 'yael_user', 'yael123yael', {
  host: 'localhost\\SQLEXPRESS',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      trustServerCertificate: true,
    },
  },
  logging: false,

  
});
sequelize.authenticate()
  .then(() => console.log('🔌 Connected to SQL Server successfully'))
  .catch(err => console.error('❌ Failed to connect to SQL Server:', err));

  
const Users = require('./users.model')(sequelize, DataTypes);

module.exports = { sequelize, Users };
