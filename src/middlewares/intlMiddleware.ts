import { localePrefix } from '@/navigation';
import createMiddleware from 'next-intl/middleware';

import { locales } from '../i18n';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix,
});

export default intlMiddleware;
