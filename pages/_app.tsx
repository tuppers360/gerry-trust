import { DefaultSeo } from 'next-seo';
import SEO from './../next-seo.config';
import type { AppProps /*, AppContext */ } from 'next/app';
import '../styles/tailwind.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
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
  faPoundSign,
  faPhone,
  faSync,
} from '@fortawesome/free-solid-svg-icons';

import { far } from '@fortawesome/free-regular-svg-icons';

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
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
