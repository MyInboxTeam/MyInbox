const authService = require('../services/auth.service');

exports.login = async (req, res) => {
  try {
    const token = await authService.login(req.body);
    res.cookie('token', token, {
      httpOnly: true,        // 🛡️ לא נגיש ב-JS
      secure: false,         // true בפרודקשן (HTTPS בלבד)
      sameSite: 'strict',    // חוסם משלוח מדומיין חיצוני
      maxAge: 1000 * 60 * 60 // שעה
    });
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.register = async (req, res) => {
  debugger;
  try {
    console.log('Received body:', req.body); // בדיקה
    const result = await authService.register(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error(error); // חשוב!
    res.status(401).json({ error: error.message || 'Registration failed' });
  }
};

