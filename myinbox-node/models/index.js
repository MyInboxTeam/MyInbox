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

  
//const Users = require('./users.model')(sequelize, DataTypes);

//module.exports = { sequelize, Users };

const db = {};

// טעינת המודלים:
db.Users = require('./users.model')(sequelize, DataTypes);
db.Contact = require('./contact.model')(sequelize, DataTypes);

// הוספת מופע sequelize והמחלקה Sequelize (לא חובה, אבל מומלץ):
db.sequelize = sequelize;

module.exports = db;