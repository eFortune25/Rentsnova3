import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export default getRequestConfig(async () => {
  // Get locale from cookies or use default
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value || defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

export function getLocaleFromHeaders(headers: Headers): Locale {
  const acceptLanguage = headers.get('accept-language');

  if (acceptLanguage) {
    // Check if French is preferred
    if (acceptLanguage.includes('fr')) {
      return 'fr';
    }
  }

  return defaultLocale;
}
