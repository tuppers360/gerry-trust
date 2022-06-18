import { faEdit, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function LandingSection() {
  return (
    <div className="relative">
      <div className="lg:relative">
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
            className="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
            src="/images/gerry_landing.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
