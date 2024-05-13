import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const languages = [
  {
    code: 'en-US',
    lang: 'en',
    label: 'English',
  },
  // {
  //   code: 'zh-CN',
  //   lang: 'cn',
  //   label: '简体中文',
  // },
  // {
  //   code: 'zh-TW',
  //   lang: 'tw',
  //   label: '繁體中文',
  // },
  // {
  //   code: 'ja-JP',
  //   lang: 'jp',
  //   label: '日本語',
  // },
  // {
  //   code: 'pt-BR',
  //   lang: 'pt',
  //   label: 'Português',
  // },
  // {
  //   code: 'es-ES',
  //   lang: 'es',
  //   label: 'Español',
  // },
  // {
  //   code: 'de-DE',
  //   lang: 'de',
  //   label: 'Deutsch',
  // },
  // {
  //   code: 'ru-RU',
  //   lang: 'ru',
  //   label: 'Русский',
  // },
  // {
  //   code: 'fr-FR',
  //   lang: 'fr',
  //   label: 'Français',
  // },
];

export const locales = languages.map((lang) => lang.lang);

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    // eslint-disable-next-line
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
