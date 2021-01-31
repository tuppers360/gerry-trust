import ApplicationForm from 'components/ApplicationForm';
import Container from 'components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PageHeaderSection from 'components/PageHeaderSection';
import React from 'react';

export default function Application() {
  return (
    <Container
      title="Make an Applcation - The Gerry Richardson Trust"
      description="Apply for a grant from The Gerry Richardson Trust"
    >
      <main>
        <PageHeaderSection
          title="Application Form"
          heading="Lets see if we can help you?"
        >
          <p>Apply for a grant</p>
        </PageHeaderSection>
        <div className="max-w-xl mx-auto px-4 sm:px-6 md:max-w-6xl lg:px-8 m-12">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-700 text-center">
            Application Form & Guidance Notes
          </h2>

          <section>
            <p className="mt-4 lg:mt-8 text-lg">
              These notes are here to help you provide all the information
              required so that Trustees can come to a decision about your
              application.
            </p>
            <p className="mt-4 text-lg">
              Please read these notes before progressing to the applic and also
              ensure that you have explored and considered ALL sections of our
              website.
            </p>
            <h3 className="text font-extrabold tracking-tight text-gray-700 mt-4">
              Please note the following when applying for a grant:
            </h3>
            <ul className="list-disc pl-8 bg-gray-100 p-4 border border-gray-00 rounded-md shadow-sm mt-4">
              <li>All form fields are required.</li>
              <li>
                Your application must meet our criteria - live within 15 miles
                of Blackpool Tower and be under the age of 25
              </li>
              <li>
                If your application is successful, you will be sent an email as
                soon as possible after the meeting which will include terms and
                conditions for your acceptance.
              </li>
              <li>
                If further information becomes available after you have
                submitted your application but prior to the Trust meeting, eg
                receiving the result of your funding application or needing to
                change details on this application, you will need to contact us
                to let us know about this change.
              </li>
              <li>
                Trustees do not enter into any communication about rejected
                applications nor is there an appeals process.
              </li>
              <li>
                Once you submit your application, you will recieve
                acknowledgement via email within a few min confirming receipt of
                your application. Should we require further information we will
                contact you by email.
              </li>
            </ul>
          </section>
          <section>
            <ApplicationForm />
            <h3 className="text-2xl font-extrabold tracking-tight text-gray-700 text-center mt-8">
              <FontAwesomeIcon icon="edit" fixedWidth /> Other Ways to apply
            </h3>
            <p className="mt-8 text-lg">
              Whilst we would prefer you to complete our online form, you can
              also write to us using the address below.
            </p>
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
          </section>
        </div>
      </main>
    </Container>
  );
}
