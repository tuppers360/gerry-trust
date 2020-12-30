import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="bg-gray-800" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="py-12 mt-24">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Navigation - Footer</h2>
          <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            <section className="text-center">
              <h2 className="text-2xl font-semibold text-blue-400 uppercase tracking-wide">
                Navigation
              </h2>
              <ul className="mt-2 text-base text-gray-300">
                <li>
                  <Link href="/stories">
                    <a className="hover:text-gray-100">Stories</a>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="/stories">
                    <a className="hover:text-gray-100">News</a>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="/about">
                    <a className="hover:text-gray-100">About Us</a>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="/privacy">
                    <a className="hover:text-gray-100">Privacy</a>
                  </Link>
                </li>
              </ul>
            </section>
            <section className="text-center">
              <h2 className="sr-only">Contect Us - Footer</h2>
              <h2 className="text-2xl font-semibold text-blue-400 uppercase tracking-wide">
                Get in Touch
              </h2>
              <p className="mt-4 text-lg font-extrabold text-blue-500 tracking-wide">
                Gerry Richardson Trust
              </p>
              <address className="mt-2 text-lg text-gray-300">
                Northdene,
                <br /> Stoney Lane,
                <br /> Hambleton,
                <br /> Poulton-Le-Fylde,
                <br /> FY6 9AF
              </address>
              <p className="mt-4 text-lg text-gray-300">
                <FontAwesomeIcon icon="phone" /> (01253) 590510
              </p>
              <Link href="/contact">
                <a className="inline-flex items-center mt-5 justify-center px-4 py-3 mb-1 border border-transparent text-base font-semibold rounded-md text-white bg-blue-900 hover:bg-blue-800 md:py-4 md:px-6">
                  <FontAwesomeIcon
                    className="mr-1"
                    icon="envelope"
                    fixedWidth
                  />
                  Contact Us by Email
                </a>
              </Link>
            </section>
            <section className="text-center">
              <h2 className="sr-only">Apply for a grant - Footer</h2>
              <h3 className="text-2xl font-semibold text-blue-400 uppercase tracking-wide">
                Would you like to apply?
              </h3>
              <p className="mt-4 text-base text-gray-300">
                Do you live with 15 miles of Blackpool Tower? Are you under 25
                years of age?
              </p>

              <Link href="/application">
                <a className="inline-flex items-center mt-5 justify-center px-4 py-3 mb-1 border border-transparent text-base font-semibold rounded-md text-white bg-blue-900 hover:bg-blue-800 md:py-4 md:px-6">
                  <FontAwesomeIcon className="mr-1" icon="edit" />
                  Apply for a grant
                </a>
              </Link>
            </section>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto pb-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8 text-gray-800">
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <h2 className="sr-only">Social Media - Footer</h2>
          <div className="flex justify-center space-x-6 md:order-2">
            <a
              href="https://www.facebook.com/groups/649311542556032/"
              className="text-gray-400 hover:text-facebook text-xl"
            >
              {/* //TODO: figure out how to make it white text for icon */}
              <span className="sr-only">Facebook</span>
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </a>
            <a
              href="https://www.instagram.com/gerryrichardsontrust/"
              className="text-gray-400 hover:text-instagram text-xl"
            >
              <span className="sr-only">Instagram</span>
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
            <a
              href="https://twitter.com/gerrytrust"
              className="text-gray-400 hover:text-twitter text-xl"
            >
              <span className="sr-only">Twitter</span>
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
          </div>
          <h2 className="sr-only">Copyright - Footer</h2>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1 text-center">
            <FontAwesomeIcon icon="copyright" /> Gerry Richardson Trust 2021 -
            All rights reserved. Registered Charity No. 504413
          </p>
        </div>
      </div>
    </footer>
  );
}
