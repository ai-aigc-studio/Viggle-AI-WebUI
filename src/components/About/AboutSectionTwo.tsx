import Image from 'next/image';
import SectionTitle from '../Common/SectionTitle';
import { List } from './AboutSectionOne';
import { useTranslations } from 'next-intl';

const AboutSectionTwo = () => {
  const t = useTranslations('About.two');

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <a href="https://discord.com/invite/viggle/" target="_blank" rel="noopener noreferrer">
              <div
                className="relative mx-auto mb-12 aspect-[360/266] max-w-[500px] text-center lg:m-0 hover:opacity-80"
                data-wow-delay=".15s"
              >
                <div className="relative overflow-hidden">
                  <video
                    src="/static/animate.be29380e.mp4"
                    controls
                    loop
                    autoPlay
                    playsInline
                    className="mx-auto block"
                  ></video>
                </div>
              </div>
            </a>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle title={t('title')} paragraph={t('description')} mb="44px" />

            <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
              <div className="mx-[-12px] flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text={t('col-one.1')} />
                  <List text={t('col-one.2')} />
                </div>

                <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                  <List text={t('col-two.1')} />
                </div>
              </div>

              {/* <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Bug free code
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Next.js
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
