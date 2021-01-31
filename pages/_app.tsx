import 'styles/tailwind.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import {
  faBars,
  faCoffee,
  faCopyright,
  faEdit,
  faEnvelope,
  faFingerprint,
  faGift,
  faHome,
  faPaperPlane,
  faPhone,
  faPoundSign,
  faSync
} from '@fortawesome/free-solid-svg-icons';

import type { AppProps } from 'next/app';
import MDXComponents from 'components/MDXComponents';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  fab,
  far,
  faBars,
  faCoffee,
  faCopyright,
  faEdit,
  faEnvelope,
  faFingerprint,
  faGift,
  faHome,
  faPaperPlane,
  faPoundSign,
  faPhone,
  faSync
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
