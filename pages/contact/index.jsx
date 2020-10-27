import React from 'react';
import ContactForm from '../../components/contactform';
import Layout from './../../components/layout/index';
import styles from './contact.module.scss';

function Contact() {
  return (
    <Layout>
      <main>
        <div className={styles.header}>
          <div className={styles.container}>
            <div className={styles.wrap_left}>
              <div className={styles.title}>Contact Us</div>
              <h1>Get in contact and discover how we can help you</h1>
              <p>Below you will find a few ways to contact us</p>
            </div>
          </div>
        </div>

        <div className={styles.content_section}>
          <div className={styles.container}>
            <div className={styles.title_content}>Contact Us</div>
            <div className={`${styles.contact_grid} ${styles.layout_grid}`}>
              <div className={styles.column}>
                <h3>Send us a message</h3>
                <div>
                  <ContactForm />
                </div>
              </div>
              <div className={styles.column}>
                <h3>
                  <i className="fa fa-home"></i> Get in touch
                </h3>
                <p>
                  We’re very approachable and would love to speak to you. Feel
                  free to call, send us an email, Tweet us or simply complete
                  the enquiry form.
                </p>
                <p>
                  <strong>Gerry Richardson Trust</strong>
                  <br />
                  Northdene,
                  <br />
                  Stoney Lane,
                  <br />
                  Hambleton,
                  <br />
                  Poulton-Le-Fylde,
                  <br />
                  FY6 9AF
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Contact;
