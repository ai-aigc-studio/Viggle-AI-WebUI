import Breadcrumb from '@/components/Common/Breadcrumb';
import Contact from '@/components/Contact';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page | Free Next.js Template for Startup and SaaS',
  description: 'This is Contact Page for Startup Nextjs Template',
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
        content1=""
        content2=""
        content3=""
        content4=""
        content5=""
      />

      <Contact />
    </>
  );
};

export default ContactPage;
