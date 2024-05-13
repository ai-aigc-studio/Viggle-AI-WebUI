import AboutSectionOne from '@/components/About/AboutSectionOne';
import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import Breadcrumb from '@/components/Common/Breadcrumb';

import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Metadata.about');
  return {
    title: t('title'),
    description: t('description'),
  };
}

const AboutPage = () => {
  const t = useTranslations('About');

  return (
    <>
      <Breadcrumb
        pageName={t('title')}
        description={t('description')}
        content1={t('content1')}
        content2={t('content2')}
        content3={t('content3')}
        content4={t('content4')}
        content5={t('content5')}
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
