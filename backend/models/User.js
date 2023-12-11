const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { hashPassword } = require('../security/utils/encryption');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user',
  },
});

User.beforeCreate(async (user) => {
  user.password = await hashPassword(user.password);
});

module.exports = User;
