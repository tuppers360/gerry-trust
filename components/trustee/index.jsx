import { SocialIcon } from '../socialicon/socialIcon';

export function Trustee({ image, socialUrl, socialBrand, children }) {
  return (
    <div className="box">
      <div className="imgBx">
        <img src={image} alt="" />
      </div>
      <ul className="social-icon">
        <SocialIcon socialUrl={socialUrl} socialBrand={socialBrand} />
      </ul>
      <div className="details">
        <h2>{children}</h2>
      </div>
    </div>
  );
}
