const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');
//const authenticate = require('../middleware/auth.middleware'); // אימות JWT

//router.use(authenticate); // ודא שכל הבקשות מאומתות

router.get('/', contactController.getAllContacts);
router.post('/', contactController.createContact);
router.put('/:id', contactController.updateContact);
router.delete('/:id', contactController.deleteContact);

module.exports = router;
