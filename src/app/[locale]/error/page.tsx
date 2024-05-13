import NotFoundCpn from '@/components/NotFoundCpn';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Error Page | Free Next.js Template for Startup and SaaS',
  description: 'This is Error Page for Startup Nextjs Template',
  // other metadata
};

const ErrorPage = () => {
  return (
    <>
      <NotFoundCpn />
    </>
  );
};

export default ErrorPage;
