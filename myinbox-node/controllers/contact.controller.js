const ContactsService = require('../services/contact.service'); // נניח שיש לך מודל כזה

exports.getAllContacts = async (req, res) => {
  debugger;
  try {
    const result = await ContactsService.getAll(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error('getAllContacts error:', error.message); // אופציונלי
    res.status(401).json({ error: error.message || 'getAllContacts failed' });
  }
};

exports.createContact = async (req, res) => {
  debugger;
  try {
    const result= await ContactsService.create(req.body);
    res.result(200).json(result);
  } catch (error) {
    res.status(401).json(error.message)
  }
};

exports.updateContact = async (id, data) => {
  const contact = await Contacts.findByPk(id);
  if (!contact) throw new Error('Contact not found');
  return await contact.update(data);
};

exports.deleteContact = async (id) => {
  const contact = await Contacts.findByPk(id);
  if (!contact) throw new Error('Contact not found');
  return await contact.destroy();
};
