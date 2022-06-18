import {
  faCopyright,
  faEdit,
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer aria-labelledby="footerHeading text-sm">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto mt-8 max-w-xl border-t border-slate-200 px-4 py-8 dark:border-slate-200/30 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Navigation - Footer</h2>
        <div className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-4 lg:space-y-0">
          <section>
            <h2 className="text-lg font-bold text-slate-700 underline underline-offset-8 dark:text-slate-100">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2 text-base">
              <li>
                <Link href="/stories">
                  <a className="hover:text-slate-900 dark:hover:text-slate-300">
                    Stories
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/stories">
                  <a className="hover:text-slate-900 dark:hover:text-slate-300">
                    News
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-slate-900 dark:hover:text-slate-300 ">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="hover:text-slate-900 dark:hover:text-slate-300">
                    Privacy
                  </a>
                </Link>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="sr-only">Contect Us - Footer</h2>
            <h2 className="text-lg font-bold text-slate-700 underline underline-offset-8 dark:text-slate-100">
              Get in Touch
            </h2>
            <div className="mt-4 space-y-2 not-italic">
              <ul>
                <li>Gerry Richardson Trust</li>
              </ul>
              <ul>
                <li>Northdene,</li>
              </ul>
              <ul>
                <li>Stoney Lane,</li>
              </ul>
              <ul>
                <li>Hambleton,</li>
              </ul>
              <ul>
                <li>Poulton-Le-Fylde,</li>
              </ul>
              <ul>
                <li>FY6 9AF</li>
              </ul>
            </div>
            <p className="mt-4">
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> (01253) 700879
            </p>
            <p className="mt-4 ">
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> 07799763108
            </p>
            <Link href="/contact">
              <a className="mt-5 mb-1 inline-flex items-center justify-center rounded-md border border-transparent bg-blue-900 px-4 py-3 text-base font-semibold text-white hover:bg-blue-800 md:py-4 md:px-6">
                <FontAwesomeIcon
                  className="mr-1"
                  icon={faEnvelope}
                  fixedWidth
                />
                Contact Us by Email
              </a>
            </Link>
          </section>
          <section>
            <h2 className="sr-only">Apply for a grant - Footer</h2>
            <h2 className="text-lg font-bold text-slate-700 underline underline-offset-8 dark:text-slate-100">
              Would you like to apply?
            </h2>
            <p className="mt-4 text-base">
              Do you live with 15 miles of Blackpool Tower? Are you under 25
              years of age?
            </p>

            <Link href="/application">
              <a className="mt-5 mb-1 inline-flex items-center justify-center rounded-md border border-transparent bg-blue-900 px-4 py-3 text-base font-semibold text-white hover:bg-blue-800 md:py-4 md:px-6">
                <FontAwesomeIcon className="mr-1" icon={faEdit} />
                Apply for a grant
              </a>
            </Link>
          </section>
        </div>
      </div>

      <div className="mx-auto max-w-xl border-t border-slate-200 px-4 pb-8 dark:border-slate-200/30 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-8 md:flex md:items-center md:justify-between">
          <h2 className="sr-only">Social Media - Footer</h2>
          <div className="flex justify-center space-x-6 md:order-2">
            <a
              href="https://www.facebook.com/groups/649311542556032/"
              className="text-xl text-gray-400 hover:text-facebook"
            >
              {/* //TODO: figure out how to make it white text for icon */}
              <span className="sr-only">Facebook</span>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/gerryrichardsontrust/"
              className="text-xl text-gray-400 hover:text-instagram"
            >
              <span className="sr-only">Instagram</span>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://twitter.com/gerrytrust"
              className="text-xl text-gray-400 hover:text-twitter"
            >
              <span className="sr-only">Twitter</span>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <h2 className="sr-only">Copyright - Footer</h2>
          <p className="mt-8 text-center text-base md:order-1 md:mt-0">
            <FontAwesomeIcon icon={faCopyright} /> Gerry Richardson Trust 2021 -
            All rights reserved. Registered Charity No. 504413
          </p>
        </div>
      </div>
    </footer>
  );
}
