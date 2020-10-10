import React from 'react';
import ContactForm from '../../components/contactform';
import Layout from './../../components/layout/index';

function Contact() {
  return (
    <Layout>
      <main>
        <div className="contact-header">
          <h2 className="contact-header-text">Contact Us</h2>
          <h1>Get in contact and discover how we can help you</h1>
          <h2 className="subtitle">
            Below you will find a few ways to contact us
          </h2>
        </div>
        <div className="contact-container-grid">
          <div className="contact-item contact-box">
            <h2 className="heading">
              <i className="fa fa-envelope"></i> Send us a message
            </h2>
            <div>
              <ContactForm />
            </div>
          </div>
          <div className="contact-item">
            <h2 className="heading">
              <i className="fa fa-home"></i> Get in touch
            </h2>
            <p>
              We’re very approachable and would love to speak to you. Feel free
              to call, send us an email, Tweet us or simply complete the enquiry
              form.
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
      </main>
    </Layout>
  );
}

export default Contact;
