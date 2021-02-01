import React, { ReactNode, useEffect, useState } from 'react';

import Footer from './Footer';
import Head from 'next/head';
import Navbar from './Navbar';
import { useRouter } from 'next/router';

//TODO - implement light and dark theme
//import { useTheme } from 'next-themes';

interface LayoutProps {
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  type?: string;
  children?: ReactNode;
}

export default function Container(props: LayoutProps) {
  //TODO - implement light and dark theme
  //const [mounted, setMounted] = useState(false);
  //const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  //useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'The Gerry Richardson Trust',
    description:
      'Our mission promote youth development by supporting young people, aged 25 or under, to attend courses and activities of an educational, cultural, sporting, adventuresome or character-building nature. It is willing to entertain written applications for financial assistance from young people living or working within 15 miles of the town hall in Blackpool, Lancashire.',
    image: '',
    type: 'website',
    date: null,
    ...customMeta
  };

  return (
    <div className="bg-white dark:bg-gray-800">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://gerryrichardsontrust.org${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="The Gerry Richardson Trust" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gerrytrust" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      {/* <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className="h-4 w-4 text-gray-800 dark:text-gray-200"
          >
            {theme === 'dark' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
        )}
      </button> */}
      <Navbar />
      <main id="skip">{children}</main>
      <Footer />
    </div>
  );
}
