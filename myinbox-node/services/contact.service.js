const { Contact } = require('../models');

exports.getAll = async () => {
  return await Contact.findAll();
};

exports.create = async (data) => {
  try {
    const newContact = {
      user_id: data.user_id,
      contact_name: data.contact_name,
      contact_email: data.contact_email
    };

    const created = await Contact.create(newContact);
    return created;
  } catch (error) {
    console.error('❌ שגיאה ביצירת איש קשר:', error);
    throw new Error('יצירת איש הקשר נכשלה');
  }
};


exports.update = async (id, data) => {
  const contact = await Contact.findByPk(id);
  if (!contact) throw new Error('Contact not found');
  return await contact.update(data);
};

exports.remove = async (id) => {
  const contact = await Contact.findByPk(id);
  if (!contact) throw new Error('Contact not found');
  return await contact.destroy();
};
