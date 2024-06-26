'use client';

import Hero from '../components/Hero';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import ProjectPreview from '../components/ProjectPreview';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-lightBackground dark:bg-darkBackground text-black dark:text-white">
      <Hero/>
      <Profile />
      <Skills />
      <ProjectPreview />
    </main>
  );
}
