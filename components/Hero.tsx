'use client'

import React from 'react';
import { useTranslations } from 'next-intl';

import { useTheme } from './ThemeProvider';

const Hero: React.FC = () => {
  const t = useTranslations();

  const { isDarkMode } = useTheme();
  const darkModeBackground = '/assets/cyberpunk_homeOffice.jpg';
  const lightModeBackground = '/assets/zen_homeOffice.jpg';

  return (
    <section
      className="relative w-full h-[75vh] bg-gray-200 dark:bg-gray-800 text-black dark:text-white flex flex-col items-center justify-start"
      style={{
        backgroundImage: `url(${isDarkMode ? darkModeBackground : lightModeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      id='hero'
    >
      <h1 className="text-4xl md:text-8xl font-bold mb-4 mt-12 text-shadow-xxl shadow-customShadowLight dark:shadow-customShadowDark">
        {t('Hero.h1')}
      </h1>
      <p className="text-xl md:text-2xl font-old mb-4 text-shadow-xl shadow-white dark:shadow-customShadowDark">
        {t('Hero.h2')}
      </p>
    </section>
  );
};

export default Hero;
