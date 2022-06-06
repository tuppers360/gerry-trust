import { faEdit, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function LandingSection() {
  return (
    <div className="relative bg-gray-50">
      <div className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-500 text-6xl font-extrabold sm:text-7xl leading-tight md:leading-tight">
              Gerry Richardson Trust
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Supporting young people of Blackpool, Fylde & Wyre for over 50
              years
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="">
                <Link href="/contact">
                  <a className="w-full transition-colors duration-300 ease-in-out px-8 py-4 mr-1 mb-1 rounded-md text-lg font-semibold flex justify-center items-center cursor-pointer bg-blue-800 hover:bg-gray-100 hover:text-blue-800 focus:outline-none border-2 border-solid border-blue-800 text-gray-100">
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
                  <a className="w-full transition-colors duration-300 ease-in-out px-8 py-4 mr-1 mb-1 rounded-md text-lg font-semibold flex justify-center items-center cursor-pointer bg-blue-800 hover:bg-gray-100 hover:text-blue-800 focus:outline-none border-2 border-solid border-blue-800 text-gray-100">
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
        <div className="relative w-full h-80 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover object-left-top"
            src="/images/gerry_landing.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
