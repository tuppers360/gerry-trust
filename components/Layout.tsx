import React from 'react';
import Head from 'next/head';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './Navbar';
import Footer from './Footer';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Layout = ({ children, title = 'Gerry Richardson Trust' }) => (
  <Elements stripe={stripePromise}>
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
