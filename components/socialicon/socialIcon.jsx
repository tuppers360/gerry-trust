import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './socialIcon.module.scss';

export function SocialIcon({ url, brand }) {
  return (
    <li>
      <a href={url}>
        <Icon brand={brand} />
      </a>
    </li>
  );
}

function Icon({ brand }) {
  switch (brand) {
    case 'twitter':
      return (
        <FontAwesomeIcon icon={['fab', 'twitter']} className={styles.fab} />
      );
    case 'facebook':
      return (
        <FontAwesomeIcon icon={['fab', 'facebook-f']} className={styles.fab} />
      );
    case 'instagram':
      return (
        <FontAwesomeIcon icon={['fab', 'instagram']} className={styles.fab} />
      );
    default:
      return null;
  }
}
