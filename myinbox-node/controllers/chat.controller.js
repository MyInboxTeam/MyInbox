// chat.controller.js - scaffolded for myinbox-node project
const chatService = require('../services/chat.service');

/**
 * שולח הודעה עבור משתמש
 */
exports.sendMessage = async (req, res) => {
  try {
    const { userId, message } = req.body;
    const result = await chatService.sendMessage(userId, message);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'שליחת ההודעה נכשלה', details: error.message });
  }
};

/**
 * מחזיר היסטוריית צ'אט של משתמש
 */
exports.getChatHistory = async (req, res) => {
  try {
    const userId = req.params.id;
    const history = await chatService.getChatHistory(userId);
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ error: 'טעינת ההיסטוריה נכשלה', details: error.message });
  }
};

/**
 * מוחק את כל הצ'אט של משתמש
 */
exports.deleteChatHistory = async (req, res) => {
  try {
    const userId = req.params.id;
    await chatService.deleteChatHistory(userId);
    res.status(200).json({ success: true, message: 'הצ’אט נמחק בהצלחה' });
  } catch (error) {
    res.status(500).json({ error: 'מחיקת הצ’אט נכשלה', details: error.message });
  }
};

/**
 * מוחק הודעה ספציפית לפי אינדקס
 */
exports.deleteMessage = async (req, res) => {
  try {
    const { id, index } = req.params;
    await chatService.deleteMessage(id, parseInt(index));
    res.status(200).json({ success: true, message: 'ההודעה נמחקה' });
  } catch (error) {
    res.status(500).json({ error: 'מחיקת ההודעה נכשלה', details: error.message });
  }
};