import { faFingerprint, faGift } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import NavLink from './NavLink';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800">
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="max-w-6xl px-4 mx-auto sm:px-4 lg:px-6">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex items-center mr-2 -ml-2 md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                  onClick={() => setIsOpen(!isOpen)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                  onClick={() => setIsOpen(!isOpen)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center flex-shrink-0">
              {/* <img
                className="block w-auto h-8 lg:hidden"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="hidden w-auto h-8 lg:block"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              /> */}
              <div className="flex items-center">
                <Link href="/">
                  <a className="text-2xl font-extrabold leading-tight text-gray-300 md:leading-snug md:mr-2">
                    <FontAwesomeIcon
                      icon={faFingerprint}
                      className="inline-block w-6 h-6 mr-2 text-gray-300"
                    />
                    GRT
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              <NavLink href="/about" name="About" />
              <NavLink href="/contact" name="Contact" />
              <NavLink href="/stories" name="Stories" />
              {/* <NavLink href="News" name="News" block=""/> */}
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/donate">
              <a className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-blue-900 rounded shadow outline-none hover:bg-blue-800 hover:shadow-lg focus:outline-none">
                <FontAwesomeIcon className="mr-1" icon={faGift} fixedWidth />
                Donate
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink href="/about" name="About" block />
          <NavLink href="/contact" name="Contact" block />
          <NavLink href="/stories" name="Stories" block />
          {/* <NavLink href="News" name="News" block=""/> */}
        </div>
      </div>
    </nav>
  );
}
