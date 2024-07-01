import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { Languages } from './data/i18n/Languages';

const locales = Languages;
 
export default getRequestConfig(async ({ locale }) => {
  // Validate the incoming `locale` parameter
  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    messages: (await import(`./data/i18n/${locale}.json`)).default
  };
});

