import React from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.item}>
          <address>
            <h5>Gerry Richardson Trust</h5>
            Northdene,
            <br /> Stoney Lane,
            <br /> Hambleton,
            <br /> Poulton-Le-Fylde,
            <br /> FY6 9AF
          </address>
        </div>
        <div className={styles.item}>
          <h5>Connect with Us</h5>
          <div className={styles.social_icons}>
            <ul>
              <li>
                <a href="https://www.facebook.com/groups/649311542556032/">
                  <i className="fab fa-lg fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/gerrytrust">
                  <i className="fab fa-lg fa-twitter"></i>
                </a>
              </li>
              {/*<li>
        <a href="http://www.linkedin.com">
          <i className="fab fa-lg fa-linkedin-in"></i>
        </a>
      </li>*/}
              <li>
                <a href="https://www.instagram.com/gerryrichardsontrust/">
                  <i className="fab fa-lg fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>

          <p>
            <i className="fa fa-phone"></i> (01253) 590510
          </p>
          <p>
            <Link href="/contact">
              <a className={`${styles.btn} ${styles.btn_success}`}>
                <i className="fa fa-envelope"></i> Contact Us by Email
              </a>
            </Link>
          </p>
        </div>
        <div className={`${styles.item} ${styles.card_apply_online}`}>
          <h5>Would you like to apply?</h5>
          <p>
            Do you live with 15 miles of Blackpool Tower? Are you under 25 years
            of age?
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
  );
}
export default Footer;
