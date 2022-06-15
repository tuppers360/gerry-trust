import 'styles/tailwind.css';

import { StateMachineProvider, createStore } from 'little-state-machine';

import type { AppProps } from 'next/app';
import MDXComponents from 'components/MDXComponents';
import { ThemeProvider } from 'next-themes';

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
    amount: 0,
    giftAid: false
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateMachineProvider>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </StateMachineProvider>
  );
}

export default MyApp;
