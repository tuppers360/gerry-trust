import React from 'react';
import ContactForm from '../../components/ContactForm';
import PageHeaderSection from '../../components/PageHeaderSection';
import Layout from '../../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactFormTest from '../../components/ContactFormTest';

function Contact() {
  return (
    <Layout title="Contact Us">
      <main>
        <PageHeaderSection
          title="Contact Us"
          heading="Get in contact and discover how we can help you"
        >
          <p>Below you will find a few ways to contact us</p>
        </PageHeaderSection>
        {/* <div className="">
          <div className="">
            <div className="">
              <div className="">
                <h3>Send us a message</h3>
                <div>
                  <ContactForm />
                </div>
              </div>
              <div className="">
                <h3>
                  <span className="">
                    <FontAwesomeIcon icon="home" fixedWidth />
                  </span>
                  Get in touch
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
        </div> */}
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-6xl lg:px-8 m-12">
          <div className="grid lg:grid-cols-2">
            <ContactFormTest />

            <div className="">
              <h3>
                <span className="">
                  <FontAwesomeIcon icon="home" fixedWidth />
                </span>
                Get in touch
              </h3>
              <p>
                We’re very approachable and would love to speak to you. Feel
                free to call, send us an email, Tweet us or simply complete the
                enquiry form.
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
      </main>
    </Layout>
  );
}

export default Contact;
