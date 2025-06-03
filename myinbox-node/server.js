const express = require('express');
const app = express();
const contactRoutes = require('./routes/contact.routes');

// מאפשר קריאת JSON בבקשות POST ו־PUT
app.use(express.json());

// מחבר את הנתיבים
app.use('/api', contactRoutes);

app.listen(3000, () => {
  console.log('השרת מאזין על פורט 3000');
});