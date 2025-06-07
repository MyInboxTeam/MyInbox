const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// לוגין
router.post('/login', authController.login);

// הרשמה
router.post('/Register', authController.register);

module.exports = router;
