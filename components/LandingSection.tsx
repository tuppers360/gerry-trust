import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LandingSection() {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-500 text-5xl font-extrabold sm:text-6xl leading-tight md:leading-snug">
              Gerry Richardson
            </h2>
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-900 text-5xl font-extrabold sm:text-6xl leading-tight md:leading-snug">
              Trust
            </h2>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Supporting young people of Blackpool, Fylde & Wyre for over 50
              years
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link href="/contact">
                  <a className="w-full flex items-center justify-center px-8 py-3 mr-1 mb-1 border border-transparent text-base font-semibold rounded-md text-white bg-blue-900 hover:bg-blue-800 md:py-4 md:text-lg md:px-10">
                    <FontAwesomeIcon
                      className="mr-1"
                      icon="envelope"
                      fixedWidth
                    />
                    Contact Us
                  </a>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/application">
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-blue-900 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
                    <FontAwesomeIcon className="mr-1" icon="edit" fixedWidth />
                    Apply for a grant
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-80 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover object-left-top"
            src="/images/gerry_landing.jpg"
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
