// chat.service.js - scaffolded for myinbox-node project
const chatData = {};

/**
 * שומר הודעה חדשה למשתמש
 */
exports.sendMessage = async (userId, message) => {
  const timestamp = new Date().toISOString();
  const entry = { message, timestamp };

  if (!chatData[userId]) {
    chatData[userId] = [];
  }

  chatData[userId].push(entry);
  return { success: true, entry };
};

/**
 * מחזיר את היסטוריית הצ'אט של המשתמש
 */
exports.getChatHistory = async (userId) => {
  return chatData[userId] || [];
};

/**
 * מוחק את כל ההודעות של המשתמש
 */
exports.deleteChatHistory = async (userId) => {
  delete chatData[userId];
};

/**
 * מוחק הודעה ספציפית לפי אינדקס
 */
exports.deleteMessage = async (userId, index) => {
  if (chatData[userId] && chatData[userId][index]) {
    chatData[userId].splice(index, 1);
  } else {
    throw new Error('הודעה לא קיימת');
  }
};