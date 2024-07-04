'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

// Importing images
import nybbleIcon from 'public/assets/images/exp/nybble_security_logo.jpg';
import ulmaIcon from 'public/assets/images/exp/ulma.jpg';

import { FaLinkedin, FaLink } from 'react-icons/fa';

const experiences = [
  {
    id: 'exp1',
    icon: nybbleIcon,
    companyName: 'Experience.exp1.companyName',
    job: 'Experience.exp1.job',
    date: 'Experience.exp1.date',
    description: 'Experience.exp1.description',
    linkedin: 'https://www.linkedin.com/company/nybble-security/',
    website: 'https://nybble-security.io/',
  },
  {
    id: 'exp2',
    icon: nybbleIcon,
    companyName: 'Experience.exp2.companyName',
    job: 'Experience.exp2.job',
    date: 'Experience.exp2.date',
    description: 'Experience.exp2.description',
    linkedin: 'https://www.linkedin.com/company/nybble-security/',
    website: 'https://nybble-security.io/',
  },
  {
    id: 'exp3',
    icon: ulmaIcon,
    companyName: 'Experience.exp3.companyName',
    job: 'Experience.exp3.job',
    date: 'Experience.exp3.date',
    description: 'Experience.exp3.description',
    linkedin: 'https://www.linkedin.com/company/ulma-handling-systems/',
    website: 'https://www.ulmahandling.com/',
  },
];

const Experience: React.FC = () => {
  const t = useTranslations();
  const [expSelected, setExpSelected] = useState<'exp1' | 'exp2' | 'exp3'>('exp1');

  return (
    <section id="experience" className="w-8/12 h-[65vh] pt-10 mb-10">
      <h2 className="text-3xl font-bold mb-8">{t('Experience.title')}</h2>
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-col w-1/2 items-stretch pr-10 gap-16">
          {experiences.map(exp => (
            <div
              key={exp.id}
              className={`
                ${expSelected === exp.id
                  ? 'border-black dark:border-white'
                  : 'border-transparent'
                }
                flex flex-col md:pl-10 cursor-pointer border-l-4
              `}
              onMouseEnter={() => setExpSelected(exp.id as 'exp1' | 'exp2' | 'exp3')}
            >
              <span className="font-bold">{t(exp.job)}</span>
              <span>{t(exp.date)}</span>
            </div>
          ))}
        </div>

        {experiences.map(exp => (
          expSelected === exp.id && (
            <div key={exp.id} className="w-1/2">
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="flex justify-center">
                  <Image
                    src={exp.icon}
                    alt={t(exp.companyName)}
                    width={70}
                    height={70}
                    className="rounded-full shadow-lg dark:shadow-customShadowDark"
                  />
                </div>
                <div className="flex flex-col md:pl-10">
                  <span>{t(exp.date)}</span>
                  <span>{t(exp.companyName)}</span>
                  <div className="flex flex-row gap-4 text-xl">
                    <span className="mt-2 cursor-pointer hover:drop-shadow-customShadowLight hover:dark:drop-shadow-customShadowDark">
                      <Link href={exp.linkedin} target="blank">
                        <FaLinkedin />
                      </Link>
                    </span>
                    <span className="mt-2 cursor-pointer hover:drop-shadow-customShadowLight hover:dark:drop-shadow-customShadowDark">
                      <Link href={exp.website} target="blank">
                        <FaLink />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold pt-4 pb-4">{t(exp.job)}</h3>
              <p className="text-lg text-justify">{t(exp.description)}</p>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default Experience;