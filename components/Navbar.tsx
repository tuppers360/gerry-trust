import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800">
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
            <div className="flex-shrink-0 flex items-center">
              {/* <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              /> */}
              <div className="flex items-center">
                <Link href="/">
                  <a className="font-extrabold text-gray-300 text-2xl leading-tight md:leading-snug md:mr-2">
                    <FontAwesomeIcon
                      icon="fingerprint"
                      className="text-gray-300 w-6 h-6 mr-2 inline-block"
                    />
                    GRT
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              <Link href="/about">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About Us
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact Us
                </a>
              </Link>
              <Link href="/stories">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Stories
                </a>
              </Link>
              {/* 
              <Link href="/news">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  News (Coming Soon)
                </a>
              </Link> */}
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/donate">
              <a className="bg-blue-900 text-white hover:bg-blue-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
                <FontAwesomeIcon className="mr-1" icon="gift" fixedWidth />
                Donate
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/about">
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About Us
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact Us
            </a>
          </Link>
          <Link href="/stories">
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Stories
            </a>
          </Link>
          {/*
          <Link href="/">
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              News (Coming Soon)
            </a>
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
