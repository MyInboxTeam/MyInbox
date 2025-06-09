const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());



// חיבור כל הנתיבים

// לוגין 
const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes); // עכשיו כל /api/auth/login עובר ל-auth.routes

// אנשי קשר
app.use('/api/contacts', require('./routes/contact.routes'));

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});

const { sequelize } = require('./models');

// רק כדי לוודא שהחיבור מתבצע בפועל
sequelize.sync()
  .then(() => console.log('📦 Database synced'))
  .catch((err) => console.error('❌ Sync error:', err));


