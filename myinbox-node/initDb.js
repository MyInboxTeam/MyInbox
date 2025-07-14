// initDb.js
const { sequelize, User, Contact, Message } = require('./models');

async function init() {
  try {
    await sequelize.sync();
    console.log('All tables synced');

    const user = await User.create({
      name: 'Noa',
      email: 'noa@example.com',
      passwordHash: 'hashed_password_example',
    });

    console.log('Dummy user created:', user.toJSON());

  } catch (error) {
    console.error('DB init error:', error);
  } finally {
    await sequelize.close(); // גם זה עבד רק אם יובא נכון
  }
}

init();
