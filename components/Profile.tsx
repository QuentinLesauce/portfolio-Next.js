'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

import LocaleSwitcher from './LocaleSwitcher';
import ThemeSwitcher from './ThemeSwitcher';
import Navigation from './Navigation';


const Profile: React.FC = () => {
  const t = useTranslations();

  return (
    <div id='profile' className="relative w-full h pt-5">
      <div className="absolute top-4 left-1 flex-col  items-center space-y-4">
        <LocaleSwitcher />
        <ThemeSwitcher />
      </div>
      <Navigation />
      <section className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/3 w-full flex justify-center mt-7 mb-6 md:mb-0">
            <Image
              src="/assets/profile_picture.jpeg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full shadow-lg dark:shadow-customShadowDark"
            />
          </div>
          <div className="md:w-2/3 w-full md:pl-10">
            <div className="flex flex-row gap-5 mb-5 text-2xl">
              <span className="mt-2 cursor-pointer hover:drop-shadow-customShadowLight hover:dark:drop-shadow-customShadowDark">
                <Link href='https://github.com/QuentinLesauce' target="blank">
                  <FaGithub />
                </Link>
              </span>
              <span className="mt-2 cursor-pointer hover:drop-shadow-customShadowLight hover:dark:drop-shadow-customShadowDark">
                <Link href='https://www.linkedin.com/in/quentinlesauce/' target="blank">
                  <FaLinkedin />
                </Link>
              </span>
              <span className="mt-2 cursor-pointer hover:drop-shadow-customShadowLight hover:dark:drop-shadow-customShadowDark">
                <Link href='#contact'>
                  <FaMailBulk />
                </Link>
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4">{t('Profile.title')}</h2>
            <p className="text-lg mb-4 text-justify">
              {t('Profile.p1')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
