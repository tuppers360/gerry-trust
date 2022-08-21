import 'styles/tailwind.css';

import { createStore, StateMachineProvider } from 'little-state-machine';
import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import DefaultLayout from './../components/layouts/DefaultLayout';

// createStore({})
createStore({
  donationDetails: {
    firstName: '',
    lastName: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    town: '',
    county: '',
    postCode: '',
    message: '',
    amount: 0,
    giftAid: false
  }
});

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ||
    ((page, { title, description, image, date, type }) => (
      <DefaultLayout
        title={title}
        description={description}
        image={image}
        date={date}
        type={type}
      >
        {page}
      </DefaultLayout>
    ));

  return (
    <SessionProvider session={session}>
      <StateMachineProvider>
        <ThemeProvider enableSystem={true} attribute="class">
          {getLayout(<Component {...pageProps} />, pageProps)}
        </ThemeProvider>
      </StateMachineProvider>
    </SessionProvider>
  );
}

export default MyApp;
