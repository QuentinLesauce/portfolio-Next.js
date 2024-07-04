import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// Importing images
import jsIcon from '../public/assets/images/skills/js.png';
import azureIcon from '../public/assets/images/skills/azure.svg';
import dockerIcon from '../public/assets/images/skills/docker.svg';
import jestIcon from '../public/assets/images/skills/jest.svg';
import mongodbIcon from '../public/assets/images/skills/mongodb.svg';
import nextIcon from '../public/assets/images/skills/next.svg';
import nodejsIcon from '../public/assets/images/skills/nodejs.svg';
import reactIcon from '../public/assets/images/skills/react.svg';
import tailwindIcon from '../public/assets/images/skills/tailwind.svg';
import tanStackIcon from '../public/assets/images/skills/tanstack.svg';
import tsIcon from '../public/assets/images/skills/ts.png';

const Skills: React.FC = () => {
  const t = useTranslations();

  // Mapping of skills to their respective categories
  const skills = [
    { name: 'JavaScript', icon: jsIcon, category: 'Front-end' },
    { name: 'TypeScript', icon: tsIcon, category: 'Front-end' },
    { name: 'React', icon: reactIcon, category: 'Front-end' },
    { name: 'Next.js', icon: nextIcon, category: 'Front-end' },
    { name: 'Tailwind / CSS', icon: tailwindIcon, category: 'Front-end' },
    { name: 'Node.js', icon: nodejsIcon, category: 'Back-end' },
    { name: 'MongoDB', icon: mongodbIcon, category: 'Back-end' },
    { name: 'Jest', icon: jestIcon, category: 'Other' },
    { name: 'Docker', icon: dockerIcon, category: 'Other' },
    { name: 'Azure', icon: azureIcon, category: 'Other' },
    { name: 'React Query / TanStack Query', icon: tanStackIcon, category: 'Other' },
  ];

  // Function to split skill name on '/'
  const splitSkillName = (name: string) => {
    return name.split(' / ').map((part, index) => (
      <span key={index}>
        {part}
        {index !== name.split(' / ').length - 1 && <br />}
      </span>
    ));
  };

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="pt-20">
      <h2 className="text-3xl font-bold mb-4 text-center">{t('Skills.title')}</h2>
      <div className="grid grid-cols-3 gap-8">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category} className="text-center">
            <h3 className="text-lg font-bold mb-2">{category}</h3>
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center mb-4">
                <div className="relative w-14 h-14 mb-2">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <span className="text-center">
                  {splitSkillName(skill.name)}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
