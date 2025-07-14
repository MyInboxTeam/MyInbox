// זיכרון זמני לדוגמה – בעתיד תעבורי ל־DB
const users = [
  { id: "1", name: "Yehudit", email: "Yehudit@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
  { id: "3", name: "Pizpi", email: "Pizpon@example.com" },
];

// אנשי קשר ישמרו לפי userId + כינוי
const contacts = [
  { id: "123243", userId: "1", nickName: "Judi" },
  { id: "256456", userId: "2", nickName: "Bobby" },
];

// יצירת איש קשר חדש (בהתבסס על אימייל של יוזר קיים)
exports.createContact = (req, res) => {
  console.log("createContact hit");

  const { email, nickName } = req.body;

  // חיפוש יוזר לפי אימייל
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(404).json({ message: "User not found with this email" });
  }

  // בדיקה אם כבר קיים איש קשר עם אותו userId
  const exists = contacts.find((c) => c.userId === user.id);
  if (exists) {
    return res.status(400).json({ message: "Contact already exists" });
  }

  const newContact = {
    id: Date.now().toString(),
    userId: user.id,
    nickName: nickName || user.name,
  };

  contacts.push(newContact);
  res.status(201).json(newContact);
};

// שליפת כל אנשי הקשר, כולל פרטים מתוך המשתמש
exports.getAllContacts = (req, res) => {
  console.log("Hi From Get All Contacts");

  const enrichedContacts = contacts.map((contact) => {
    const user = users.find((u) => u.id === contact.userId);
    return {
      id: contact.id,
      userId: contact.userId,
      nickName: contact.nickName,
      email: user?.email,
    };
  });

  res.json(enrichedContacts);
};

// שליפת איש קשר לפי מזהה
exports.getContactById = (req, res) => {
  const contact = contacts.find((c) => c.id === req.params.id);
  if (!contact) return res.status(404).json({ message: "Contact not found" });

  const user = users.find((u) => u.id === contact.userId);
  const enriched = {
    id: contact.id,
    userId: contact.userId,
    nickName: contact.nickName,
    fullName: user?.name,
    email: user?.email,
  };

  res.json(enriched);
};

// עדכון כינוי של איש קשר
exports.updateContact = (req, res) => {
  const contact = contacts.find((c) => c.id === req.params.id);
  if (!contact) return res.status(404).json({ message: "Contact not found" });

  contact.nickName = req.body.nickName || contact.nickName;

  res.json(contact);
};

// מחיקת איש קשר
exports.deleteContact = (req, res) => {
  const index = contacts.findIndex((c) => c.id === req.params.id);
  if (index === -1)
    return res.status(404).json({ message: "Contact not found" });

  const deleted = contacts.splice(index, 1);
  res.json(deleted[0]);
};
