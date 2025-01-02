// App.js
import React, { useState } from 'react';
import Production from './Production';

export default function App() {
  const [currentSection, setCurrentSection] = useState('');

  const handleMenuClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <nav className="flex space-x-4 bg-gray-200 p-4">
        <button
          onClick={() => handleMenuClick('production')}
          className="text-blue-500"
        >
          Производство
        </button>
      </nav>

      <div className="p-8">
        {currentSection === 'production' && <Production />}
        {!currentSection && (
          <div>
            <h1>Добро пожаловать!</h1>
            <p>Выберите раздел.</p>
          </div>
        )}
      </div>
    </div>
  );
}
