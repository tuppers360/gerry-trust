import * as yup from 'yup';

import React, { useState } from 'react';

import CrossCircle from 'components/svg-images/CrossCircle';
import ExclamationTriangle from 'components/svg-images/ExclamationTriangle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormErrorIcon from 'components/FormErrorIcon';
import { fetchPostJSON } from '../../utils/api-helpers';
import getStripe from '../../utils/get-stripejs';
import updateDonationDetailsAction from 'lib/updateDonationDetailsAction';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  firstName: yup.string().required('Please enter your first name'),
  lastName: yup.string().required('Please enter your last name'),
  email: yup
    .string()
    .required('Please enter your email address')
    .email('Please enter a valid email address'),
  addressLine1: yup.string().required('Please enter your address'),
  town: yup.string().required('Please enter your town'),
  county: yup.string().required('Please enter your county'),
  postCode: yup.string().required('Please enter your post code')
});

export interface IStatus {
  submitted?: boolean;
  submitting?: boolean;
  info: {
    error: boolean;
    msg: string;
  };
}

export type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  town: string;
  county: string;
  postCode: string;
};

const DonationFormStep2 = ({ step, setStep }) => {
  const { state, actions } = useStateMachine({ updateDonationDetailsAction });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>({
    defaultValues: state.donationDetails,
    resolver: yupResolver(schema)
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<IStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: '' }
  });

  function handleClick(e) {
    e.preventDefault();
    setStep(step - 1);
  }

  const handleOnSubmit = async (data) => {
    setLoading(true);
    actions.updateDonationDetailsAction(data);

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

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
    setLoading(false);
  };

  return (
    <>
      {Object.keys(errors).length > 0 && (
        <div className="p-4 bg-red-100 border-l-4 border-red-400 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0 mt-1">
              <CrossCircle styles="h-5 w-5 text-red-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800">
                Sorry, there was a problem with the form
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  Please see the form fields below for more information on how
                  to solve the issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {status.info.error && (
        <div className="p-4 bg-yellow-100 border-l-4 border-yellow-400 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationTriangle styles="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-yellow-800">
                There was a problem sending your message
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>{status.info.msg}</p>
                <p className="mt-2">
                  Please try again, if the problem persists please try another
                  method.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        <section>
          <div className="pt-8">
            <div>
              <h3 className="text-xl font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
            </div>
            <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="relative mt-1">
                  <input
                    {...register('firstName')}
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className={`py-3 px-3 block w-full shadow-sm rounded-md sm:text-sm ${
                      errors.firstName
                        ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                        : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                    }`}
                  />
                  {errors.firstName && <FormErrorIcon />}
                </div>
                {errors.firstName && (
                  <p className="mt-2 text-sm text-red-600" id="firstName-error">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="relative mt-1">
                  <input
                    {...register('lastName')}
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className={`py-3 px-3 block w-full shadow-sm rounded-md sm:text-sm ${
                      errors.lastName
                        ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                        : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                    }`}
                  />
                  {errors.firstName && <FormErrorIcon />}
                </div>
                {errors.lastName && (
                  <p className="mt-2 text-sm text-red-600" id="lastName-error">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="relative mt-1">
                  <input
                    {...register('email')}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={`py-3 px-3 block w-full shadow-sm rounded-md sm:text-sm ${
                      errors.email
                        ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                        : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                    }`}
                  />
                  {errors.email && <FormErrorIcon />}
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600" id="email-error">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="pt-8">
            <h3 className="text-xl font-medium leading-6 text-gray-900">
              Address Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Please use your address where you receive mail.
            </p>
          </div>
          <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="addressLine1"
                className="block text-sm font-medium text-gray-700"
              >
                Street address
              </label>
              <div className="relative mt-1">
                <input
                  {...register('addressLine1')}
                  type="text"
                  name="addressLine1"
                  id="addressLine1"
                  autoComplete="street-address"
                  className={`py-3 px-3 block w-full shadow-sm rounded-md sm:text-sm ${
                    errors.addressLine1
                      ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                      : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                  }`}
                />
                {errors.addressLine1 && <FormErrorIcon />}
              </div>
              {errors.addressLine1 && (
                <p
                  className="mt-2 text-sm text-red-600"
                  id="addressLine1-error"
                >
                  {errors.addressLine1.message}
                </p>
              )}
            </div>
            <div className="-mt-8 sm:col-span-6">
              <label
                htmlFor="addressLine2"
                className="invisible block text-sm font-medium text-gray-700"
              >
                Street address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="addressLine2"
                  id="addressLine2"
                  autoComplete="street-address"
                  className="block w-full px-3 py-3 border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-900 focus:border-blue-900"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="town"
                className="block text-sm font-medium text-gray-700"
              >
                Town
              </label>
              <div className="relative mt-1">
                <input
                  className={`py-3 px-3 block w-full shadow-sm rounded-md sm:text-sm ${
                    errors.town
                      ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                      : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                  }`}
                  id="town"
                  name="town"
                  {...register('town')}
                  type="text"
                />
                {errors.town && <FormErrorIcon />}
              </div>
              {errors.town && (
                <p className="mt-2 text-sm text-red-600" id="town-error">
                  {errors.town.message}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="county"
                className="block text-sm font-medium text-gray-700"
              >
                County
              </label>
              <div className="relative mt-1">
                <input
                  className={`py-3 px-3 block w-full shadow-sm rounded-md sm:text-sm${
                    errors.county
                      ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                      : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                  }`}
                  id="county"
                  name="county"
                  {...register('county')}
                  type="text"
                />
                {errors.county && <FormErrorIcon />}
              </div>
              {errors.county && (
                <p className="mt-2 text-sm text-red-600" id="county-error">
                  {errors.county.message}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postCode"
                className="block text-sm font-medium text-gray-700"
              >
                Post Code
              </label>
              <div className="relative mt-1">
                <input
                  className={`py-3 px-3 block w-full shadow-sm rounded-md sm:text-sm${
                    errors.postCode
                      ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                      : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                  }`}
                  id="postCode"
                  name="postCode"
                  {...register('postCode')}
                  type="text"
                />
                {errors.postCode && <FormErrorIcon />}
              </div>
              {errors.postCode && (
                <p className="mt-2 text-sm text-red-600" id="postCode-error">
                  {errors.postCode.message}
                </p>
              )}
            </div>
          </div>
        </section>
        <div className="flex justify-between">
          <button
            className="inline-flex items-center justify-center px-8 py-3 mt-5 mb-1 text-base font-semibold text-white uppercase bg-blue-900 border border-transparent rounded-md hover:bg-blue-800 md:py-3 md:px-8 disabled:opacity-75"
            type="button"
            onClick={handleClick}
          >
            Back
          </button>
          <button
            className="inline-flex items-center justify-center px-4 py-3 mt-5 mb-1 ml-3 text-base font-semibold text-white uppercase bg-blue-900 border border-transparent rounded-md hover:bg-blue-800 md:py-3 md:px-8 disabled:opacity-75"
            type="submit"
            disabled={loading}
          >
            {loading && (
              <span className="mr-2">
                <FontAwesomeIcon icon="sync" spin />
              </span>
            )}
            Proceed to payment
          </button>
        </div>
      </form>
    </>
  );
};

export default DonationFormStep2;
