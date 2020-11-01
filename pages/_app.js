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
  faHome,
  faPhone,
  faSync,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faBars,
  faCoffee,
  faEdit,
  faEnvelope,
  faFingerprint,
  faHome,
  faPhone,
  faSync
);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
