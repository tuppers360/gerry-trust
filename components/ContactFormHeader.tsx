import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactFormHeader() {
  return (
    <>
      <h3 className="text-center text-xl font-medium text-slate-600 dark:text-slate-300">
        <FontAwesomeIcon icon={faEnvelope} fixedWidth /> Get in touch
      </h3>
      <p className="mt-8 text-lg">
        We’re very approachable and would love to speak to you. You can use any
        of the following or our enquiry form.
      </p>
      <ul className="mt-8">
        <li className="mt-4">
          Call us -
          <span className="ml-1 mr-1 font-semibold text-slate-800 dark:text-slate-300">
            (01253)700879
          </span>
          or
          <span className="ml-1 mr-1 font-semibold text-slate-800 dark:text-slate-300">
            07799763108
          </span>
        </li>
        <li className="mt-4">
          Send us an email -
          <a
            href="mailto:contactus@gerryrichardsontrust.org"
            className="ml-1 font-semibold text-slate-800 hover:text-slate-500 dark:text-slate-300 dark:hover:text-slate-500"
          >
            contactus@gerryrichardsontrust.org
          </a>
        </li>
        <li className="mt-4">
          Tweet us - <span className="sr-only">Twitter</span>
          <a
            href="https://twitter.com/gerrytrust"
            className="ml-1 font-semibold text-slate-800 hover:text-twitter dark:text-slate-300 dark:hover:text-twitter"
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
    </>
  );
}

export default ContactFormHeader;
