'use client'

import React from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from './ThemeProvider';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, isDarkMode } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as 'light' | 'dark' | 'system');
  };

  return (
    <div className="flex items-center hover:drop-shadow-customShadowLight hover:dark:drop-shadow-customShadowDark">
      <span className="text-gray-700 dark:text-gray-300">
        {isDarkMode ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
      </span>
      <select
        value={theme}
        onChange={handleThemeChange}
        className="w-full ml-3 bg-transparent border-none outline-none text-gray-700 dark:text-gray-300 cursor-pointer"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
