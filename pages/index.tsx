import { faEdit, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import AnniversarySection from 'components/Anniversary';
import Container from 'components/Container';
import DonationCards from 'components/DonationCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeroSection from 'components/HeroSection';
import LandingSection from 'components/LandingSection';
import Link from 'next/link';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <Container>
      <AnniversarySection />
      {/* Landing Section */}
      <div className="relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="bg-gradient-to-r from-sky-900 to-sky-500 bg-clip-text text-6xl font-extrabold leading-tight text-transparent sm:text-7xl md:leading-tight">
              Gerry Richardson Trust
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-slate-700 dark:text-slate-300 sm:text-xl md:mt-5 md:max-w-3xl">
              Supporting young people of Blackpool, Fylde & Wyre for over 50
              years
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="">
                <Link href="/contact">
                  <a className="mr-1 mb-1 flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-solid border-blue-800 bg-blue-800 px-8 py-4 text-lg font-semibold text-slate-100 transition-colors duration-300 ease-in-out hover:bg-slate-100 hover:text-blue-800 focus:outline-none">
                    <FontAwesomeIcon
                      className="mr-1"
                      icon={faEnvelope}
                      fixedWidth
                    />
                    Contact Us
                  </a>
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link href="/application">
                  <a className="mr-1 mb-1 flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-solid border-blue-800 bg-blue-800 px-8 py-4 text-lg font-semibold text-slate-100 transition-colors duration-300 ease-in-out hover:bg-slate-100 hover:text-blue-800 focus:outline-none">
                    <FontAwesomeIcon
                      className="mr-1"
                      icon={faEdit}
                      fixedWidth
                    />
                    Apply for a grant
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-80 w-full shadow-2xl md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full rounded-none object-cover object-left-top lg:rounded-l-lg"
            src="/images/gerry_landing.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="mx-auto max-w-3xl px-4 py-8 sm:py-20 sm:px-6 sm:text-center lg:px-8">
        <h2 className="bg-gradient-to-r from-sky-900 to-sky-500 bg-clip-text py-4 text-3xl font-extrabold tracking-tight text-transparent sm:text-center sm:text-5xl">
          Our Mission
        </h2>
        <p className="pt-8 leading-loose text-slate-700 dark:text-slate-300">
          The trust seeks to promote youth development by supporting young
          people, aged 25 or under, to attend courses and activities of an
          educational, cultural, sporting, adventuresome or character-building
          nature. It is willing to entertain written applications for financial
          assistance from young people living or working within 15 miles of the
          town hall in Blackpool, Lancashire.
        </p>
      </div>
      {/* Whats Going On - Donation Cards */}
      <div className="relative mx-auto max-w-7xl px-4 sm:text-center">
        <h2 className="bg-gradient-to-r from-sky-900 to-sky-500 bg-clip-text py-4 text-3xl font-extrabold tracking-tight text-transparent sm:text-5xl">
          Whats going on
        </h2>
        <p className="mx-auto max-w-2xl pt-8 text-lg leading-relaxed text-slate-700 dark:text-slate-300 sm:mt-4">
          Our latest news and whats we are doing with the local community of
          Blackpool, Fylde & Wyre
        </p>
        <DonationCards />
      </div>
    </Container>
  );
};

export default IndexPage;
