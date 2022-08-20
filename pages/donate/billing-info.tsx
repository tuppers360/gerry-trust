import * as yup from 'yup';

import { Path, useForm, UseFormRegister } from 'react-hook-form';

import { faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import FieldErrorMessage from 'components/form/FieldErrorMessage';
import FormErrorMessage from 'components/form/FormErrorMessage';
import FormInfoMessage from 'components/form/FormInfoMessage';
import PageHeaderSection from 'components/PageHeaderSection';
import updateDonationDetailsAction from 'lib/updateDonationDetailsAction';
import { useStateMachine } from 'little-state-machine';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'pages/_app';
import { useState } from 'react';
import { fetchPostJSON } from 'utils/api-helpers';
import getStripe from 'utils/get-stripejs';
import FieldError from './../../components/form/FieldError';

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
  postCode: yup.string().required('Please enter your post code'),
  message: yup.string().required('Please enter your message')
});

export interface IStatus {
  submitted?: boolean;
  submitting?: boolean;
  info: {
    error: boolean;
    msg: string;
  };
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  type: string;
  placeholder?: string;
  labelText?: string;
};

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  town: string;
  county: string;
  postCode: string;
  message: string;
}

const BillingInfoPage: NextPageWithLayout = () => {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [charLimit] = useState(250);
  const { state, actions } = useStateMachine({ updateDonationDetailsAction });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormValues>({
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
    router.push('/donate/message');
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

  const handleOnSubmit = async (data) => {
    setLoading(true);
    actions.updateDonationDetailsAction({ ...data });
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    //add the donation details to the data object
    data.amount = state.donationDetails.amount;
    data.giftAid = state.donationDetails.giftAid;
    // Create a Checkout Session.
    const response = await fetchPostJSON('/api/stripe/checkout_sessions', {
      amount: data.amount,
      giftAid: data.giftAid
    });

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }
    //add the stripe session id to the data object
    data.stripeSessionId = response.id;

    // Create a donation in the database with the session id.
    const donationResponse = await fetch('/api/donation/create_donation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: data
      })
    });

    if (donationResponse.status === 500) {
      console.error(donationResponse);
      return;
    }
    handleResponse(donationResponse.status, donationResponse.statusText);
    // router.push('/donate/summary');

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
      <PageHeaderSection title="Donate" heading="Billing Information">
        <p>
          Donate to help us to help the local youths of Blackpool, Fylde and
          Wyre 💖
        </p>
      </PageHeaderSection>
      <div className="mx-auto max-w-4xl px-4">
        {Object.keys(errors).length > 0 && <FormErrorMessage />}
        {status.info.error && <FormInfoMessage status={status} />}
        {!status.submitted && (
          <form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-200"></div>
              </div>
            </div>
            <section>
              <div className="pt-6">
                <div>
                  <h3 className="text-xl font-medium leading-6 dark:text-slate-300">
                    Personal Information
                  </h3>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      First Name
                    </label>
                    <div className="relative mt-1">
                      <input
                        className={`block w-full rounded-md py-3 px-4 shadow-sm sm:text-sm ${
                          errors.firstName
                            ? `inset-1 border-red-300 pr-10 text-red-600 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:text-red-500`
                            : 'border-gray-300 text-slate-700 focus:border-blue-900 focus:ring-blue-900'
                        }`}
                        type="text"
                        {...register('firstName')}
                        placeholder="First Name"
                      />
                      {errors.firstName && <FieldError />}
                    </div>
                    {errors.firstName && (
                      <FieldErrorMessage message={errors.firstName.message} />
                    )}
                  </div>
                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Last Name
                    </label>
                    <div className="relative mt-1">
                      <input
                        className={`block w-full rounded-md py-3 px-4 shadow-sm sm:text-sm ${
                          errors.lastName
                            ? `inset-1 border-red-300 pr-10 text-red-600 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:text-red-500`
                            : 'border-gray-300 text-slate-700 focus:border-blue-900 focus:ring-blue-900'
                        }`}
                        type="text"
                        {...register('lastName')}
                        placeholder="Last Name"
                      />
                      {errors.lastName && <FieldError />}
                    </div>
                    {errors.lastName && (
                      <FieldErrorMessage message={errors.lastName.message} />
                    )}
                  </div>

                  <div className="sm:col-span-4">
                    <label className="hidden text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email
                    </label>
                    <div className="relative mt-1">
                      <input
                        className={`block w-full rounded-md py-3 px-4 shadow-sm sm:text-sm ${
                          errors.email
                            ? `inset-1 border-red-300 pr-10 text-red-600 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:text-red-500`
                            : 'border-gray-300 text-slate-700 focus:border-blue-900 focus:ring-blue-900'
                        }`}
                        type="email"
                        {...register('email')}
                        placeholder="Email"
                      />
                      {errors.email && <FieldError />}
                    </div>
                    {errors.email && (
                      <FieldErrorMessage message={errors.email.message} />
                    )}
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="pt-6">
                <h3 className="text-xl font-medium leading-6 dark:text-slate-300">
                  Address Information
                </h3>
                <p className="mt-1 text-sm ">
                  Please use your address where you receive mail.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="col-span-6">
                  <label className="hidden text-sm font-medium text-slate-700 dark:text-slate-300">
                    Address
                  </label>
                  <div className="relative mt-1">
                    <input
                      className={`block w-full rounded-md py-3 px-4 shadow-sm sm:text-sm ${
                        errors.addressLine1
                          ? `inset-1 border-red-300 pr-10 text-red-600 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:text-red-500`
                          : 'border-gray-300 text-slate-700 focus:border-blue-900 focus:ring-blue-900'
                      }`}
                      type="text"
                      {...register('addressLine1')}
                      placeholder="Address"
                    />
                    {errors.addressLine1 && <FieldError />}
                  </div>
                  {errors.addressLine1 && (
                    <FieldErrorMessage message={errors.addressLine1.message} />
                  )}
                </div>
                <div className="col-span-6 -mt-4">
                  <label className="hidden text-sm font-medium text-slate-700 dark:text-slate-300">
                    Address Line 2
                  </label>
                  <div className="relative mt-1">
                    <input
                      className={`block w-full rounded-md py-3 px-4 shadow-sm sm:text-sm ${
                        errors.addressLine2
                          ? `inset-1 border-red-300 pr-10 text-red-600 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:text-red-500`
                          : 'border-gray-300 text-slate-700 focus:border-blue-900 focus:ring-blue-900'
                      }`}
                      type="text"
                      {...register('addressLine2')}
                    />
                    {errors.addressLine2 && <FieldError />}
                  </div>
                  {errors.addressLine2 && (
                    <FieldErrorMessage message={errors.addressLine2.message} />
                  )}
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Town
                  </label>
                  <div className="relative mt-1">
                    <input
                      className={`block w-full rounded-md py-3 px-4 shadow-sm sm:text-sm ${
                        errors.town
                          ? `inset-1 border-red-300 pr-10 text-red-600 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:text-red-500`
                          : 'border-gray-300 text-slate-700 focus:border-blue-900 focus:ring-blue-900'
                      }`}
                      type="text"
                      {...register('town')}
                      placeholder="Town"
                    />
                    {errors.town && <FieldError />}
                  </div>
                  {errors.town && (
                    <FieldErrorMessage message={errors.town.message} />
                  )}
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    County
                  </label>
                  <div className="relative mt-1">
                    <input
                      className={`block w-full rounded-md py-3 px-4 shadow-sm sm:text-sm ${
                        errors.county
                          ? `inset-1 border-red-300 pr-10 text-red-600 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:text-red-500`
                          : 'border-gray-300 text-slate-700 focus:border-blue-900 focus:ring-blue-900'
                      }`}
                      type="text"
                      {...register('county')}
                      placeholder="County"
                    />
                    {errors.county && <FieldError />}
                  </div>
                  {errors.county && (
                    <FieldErrorMessage message={errors.county.message} />
                  )}
                </div>
                <div className="col-span-6 sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Post Code
                  </label>
                  <div className="relative mt-1">
                    <input
                      className={`block w-full rounded-md py-3 px-4 shadow-sm sm:text-sm ${
                        errors.postCode
                          ? `inset-1 border-red-300 pr-10 text-red-600 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 dark:text-red-500`
                          : 'border-gray-300 text-slate-700 focus:border-blue-900 focus:ring-blue-900'
                      }`}
                      type="text"
                      {...register('postCode')}
                      placeholder="Post Code"
                    />
                    {errors.postCode && <FieldError />}
                  </div>
                  {errors.postCode && (
                    <FieldErrorMessage message={errors.postCode.message} />
                  )}
                </div>
              </div>
            </section>
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
                type="submit"
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
          </form>
        )}
      </div>
    </>
  );
};

export default BillingInfoPage;

export async function getStaticProps() {
  return {
    props: {
      title: 'Billing Information - The Gerry Richardson Trust',
      description: 'Billing Information page to process your donation'
    }
  };
}
