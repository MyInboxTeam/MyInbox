// models/index.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const User = require('./user.model')(sequelize, DataTypes);
const Contact = require('./contact.model')(sequelize, DataTypes);
const Message = require('./message.model')(sequelize, DataTypes);

module.exports = {
  sequelize,    // חשוב!
  User,
  Contact,
  Message,
};
