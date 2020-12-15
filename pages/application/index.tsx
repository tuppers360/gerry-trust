import React from 'react';
import styles from './application.module.scss';
import Layout from '../../components/layout';
import PageHeaderSection from '../../components/PageHeaderSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ApplicationForm from '../../components/application-form';

export default function Application() {
  return (
    <Layout title="Application | Gerry Richardson Trust">
      <main>
        <PageHeaderSection
          title="Application Form"
          heading="Lets see if we can help you?"
        >
          <p>Apply for a grant</p>
        </PageHeaderSection>
        <div className={styles.content_section}>
          <div className={styles.container}>
            <div className={`${styles.contact_grid} ${styles.layout_grid}`}>
              <div className={styles.column}>
                <h3>Lets get started</h3>
                <p>
                  These notes are here to help you provide all the information
                  required so that Trustees can come to a decision about your
                  application.
                </p>
                <p className="bolder">
                  Please read these notes before progressing to the applic and
                  also ensure that you have explored and considered ALL sections
                  of our website.
                </p>
                <ul>
                  <li>All form fields are required.</li>
                  <li>
                    Your application must meet our criteria - live within 15
                    miles of Blackpool Tower and be under the age of 25
                  </li>
                  <li>
                    If your application is successful, you will be sent an email
                    as soon as possible after the meeting which will include
                    terms and conditions for your acceptance.
                  </li>
                  <li>
                    If further information becomes available after you have
                    submitted your application but prior to the Trust meeting,
                    eg receiving the result of your funding application or
                    needing to change details on this application, you will need
                    to contact us to let us know about this change.
                  </li>
                  <li>
                    Trustees do not enter into any communication about rejected
                    applications nor is there an appeals process.
                  </li>
                  <li>
                    Once you submit your application, you will recieve
                    acknowledgement via email within a few min confirming
                    receipt of your application. Should we require further
                    information we will contact you by email.
                  </li>
                </ul>
                <ApplicationForm />
              </div>
              <div className={styles.column}>
                <h3>
                  <FontAwesomeIcon icon="edit" fixedWidth /> Other Ways to apply
                </h3>
                <div>
                  <p>
                    Whilst we would prefer you to complete our online form, you
                    can also write to us using the address below.
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
        </div>
      </main>
    </Layout>
  );
}
