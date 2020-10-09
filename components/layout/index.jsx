import React from 'react';
import Head from 'next/head';
import Nav from '../nav';
import Footer from '../footer';

const Layout = ({ children, title = 'Gerry Richardson Trust' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav />
    {children}
    <Footer />
  </div>
);

export default Layout;
