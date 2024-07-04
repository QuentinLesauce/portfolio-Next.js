import React from 'react';
import Hero from '../../components/Hero';
import Profile from '../../components/Profile';
import Skills from '../../components/Skills';
import Contact from '../../components/Contact';
import { useTranslations } from 'next-intl';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';


function Home() {

  const t = useTranslations();
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between bg-lightBackground dark:bg-darkBackground text-black dark:text-white">
        <Hero />
        <Profile />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Home