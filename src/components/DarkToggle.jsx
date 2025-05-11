// components/DarkToggle.jsx
import React from 'react';

export default function DarkToggle() {
  const toggleMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleMode}
      className="ml-4 px-3 py-1 text-sm rounded-full bg-blue-100 hover:bg-blue-300 text-blue-800 transition dark:bg-gray-800 dark:text-white"
    >
      Toggle Theme
    </button>
  );
}
