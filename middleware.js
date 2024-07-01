import createMiddleware from 'next-intl/middleware';
import { Languages } from './data/i18n/Languages';

export default createMiddleware({
  locales: Languages,
  defaultLocale: 'en'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en|es)/:path*']
};