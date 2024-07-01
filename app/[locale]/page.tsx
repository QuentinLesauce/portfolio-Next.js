import React from 'react';
import Hero from '../../components/Hero';
import Profile from '../../components/Profile';
import Skills from '../../components/Skills';
import ProjectPreview from '../../components/ProjectPreview';
import { useTranslations } from 'next-intl';


function Home() {

  const t = useTranslations();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-lightBackground dark:bg-darkBackground text-black dark:text-white">
      <Hero />
      <Profile />
      <Skills />
      <ProjectPreview />
    </main>
  );
};

export default Home