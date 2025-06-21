import React, { useState } from 'react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  const themeStyle = {
    backgroundColor: isDark ? '#1e1e1e' : '#f9f9f9',
    color: isDark ? '#ffffff' : '#000000',
    padding: '30px',
    textAlign: 'center',
    marginTop: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(228, 8, 8, 0.2)',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={themeStyle}>
      <h2>{isDark ? '🌙 Black' : '☀️ White'}</h2>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
