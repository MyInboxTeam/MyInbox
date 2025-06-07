const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/jwt');
const { User, Users } = require('../models');

// וגם require למודל User אם יש

exports.login = async ({ email, password }) => {
  debugger;
  const user = await Users.findOne({ where: { email } });
  if (!user) throw new Error('Invalid email or password');

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) throw new Error('Invalid email or password');

  const token = generateToken(user.id);
  console.log('Token:', token);

  return { token };
};

exports.register = async ({ name, email, password }) => {
    // בדיקת משתמש קיים
  debugger;
  const existingUser = await Users.findOne({ where: { email } });
  if (existingUser) {
    throw new Error('משתמש כבר קיים');
  }

  // הצפנת סיסמה
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  // יצירת משתמש חדש במסד
  const newUser = await Users.create({
    name,
    email,
    passwordHash
  });

  return { id: newUser.id, name: newUser.name, email: newUser.email };
};
