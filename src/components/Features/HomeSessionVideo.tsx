import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import { useTranslations } from 'next-intl';

const HomeSessionVideo = () => {
  const t = useTranslations('About.two');

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="relative overflow-hidden">
          <video
            src="/static/home-video.3953bf63.mp4"
            controls
            loop
            autoPlay
            playsInline
            className="mx-auto block"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default HomeSessionVideo;
