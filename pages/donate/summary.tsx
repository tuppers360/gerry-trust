import * as yup from 'yup';

import { Path, UseFormRegister, useForm } from 'react-hook-form';
import React, { useState } from 'react';

import Container from 'components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import PageHeaderSection from 'components/PageHeaderSection';
import { PaperClipIcon } from '@heroicons/react/solid';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { fetchPostJSON } from 'utils/api-helpers';
import updateDonationDetailsAction from 'lib/updateDonationDetailsAction';
import { useRouter } from 'next/router';
import { useStateMachine } from 'little-state-machine';

export interface IStatus {
  submitted?: boolean;
  submitting?: boolean;
  info: {
    error: boolean;
    msg: string;
  };
}

const Summary: NextPage = () => {
  const router = useRouter();
  const { state, actions } = useStateMachine({ updateDonationDetailsAction });
  const details = state.donationDetails;
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<IStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: '' }
  });

  function handleClick(e) {
    e.preventDefault();
    router.push('/donate/billing-info');
  }

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      });
    } else {
      setStatus({
        info: { error: true, msg: msg }
      });
    }
  };

  const handleOnSubmit = async () => {
    setLoading(true);
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    console.log('STATE', state);
    // Create a Checkout Session.
    const response = await fetchPostJSON('/api/stripe/checkout_sessions', {
      amount: state.donationDetails.amount,
      giftAid: state.donationDetails.giftAid
    });

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    // Create a donation in the database with the session id.
    const donationResponse = await fetch('/api/donation/create_donation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: state.donationDetails,
        stripeSessionId: response.id
      })
    });

    if (donationResponse.status === 500) {
      console.error(donationResponse);
      return;
    }
    handleResponse(donationResponse.status, donationResponse.statusText);

    // Redirect to Checkout.
    // const stripe = await getStripe();
    // const { error } = await stripe!.redirectToCheckout({
    //   // Make the id field from the Checkout Session creation API response
    //   // available to this file, so you can provide it as parameter here
    //   // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
    //   sessionId: response.id
    // });
    // // If `redirectToCheckout` fails due to a browser or network
    // // error, display the localized error message to your customer
    // // using `error.message`.
    // console.warn(error.message);
    // setLoading(false);
  };

  return (
    <>
      <Container title="Make a Donation - The Gerry Richardson Trust">
        <PageHeaderSection title="Donate" heading="Summary">
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-700 dark:text-slate-200 sm:text-4xl">
            You are donating
            <br /> £{state.donationDetails.amount}
          </h2>
        </PageHeaderSection>
        <div className="mx-auto max-w-4xl px-4">
          <div className="overflow-hidden rounded-lg py-5 leading-6 shadow dark:bg-slate-700 dark:bg-slate-700/40 dark:ring-1 dark:ring-white/20 sm:p-6">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-slate-700 dark:text-slate-300">
                Billing Details
              </h3>
              <p className="text-md mt-1 max-w-2xl text-slate-500 dark:text-slate-100">
                Personal details and application.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-md font-medium text-slate-700 dark:text-slate-300">
                    Full name
                  </dt>
                  <dd className="text-md mt-1 text-slate-500 dark:text-slate-100">
                    {details.firstName} {details.lastName}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-md font-medium text-slate-500 dark:text-slate-100">
                    Email address
                  </dt>
                  <dd className="text-md mt-1 text-slate-500 dark:text-slate-100">
                    {state.donationDetails.email}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-md font-medium text-gray-500">Address</dt>
                  <dd className="text-md mt-1 text-slate-500 dark:text-slate-100">
                    {details.addressLine1}
                  </dd>
                  <dd className="text-md mt-1 text-slate-500 dark:text-slate-100">
                    {details.addressLine2}
                  </dd>
                  <dd className="text-md mt-1 text-slate-500 dark:text-slate-100">
                    {details.town}
                  </dd>
                  <dd className="text-md mt-1 text-slate-500 dark:text-slate-100">
                    {details.county}
                  </dd>
                  <dd className="text-md mt-1 text-slate-500 dark:text-slate-100">
                    {details.postCode}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-md font-medium text-gray-500">About</dt>
                  <dd className="text-md mt-1 text-slate-500 dark:text-slate-100">
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint. Sit id mollit nulla mollit nostrud
                    in ea officia proident. Irure nostrud pariatur mollit ad
                    adipisicing reprehenderit deserunt qui eu.
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-md font-medium text-gray-500">
                    Attachments
                  </dt>
                  <dd className="text-md mt-1 text-slate-500 dark:text-slate-100">
                    <ul
                      role="list"
                      className="divide-y divide-gray-200 rounded-md border border-gray-200"
                    >
                      <li className="text-md flex items-center justify-between py-3 pl-3 pr-4">
                        <div className="flex w-0 flex-1 items-center">
                          <PaperClipIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2 w-0 flex-1 truncate">
                            resume_back_end_developer.pdf
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Download
                          </a>
                        </div>
                      </li>
                      <li className="text-md flex items-center justify-between py-3 pl-3 pr-4">
                        <div className="flex w-0 flex-1 items-center">
                          <PaperClipIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2 w-0 flex-1 truncate">
                            coverletter_back_end_developer.pdf
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Download
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <button
              className="mt-5 mb-1 inline-flex items-center justify-center rounded-md border border-transparent bg-blue-900 px-8 py-3 text-base font-semibold uppercase text-white hover:bg-blue-800 disabled:opacity-75 md:py-3 md:px-8"
              type="button"
              onClick={handleClick}
            >
              Back
            </button>
            <button
              className="mt-5 mb-1 ml-3 inline-flex items-center justify-center rounded-md border border-transparent bg-blue-900 px-4 py-3 text-base font-semibold uppercase text-white hover:bg-blue-800 disabled:opacity-75 md:py-3 md:px-8"
              type="button"
              onClick={handleOnSubmit}
              disabled={loading}
            >
              {loading && (
                <span className="mr-2">
                  <FontAwesomeIcon icon={faSync} spin />
                </span>
              )}
              Next step
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Summary;
