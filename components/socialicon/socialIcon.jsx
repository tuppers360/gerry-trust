import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      return <FontAwesomeIcon icon={['fab', 'twitter']} />;
    case 'facebook':
      return <FontAwesomeIcon icon={['fab', 'facebook-f']} />;
    case 'instagram':
      return <FontAwesomeIcon icon={['fab', 'instagram']} />;
    default:
      return null;
  }
}
