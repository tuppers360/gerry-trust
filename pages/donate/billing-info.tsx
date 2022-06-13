import * as yup from 'yup';

import { Path, UseFormRegister, useForm } from 'react-hook-form';
import React, { useState } from 'react';

import Container from 'components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormErrorMessage from 'components/form/FormErrorMessage';
import FormInfoMessage from 'components/form/FormInfoMessage';
import { FormInput } from 'components/form/FormInput';
import { NextPage } from 'next';
import PageHeaderSection from 'components/PageHeaderSection';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { fetchPostJSON } from 'utils/api-helpers';
import getStripe from 'utils/get-stripejs';
import updateDonationDetailsAction from 'lib/updateDonationDetailsAction';
import { useRouter } from 'next/router';
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
}

const BillingInfo: NextPage = () => {
  const router = useRouter();
  const { state, actions } = useStateMachine({ updateDonationDetailsAction });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormValues>({
    defaultValues: state.donationDetails,
    resolver: yupResolver(schema)
  });

  const Input = FormInput(errors);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<IStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: '' }
  });

  function handleClick(e) {
    e.preventDefault();
    router.push('/donate');
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
      <Container title="Make a Donation - The Gerry Richardson Trust">
        <PageHeaderSection title="Donate" heading="Make a Donation">
          <p>
            Donate to help us to help the local youths of Blackpool, Fylde and
            Wyre 💖
          </p>
        </PageHeaderSection>
        <div className="max-w-4xl px-4 mx-auto">
          {Object.keys(errors).length > 0 && <FormErrorMessage />}
          {status.info.error && <FormInfoMessage staus={status} />}
          {!status.submitted && (
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
                      <Input
                        label="firstName"
                        type="text"
                        register={register}
                        labelText="First Name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <Input
                        label="lastName"
                        type="text"
                        register={register}
                        labelText="Last Name"
                        placeholder="Last Name"
                      />
                    </div>

                    <div className="sm:col-span-4">
                      <Input
                        label="email"
                        type="email"
                        register={register}
                        labelText="Email"
                        placeholder="Email Address"
                      />
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
                    <Input
                      label="addressLine1"
                      type="text"
                      register={register}
                      labelText="Address"
                      placeholder=""
                    />
                  </div>
                  <div className="-mt-4 sm:col-span-6">
                    <Input
                      label="addressLine2"
                      type="text"
                      register={register}
                      labelText=""
                      placeholder=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Input
                      label="town"
                      type="text"
                      register={register}
                      labelText="Town"
                      placeholder=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Input
                      label="county"
                      type="text"
                      register={register}
                      labelText="County"
                      placeholder=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Input
                      label="postCode"
                      type="text"
                      register={register}
                      labelText="Post Code"
                      placeholder=""
                    />
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
                      <FontAwesomeIcon icon={faSync} spin />
                    </span>
                  )}
                  Proceed to payment
                </button>
              </div>
            </form>
          )}
        </div>
      </Container>
    </>
  );
};

export default BillingInfo;
