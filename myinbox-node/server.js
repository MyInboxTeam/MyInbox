const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// חיבור כל הנתיבים

const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes); // עכשיו כל /api/auth/login עובר ל-auth.routes

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});

const { sequelize } = require('./models');

// רק כדי לוודא שהחיבור מתבצע בפועל
sequelize.sync()
  .then(() => console.log('📦 Database synced'))
  .catch((err) => console.error('❌ Sync error:', err));

