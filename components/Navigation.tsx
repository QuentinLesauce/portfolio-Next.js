'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Navigation: React.FC = () => {
  const t = useTranslations();
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {

    const handleScroll = () => {
      const sections = ['hero', 'profile', 'experience', 'skills', 'projects', 'contact'];
      const scrollTop = window.scrollY;

      // Calculate the top offsets of each section
      const sectionOffsets = sections.map((sectionId) => {
        const section = document.getElementById(sectionId);
        return section ? section.offsetTop : 0;
      });

      // Determine the active link based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollTop >= sectionOffsets[i]) {
          setActiveLink(`#${sections[i]}`);
          return;
        }
      }

      // If no section is active, set activeLink to null
      setActiveLink(null);
    };

    const handleSticky = () => {
      const profile = document.getElementById('profile');
      const profileTop = profile?.getBoundingClientRect().top || 0;
      setIsSticky(profileTop <= 0);
    };

    document.addEventListener('scroll', handleScroll);
    document.addEventListener('scroll', handleSticky);
    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleSticky);
    };
  }, []);

  type NavLinkProps = {
    href: string;
    children: React.ReactNode;
  };

  const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
    <li
      className={`cursor-pointer ${activeLink === href ? 'border-r-4 border-black dark:border-white' : ''
        }`}
    >
      <Link href={href}>
        <span
          className={`${activeLink === href
            ? 'text-black font-bold dark:text-white '
            : 'text-white dark:text-gray-500'
            } mr-4`}
        >
          {children}
        </span>
      </Link>
    </li>
  );

  return (
    <nav
      className={`${isSticky ? 'fixed top-0 right-0' : 'absolute top-0 right-0'
        } p-4 z-10 flex flex-col transition-all duration-300`}
    >
      <ul className="flex flex-col space-y-1 min-w-24">
        <NavLink href="#hero">{t('Hero.title')}</NavLink>
        <NavLink href="#profile">{t('Profile.title')}</NavLink>
        <NavLink href="#experience">{t('Experience.title')}</NavLink>
        <NavLink href="#skills">{t('Skills.title')}</NavLink>
        <NavLink href="#projects">{t('Projects.title')}</NavLink>
        <NavLink href="#contact">{t('Contact.title')}</NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
