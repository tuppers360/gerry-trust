import '../styles/globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faCoffee,
  faEdit,
  faEnvelope,
  faFingerprint,
  faGift,
  faHome,
  faPaperPlane,
  faPhone,
  faSync,
} from '@fortawesome/free-solid-svg-icons';

import { far } from '@fortawesome/free-regular-svg-icons';

library.add(
  fab,
  far,
  faBars,
  faCoffee,
  faEdit,
  faEnvelope,
  faFingerprint,
  faGift,
  faHome,
  faPaperPlane,
  faPhone,
  faSync
);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
