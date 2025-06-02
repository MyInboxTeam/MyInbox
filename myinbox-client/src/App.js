import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

function App() {
  // כאן ממקמים את useState
  const [isLogin, setIsLogin] = useState(true);

  // וכאן את הפונקציה שמחליפה את המצב
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <Login onSwitch={toggleForm} /> : <Register onSwitch={toggleForm} />}
    </div>
  );
}

export default App;
