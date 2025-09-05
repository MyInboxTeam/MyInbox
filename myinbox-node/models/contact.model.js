module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("Contact", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    contact_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_email: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'Contact',
    timestamps: false
  });
    return Contact;
  };
  
