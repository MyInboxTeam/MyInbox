const express = require("express");
const app = express();
const contactRoutes = require("./routes/contact.routes");

// ייבוא החיבור למסד והמודלים
const { connectDB, sequelize } = require('./config/db');
const { User, Contact, Message } = require('./models');

// מאפשר קריאת JSON בבקשות POST ו־PUT
app.use(express.json());

// מחבר את הנתיבים
app.use("/api/contacts", contactRoutes);

// טיפול בשגיאות כלליות
process.on("uncaughtException", (err) => {
  console.error("שגיאה שלא נתפסה:", err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("unhandledRejection!", reason);
});

// פונקציית התחלה אסינכרונית
const start = async () => {
  try {
    await connectDB(); // חיבור למסד הנתונים

    // סנכרון הטבלאות לפי המודלים (יוצר אם לא קיים)
    await sequelize.sync(); 
    console.log("All models synced");

    // דוגמה: יצירת משתמש דמה (אם רוצים)
    // await User.create({
    //   name: 'Noa',
    //   email: 'noa@example.com',
    //   passwordHash: 'hashed_password_example'
    // });

    app.listen(3000, () => {
      console.log("השרת מאזין על פורט 3000");
    });

  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

start();
