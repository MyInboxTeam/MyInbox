import React, { useState } from 'react';

function Login({ onSwitch }) {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('http://localhost:3001/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  const data = await response.json();
  alert(data.error || 'ההתחברות הצליחה');
  console.log(data.error); // או ניווט/שמירה
};

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        name="email"
        placeholder="אימייל"
        onChange={handleChange}
        required
        className="border p-2 rounded text-right"
      />
      <input
        type="password"
        name="password"
        placeholder="סיסמה"
        onChange={handleChange}
        required
        className="border p-2 rounded text-right"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        התחבר
      </button>
      <p className="text-center text-sm text-gray-600 mt-2">
        אין לך חשבון?{' '}
        <button
          type="button"
          onClick={onSwitch}
          className="text-blue-600 underline hover:text-blue-800"
        >
          הרשם כאן
        </button>
      </p>
    </form>
  );
}

export default Login;
