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
          <div className="grid lg:grid-cols-2 gap-8">
            <section>
              <h3 className="text-2xl font-extrabold tracking-tight text-gray-800 text-center">
                <span className="mr-2">
                  <FontAwesomeIcon icon="envelope" fixedWidth />
                </span>
                Get in touch
              </h3>
              <p className="mt-4 text-lg">
                We’re very approachable and would love to speak to you. You can
                use any of the following or enquiry form.
              </p>
              <ul className="mt-8">
                <li className="mt-4">
                  Call us -
                  <span className="text-gray-800 font-semibold ml-1">
                    (01253) 590510
                  </span>
                </li>
                <li className="mt-4">
                  Send us an email -{' '}
                  <a
                    href="mailto:contactus@gerryrichardsontrust.org"
                    className="text-gray-800 hover:text-gray-500 font-semibold ml-1"
                  >
                    contactus@gerryrichardsontrust.org
                  </a>
                </li>
                <li className="mt-4">
                  Tweet us - <span className="sr-only">Twitter</span>
                  <a
                    href="https://twitter.com/gerrytrust"
                    className="text-gray-800 hover:text-twitter font-semibold ml-1"
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
            <ContactFormTest />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Contact;
