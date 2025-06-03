const contacts = [] ;   // נשתמש בזה כזיכרון זמני. בעתיד זה יכול להיות DB.

// יצירת איש קשר חדש
exports.createContact = (req, res) => {
  const newContact = {
    id: Date.now().toString(),
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  };
  contacts.push(newContact);
  res.status(201).json(newContact);
};

// שליפת כל אנשי הקשר
exports.getAllContacts = (req, res) => {
  res.json(contacts);
};

// שליפת איש קשר לפי מזהה
exports.getContactById = (req, res) => {
  const contact = contacts.find(c => c.id === req.params.id);
  if (!contact) return res.status(404).json({ message: 'Contact not found' });
  res.json(contact);
};

// עדכון איש קשר
exports.updateContact = (req, res) => {
  const contact = contacts.find(c => c.id === req.params.id);
  if (!contact) return res.status(404).json({ message: 'Contact not found' });

  contact.name = req.body.name || contact.name; // אם לא נשלח שם חדש, נשאיר את הישן
  contact.email = req.body.email || contact.email;
  contact.phone = req.body.phone || contact.phone;

  res.json(contact);
};

// מחיקת איש קשר
exports.deleteContact = (req, res) => {
  const index = contacts.findIndex(c => c.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Contact not found' });

  const deleted = contacts.splice(index, 1);
  res.json(deleted[0]);
};
