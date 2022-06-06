import { faEdit, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import ContactForm from '../components/ContactForm';
import Container from 'components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageHeaderSection from '../components/PageHeaderSection';
import React from 'react';

function Contact() {
  return (
    <Container title="Contact Us - The Gerry Richardson Trust">
      <PageHeaderSection
        title="Contact Us"
        heading="Get in contact and discover how we can help you"
      >
        <p>Below you will find a few ways to contact us</p>
      </PageHeaderSection>
      <div className="max-w-xl px-4 mx-auto sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <section>
            <h3 className="text-xl font-medium text-center text-gray-600">
              <FontAwesomeIcon icon={faEnvelope} fixedWidth /> Get in touch
            </h3>
            <p className="mt-8 text-lg">
              We’re very approachable and would love to speak to you. You can
              use any of the following or our enquiry form.
            </p>
            <ul className="mt-8">
              <li className="mt-4">
                Call us -
                <span className="ml-1 mr-1 font-semibold text-gray-800">
                  (01253)700879
                </span>
                or
                <span className="ml-1 mr-1 font-semibold text-gray-800">
                  07799763108
                </span>
              </li>
              <li className="mt-4">
                Send us an email -
                <a
                  href="mailto:contactus@gerryrichardsontrust.org"
                  className="ml-1 font-semibold text-gray-800 hover:text-gray-500"
                >
                  contactus@gerryrichardsontrust.org
                </a>
              </li>
              <li className="mt-4">
                Tweet us - <span className="sr-only">Twitter</span>
                <a
                  href="https://twitter.com/gerrytrust"
                  className="ml-1 font-semibold text-gray-800 hover:text-twitter"
                >
                  @gerrytrust
                </a>
              </li>
              <li className="mt-4">
                Write to us -
                <p className="mt-4 text-lg">
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
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-medium text-center text-gray-600">
              <FontAwesomeIcon icon={faEdit} fixedWidth /> Send us a message
            </h2>
            <ContactForm />
          </section>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
