const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact.controller");
//const verifyToken = require("../middleware/auth");

//router.use(verifyToken);

// יצירת איש קשר חדש
router.post("/", contactController.createContact);

// שליפת כל אנשי הקשר
router.get("/", contactController.getAllContacts);

// שליפת איש קשר לפי מזהה
router.get("/:id", contactController.getContactById);

// עדכון איש קשר לפי מזהה
router.put("/:id", contactController.updateContact);

// מחיקת איש קשר לפי מזהה
router.delete("/:id", contactController.deleteContact);

module.exports = router;
