import React from 'react';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import styles from './footer.module.scss';

function Footer() {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
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
                    <FaFacebook className={styles.fa_facebook_f} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/gerrytrust">
                    <FaTwitter className={styles.fa_twitter} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/gerryrichardsontrust/">
                    <FaInstagram className={styles.fa_instagram} />
                  </a>
                </li>
              </ul>
            </div>
            <p>
              <FaPhone /> (01253) 590510
            </p>
            <p>
              <Link href="/contact">
                <a className={`${styles.btn} ${styles.btn_success}`}>
                  <FaEnvelope /> Contact Us by Email
                </a>
              </Link>
            </p>
          </div>
          <div className={`${styles.item} ${styles.card_apply_online}`}>
            <h4>Would you like to apply?</h4>
            <p>
              Do you live with 15 miles of Blackpool Tower? Are you under 25
              years of age?
            </p>
            <Link href="/application">
              <a className={`${styles.btn} ${styles.btn_danger}`}>Apply Here</a>
            </Link>
          </div>
        </div>
        <div className={styles.copyright}>
          &copy; GRT 2020 - All rights reserved. Registered Charity No. 504413
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Footer;
