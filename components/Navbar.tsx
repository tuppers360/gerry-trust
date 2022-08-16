import { faFingerprint, faGift } from '@fortawesome/free-solid-svg-icons';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import NavLink from './NavLink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <MoonIcon
          className="h-10 w-10 fill-sky-500 p-2"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <SunIcon
          className="h-10 w-10 fill-sky-500 p-2"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };
  return (
    <nav className="supports-backdrop-blur:bg-white/95 flex-none bg-white font-semibold text-slate-700 transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-slate-900/75 dark:text-slate-200 lg:z-50 lg:border-b lg:border-slate-900/10">
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-4 sm:px-4 lg:px-6">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="mr-2 -ml-2 flex items-center md:hidden">
              <button
                className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
            <div className="flex flex-shrink-0 items-center">
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
                  <a className="text-2xl font-extrabold leading-tight text-sky-600 dark:text-sky-500 md:mr-2 md:leading-snug">
                    <FontAwesomeIcon
                      icon={faFingerprint}
                      className="mr-2 inline-block h-6 w-6"
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
          <div className="flex items-center space-x-2">
            <Link href="/donate">
              <a className="rounded bg-blue-900 px-6 py-3 text-sm font-bold uppercase text-slate-100 shadow outline-none hover:bg-blue-800 hover:shadow-lg focus:outline-none">
                <FontAwesomeIcon className="mr-1" icon={faGift} fixedWidth />
                Donate
              </a>
            </Link>
            {toggleTheme()}
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <NavLink href="/about" name="About" block />
          <NavLink href="/contact" name="Contact" block />
          <NavLink href="/stories" name="Stories" block />
          {/* <NavLink href="News" name="News" block=""/> */}
        </div>
      </div>
    </nav>
  );
}
