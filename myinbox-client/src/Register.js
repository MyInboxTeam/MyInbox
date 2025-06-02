import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data); // או ניווט/שמירה
      alert(data.error || 'נרשמת בהצלחה');
    } catch (err) {
      alert('שגיאה בהרשמה');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input name="name" type="text" placeholder="שם מלא" onChange={handleChange} required className="border p-2 rounded" />
      <input name="email" type="email" placeholder="אימייל" onChange={handleChange} required className="border p-2 rounded" />
      <input name="password" type="password" placeholder="סיסמה" onChange={handleChange} required className="border p-2 rounded" />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        הרשמה
      </button>
    </form>
  );
}

export default Register;