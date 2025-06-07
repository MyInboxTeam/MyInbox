const authService = require('../services/auth.service');

exports.login = async (req, res) => {
  debugger;
  try {
    const token = await authService.login(req.body);
    const result = await authService.login(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error('Login error:', error.message); // אופציונלי
    res.status(401).json({ error: error.message || 'Login failed' });
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

