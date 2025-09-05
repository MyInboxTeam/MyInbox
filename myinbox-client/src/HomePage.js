import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ניקוי טוקן/זיכרון אם צריך
    navigate('/');
  };

  return (
    <div>
      {/* סרגל ניווט */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyInbox</h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/contacts')}
            className="hover:underline"
          >
            אנשי קשר
          </button>
          <button
            onClick={handleLogout}
            className="hover:underline"
          >
            צאו
          </button>
        </div>
      </nav>

      {/* תוכן הדף */}
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">ברוכים הבאים לדף הבית</h2>
        {/* תוכן נוסף */}
      </div>
    </div>
  );
}

export default HomePage;
