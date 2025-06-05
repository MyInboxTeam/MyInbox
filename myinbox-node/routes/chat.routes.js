// chat.routes.js - scaffolded for myinbox-node project
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chat.controller');

/**
 * שולח הודעה
 */
router.post('/send', chatController.sendMessage);

/**
 * מחזיר את היסטוריית הצ’אט
 */
router.get('/history/:id', chatController.getChatHistory);

/**
 * מוחק את כל הצ’אט של המשתמש
 */
router.delete('/history/:id', chatController.deleteChatHistory);

/**
 * מוחק הודעה בודדת לפי אינדקס
 */
router.delete('/message/:id/:index', chatController.deleteMessage);

module.exports = router;