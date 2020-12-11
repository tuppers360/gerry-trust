import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="bg-gray-800" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-gray-800">
        <div className="flex flex-wrap -mx-2 mb-8">
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="flex justify-center flex-col">
              <h2 className="text-base font-semibold text-blue-400 uppercase tracking-wide">
                Contact Us
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-blue-500">
                Gerry Richardson Trust
              </p>
              <address className="mt-4 text-lg text-gray-300">
                Northdene,
                <br /> Stoney Lane,
                <br /> Hambleton,
                <br /> Poulton-Le-Fylde,
                <br /> FY6 9AF
              </address>
              <p className="mt-4 text-lg text-gray-300">
                <FontAwesomeIcon icon="phone" /> (01253) 590510
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="border h-12 text-sm text-grey-dark flex items-center justify-center">
              <p>full / half / quarter</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <div className="border h-12 text-sm text-grey-dark flex items-center justify-center">
              <p>full / half</p>
            </div>
          </div>
        </div>
        {/* <!-- This example requires Tailwind CSS v2.0+ -->` */}

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-blue-400 uppercase tracking-wide">
              Contact Us
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-blue-500">
              Gerry Richardson Trust
            </p>
            <address className="mt-4 text-lg text-gray-300">
              Northdene,
              <br /> Stoney Lane,
              <br /> Hambleton,
              <br /> Poulton-Le-Fylde,
              <br /> FY6 9AF
            </address>
            <p className="mt-4 text-lg text-gray-300">
              <FontAwesomeIcon icon="phone" /> (01253) 590510
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
              <div className="flex">
                {/* <!-- Heroicon name: check --> */}
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Invite team members
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    You can manage phone, email and chat conversations all from
                    a single mailbox.
                  </dd>
                </div>
              </div>

              <div className="flex">
                {/* <!-- Heroicon name: check --> */}
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    List view
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    You can manage phone, email and chat conversations all from
                    a single mailbox.
                  </dd>
                </div>
              </div>

              <div className="flex">
                {/* <!-- Heroicon name: check --> */}
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Keyboard shortcuts
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    You can manage phone, email and chat conversations all from
                    a single mailbox.
                  </dd>
                </div>
              </div>

              <div className="flex">
                {/* <!-- Heroicon name: check --> */}
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Calendars
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    You can manage phone, email and chat conversations all from
                    a single mailbox.
                  </dd>
                </div>
              </div>

              <div className="flex">
                {/* <!-- Heroicon name: check --> */}
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Notifications
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Find what you need with advanced filters, bulk actions, and
                    quick views.
                  </dd>
                </div>
              </div>

              <div className="flex">
                {/* <!-- Heroicon name: check --> */}
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Boards
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Find what you need with advanced filters, bulk actions, and
                    quick views.
                  </dd>
                </div>
              </div>

              <div className="flex">
                {/* <!-- Heroicon name: check --> */}
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Reporting
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Find what you need with advanced filters, bulk actions, and
                    quick views.
                  </dd>
                </div>
              </div>

              <div className="flex">
                {/* <!-- Heroicon name: check --> */}
                <svg
                  className="flex-shrink-0 h-6 w-6 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="ml-3">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Mobile app
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Find what you need with advanced filters, bulk actions, and
                    quick views.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Would you like to apply?
            </h3>
            <p className="mt-2 text-base text-gray-300">
              Do you live with 15 miles of Blackpool Tower? Are you under 25
              years of age?
            </p>
          </div>
          <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <Link href="/application">
              <a className="w-full flex items-center justify-center px-8 py-3 mr-1 mb-1 border border-transparent text-base font-semibold rounded-md text-white bg-blue-900 hover:bg-blue-800 md:py-4 md:text-lg md:px-10">
                <FontAwesomeIcon className="mr-1" icon="edit" fixedWidth />
                Apply for a grant
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a
              href="https://www.facebook.com/groups/649311542556032/"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/gerryrichardsontrust/"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/gerrytrust"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; Gerry Richardson Trust 2020 - All rights reserved. Registered
            Charity No. 504413
          </p>
        </div>
      </div>
    </footer>
  );
}
