const bcrypt = require('bcrypt');
const { sequelize, User } = require('./models');

async function createTestUser() {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // לא force כדי לא למחוק טבלאות קיימות

    const password = await bcrypt.hash('123456', 10);

    const [user, created] = await User.findOrCreate({
      where: { email: 'test@example.com' },
      defaults: {
        name: 'Test User',
        password
      }
    });

    if (created) {
      console.log('✅ משתמש חדש נוצר במסד הנתונים.');
    } else {
      console.log('ℹ️ המשתמש כבר קיים.');
    }

    process.exit();
  } catch (err) {
    console.error('❌ שגיאה בהוספת משתמש:', err);
    process.exit(1);
  }
}

createTestUser();
