import React, { ReactNode } from 'react';
import Head from 'next/head';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './Navbar';
import Footer from './Footer';
import { NextSeo } from 'next-seo';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

type LayoutProps = {
  url: string;
  title: string;
  description: string;
  children: ReactNode;
};

const Layout = ({
  children,
  url,
  title,
  description = 'Our mission promote youth development by supporting young people, aged 25 or under, to attend courses and activities of an educational, cultural, sporting, adventuresome or character-building nature. It is willing to entertain written applications for financial assistance from young people living or working within 15 miles of the town hall in Blackpool, Lancashire.',
}) => (
  <Elements stripe={stripePromise}>
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
      }}
    />
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    {children}
    <Footer />
  </Elements>
);

export default Layout;
