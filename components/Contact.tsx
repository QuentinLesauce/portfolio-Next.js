import React from 'react';

import { useTranslations } from 'next-intl';


const Contact: React.FC = () => {
  const t = useTranslations();

  return (
    <section id='contact' className="w-8/12 h-[65vh] pt-10 mb-10">
      <h2 className="text-3xl font-bold mb-4">{t('Contact.title')}</h2>
      <p>Contact form</p>
    </section>
  );
};

export default Contact;
