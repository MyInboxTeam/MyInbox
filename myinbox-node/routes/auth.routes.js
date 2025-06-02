const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// הגדרת הנתיב: POST /api/auth/login
router.post('/login', authController.login);
router.post('/Register', authController.register);

module.exports = router;
