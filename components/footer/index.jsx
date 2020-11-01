import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.item}>
          <h4>Gerry Richardson Trust</h4>
          <address className={styles.address}>
            Northdene,
            <br /> Stoney Lane,
            <br /> Hambleton,
            <br /> Poulton-Le-Fylde,
            <br /> FY6 9AF
          </address>
        </div>
        <div className={styles.item}>
          <h4>Connect with Us</h4>
          <div className={styles.social_icons}>
            <ul>
              <li>
                <a href="https://www.facebook.com/groups/649311542556032/">
                  <FontAwesomeIcon
                    icon={['fab', 'facebook-f']}
                    className={styles.fa_facebook_f}
                    fixedWidth
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/gerrytrust">
                  <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    className={styles.fa_twitter}
                    fixedWidth
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/gerryrichardsontrust/">
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    className={styles.fa_instagram}
                    fixedWidth
                  />
                </a>
              </li>
            </ul>
          </div>
          <p>
            <FontAwesomeIcon icon="phone" fixedWidth /> (01253) 590510
          </p>
          <p>
            <Link href="/contact">
              <a className={`${styles.btn} ${styles.btn_depth}`}>
                <FontAwesomeIcon icon="envelope" fixedWidth /> Contact Us by
                Email
              </a>
            </Link>
          </p>
        </div>
        <div className={`${styles.item} ${styles.card_apply_online}`}>
          <h4>Would you like to apply?</h4>
          <p>
            Do you live with 15 miles of Blackpool Tower? Are you under 25 years
            of age?
          </p>
          <Link href="/application">
            <a
              className={`${styles.btn} ${styles.btn_depth} ${styles.btn_danger}`}
            >
              <FontAwesomeIcon icon="edit" fixedWidth /> Apply Here
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.copyright}>
        <FontAwesomeIcon icon={['far', 'copyright']} fixedWidth /> GRT 2020 -
        All rights reserved. Registered Charity No. 504413
      </div>
    </div>
  );
}
export default Footer;
