import '../styles/globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCoffee,
  faBars,
  faPhone,
  faFingerprint,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCoffee, faBars, faPhone, faFingerprint, faHome);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
