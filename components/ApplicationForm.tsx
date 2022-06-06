import React, { useState } from 'react';

import CheckCircle from './svg-images/CheckCircle';
import CrossCircle from './svg-images/CrossCircle';
import ExclamationTriangle from './svg-images/ExclamationTriangle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormErrorIcon from './FormErrorIcon';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

export interface IStatus {
  submitted?: boolean;
  submitting?: boolean;
  info: {
    error: boolean;
    msg: string;
  };
}

//TODO - set default value of empty string??
type FormInputs = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  town: string;
  county: string;
  postCode: string;
  application: string;
};

function ApplicationForm() {
  const [status, setStatus] = useState<IStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: '' }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormInputs>();

  const [submittedData, setSubmittedData] = useState({});

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      });
      reset({ ...submittedData });
    } else {
      setStatus({
        info: { error: true, msg: msg }
      });
    }
  };

  const handleOnSubmit = async (
    data: FormInputs,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setSubmittedData(data);
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/sendgrid/application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <>
      <div className="mt-4 mb-4">
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
        {!status.info.error && status.info.msg && (
          <div className="p-4 bg-green-100 border border-l-4 border-green-400 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle styles="h-5 w-5 text-green-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-green-800">
                  {status.info.msg}
                </h3>
                <div className="mt-2 space-y-2 text-green-700">
                  <p>
                    We have received your application and will consider it at
                    our next meeting.
                  </p>
                  <p>
                    We will contact you by email to let you know if you are
                    successful or not.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {!status.submitted && (
        <form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
          <section className="px-4 py-5 border border-gray-300 rounded-lg shadow bg-gray-50 sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="mt-1 text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="firstName"
                      className="block text-base font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <div className="relative mt-1">
                      <input
                        className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                          errors.firstName
                            ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                            : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                        }`}
                        {...register('firstName', {
                          required: 'First name is required'
                        })}
                        id="firstName"
                        type="text"
                      />

                      {errors.firstName && <FormErrorIcon />}
                    </div>
                    {errors.firstName && (
                      <p
                        className="mt-2 text-sm text-red-600"
                        id="firstName-error"
                      >
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="lastName"
                      className="block text-base font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="relative mt-1">
                      <input
                        className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                          errors.lastName
                            ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                            : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                        }`}
                        id="lastName"
                        {...register('lastName', {
                          required: 'Last name is required'
                        })}
                        type="text"
                      />
                      {errors.lastName && <FormErrorIcon />}
                    </div>
                    {errors.lastName && (
                      <p
                        className="mt-2 text-sm text-red-600"
                        id="lastName-error"
                      >
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-base font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="relative mt-1">
                      <input
                        className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                          errors.email
                            ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                            : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                        }`}
                        id="email"
                        name="email"
                        {...register('email', {
                          required: 'Please enter your email',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Please enter a valid email address'
                          }
                        })}
                        required
                        type="text"
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
            </div>
          </section>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200"></div>
            </div>
          </div>
          <section className="px-4 py-5 mt-4 border border-gray-300 rounded-lg shadow bg-gray-50 sm:p-6 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="mt-1 text-lg font-medium leading-6 text-gray-900">
                  Address Information
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="addressLine1"
                      className="block text-base font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <div className="relative mt-1">
                      <input
                        autoComplete="address-line1"
                        className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                          errors.addressLine1
                            ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                            : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                        }`}
                        id="addressLine1"
                        name="addressLine1"
                        {...register('addressLine1', {
                          required: 'Please enter your address'
                        })}
                        type="text"
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
                  <div className="col-span-6 -mt-8">
                    <label
                      htmlFor="addressLine2"
                      className="invisible block text-base font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <div className="relative mt-1">
                      <input
                        autoComplete="address-line2"
                        className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
                        id="addressLine2"
                        name="addressLine2"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="town"
                      className="block text-base font-medium text-gray-700"
                    >
                      Town
                    </label>
                    <div className="relative mt-1">
                      <input
                        className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                          errors.town
                            ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                            : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                        }`}
                        id="town"
                        name="town"
                        {...register('town', {
                          required: 'Please enter your town'
                        })}
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

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="county"
                      className="block text-base font-medium text-gray-700"
                    >
                      County
                    </label>
                    <div className="relative mt-1">
                      <input
                        className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                          errors.county
                            ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                            : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                        }`}
                        id="county"
                        name="county"
                        {...register('county', {
                          required: 'Please enter your county'
                        })}
                        type="text"
                      />
                      {errors.county && <FormErrorIcon />}
                    </div>
                    {errors.county && (
                      <p
                        className="mt-2 text-sm text-red-600"
                        id="county-error"
                      >
                        {errors.county.message}
                      </p>
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="postCode"
                      className="block text-base font-medium text-gray-700"
                    >
                      Post Code
                    </label>
                    <div className="relative mt-1">
                      <input
                        className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                          errors.postCode
                            ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                            : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                        }`}
                        id="postCode"
                        name="postCode"
                        {...register('postCode', {
                          required: 'Please enter your message'
                        })}
                        type="text"
                      />
                      {errors.postCode && <FormErrorIcon />}
                    </div>
                    {errors.postCode && (
                      <p
                        className="mt-2 text-sm text-red-600"
                        id="postCode-error"
                      >
                        {errors.postCode.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200"></div>
            </div>
          </div>
          <section className="px-4 py-5 mt-4 border border-gray-300 rounded-lg shadow bg-gray-50 sm:p-6 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="mt-1 text-lg font-medium leading-6 text-gray-900">
                  Application
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Please provide us with as much information about your
                  application as possible. How will this funding make a
                  difference? Who will benefit?
                </p>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <label
                      htmlFor="application"
                      className="invisible block text-base font-medium text-gray-700"
                    >
                      Application
                    </label>
                    <div className="relative -mt-4">
                      <textarea
                        className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                          errors.application
                            ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                            : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                        }`}
                        id="application"
                        name="application"
                        {...register('application', {
                          required: 'Please complete your application'
                        })}
                        rows={10}
                      ></textarea>
                      {errors.application && <FormErrorIcon />}
                    </div>
                    {errors.application && (
                      <p
                        className="mt-2 text-sm text-red-600"
                        id="application-error"
                      >
                        {errors.application.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="sm:col-span-2"></div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full px-16 py-3 text-base font-semibold text-white bg-blue-900 border border-transparent rounded-md shadow-sm md:w-auto hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
              disabled={status.submitting}
            >
              {!status.submitting ? (
                'Submit Application'
              ) : (
                <div>
                  <span className="mr-1">
                    <FontAwesomeIcon icon={faSync} spin />
                  </span>
                  Submitting...
                </div>
              )}
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default ApplicationForm;
