import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormErrorIcon from './FormErrorIcon';
import ExclamationTriangle from './svg-images/ExclamationTriangle';
import CheckCircle from './svg-images/CheckCircle';
import CrossCircle from './svg-images/CrossCircle';

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
    info: { error: false, msg: null },
  });

  const { register, handleSubmit, errors, reset } = useForm<FormInputs>();

  const [submittedData, setSubmittedData] = useState({});

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      reset({ ...submittedData });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnSubmit = async (data: FormInputs, e) => {
    e.preventDefault();
    setSubmittedData(data);
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/sendgrid/application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <>
      <div className="mt-4 mb-4">
        {Object.keys(errors).length > 0 && (
          <div className="rounded-md bg-red-100 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <CrossCircle styles="h-5 w-5 text-red-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Holy guacamole!
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>You should check in on some of those fields below.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {status.info.error && (
          <div className="rounded-md bg-yellow-100 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <ExclamationTriangle styles="h-5 w-5 text-yellow-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
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
          <div className="rounded-md bg-green-100 border-l-4 border border-green-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircle styles="h-5 w-5 text-green-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Eureka!</h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>{status.info.msg}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {!status.submitted && (
        <form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
          <section className="bg-gray-50 shadow px-4 py-5 rounded-lg sm:p-6 border border-gray-300">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mt-1">
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
                    <div className="mt-1 relative">
                      <input
                        aria-label="Enter your First Name"
                        className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                          errors.firstName
                            ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                            : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                        }`}
                        id="firstName"
                        name="firstName"
                        ref={register({
                          required: 'Please enter your first name',
                        })}
                        type="text"
                        autoComplete="first-name"
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
                    <div className="mt-1 relative">
                      <input
                        aria-label="Enter your Last Name"
                        className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                          errors.lastName
                            ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                            : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                        }`}
                        id="lastName"
                        name="lastName"
                        ref={register({
                          required: 'Please enter your last name',
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
                    <div className="mt-1 relative">
                      <input
                        aria-label="Enter your email"
                        autoComplete="email"
                        className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                          errors.email
                            ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                            : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                        }`}
                        id="email"
                        name="email"
                        ref={register({
                          required: 'Please enter your email',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Please enter a valid email address',
                          },
                        })}
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
          <section className="bg-gray-50 shadow px-4 py-5 rounded-lg sm:p-6 border border-gray-300 mt-4 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mt-1">
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
                      htmlFor="address-line1"
                      className="block text-base font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <div className="mt-1 relative">
                      <input
                        aria-label="Enter your address"
                        autoComplete="address-line1"
                        className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                          errors.addressLine1
                            ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                            : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                        }`}
                        id="addressLine1"
                        name="addressLine1"
                        ref={register({
                          required: 'Please enter your address',
                        })}
                        type="text"
                      />
                      {errors.addressLine1 && <FormErrorIcon />}
                    </div>
                    {errors.addressLine1 && (
                      <p
                        className="mt-2 text-sm text-red-600"
                        id="address-line1-error"
                      >
                        {errors.addressLine1.message}
                      </p>
                    )}
                  </div>
                  <div className="col-span-6 -mt-8">
                    <label
                      htmlFor="address-line2"
                      className="block text-base font-medium text-gray-700 invisible"
                    >
                      Address
                    </label>
                    <div className="mt-1 relative">
                      <input
                        aria-label="Enter your address"
                        autoComplete="address-line2"
                        className="py-3 px-4 block w-full shadow-sm rounded-md focus:ring-blue-900 focus:border-blue-900 border-gray-300"
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
                    <div className="mt-1 relative">
                      <input
                        aria-label="Enter your town"
                        className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                          errors.town
                            ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                            : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                        }`}
                        id="town"
                        name="town"
                        ref={register({ required: 'Please enter your town' })}
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
                    <div className="mt-1 relative">
                      <input
                        aria-label="Enter your address"
                        className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                          errors.county
                            ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                            : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                        }`}
                        id="county"
                        name="county"
                        ref={register({
                          required: 'Please enter your county',
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
                    <div className="mt-1 relative">
                      <input
                        aria-label="Enter your post code"
                        className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                          errors.postCode
                            ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                            : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                        }`}
                        id="postCode"
                        name="postCode"
                        ref={register({
                          required: 'Please enter your message',
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
          <section className="bg-gray-50 shadow px-4 py-5 rounded-lg sm:p-6 border border-gray-300 mt-4 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mt-1">
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
                      className="block text-base font-medium text-gray-700 invisible"
                    >
                      Application
                    </label>
                    <div className="relative -mt-4">
                      <textarea
                        aria-label="Enter your message"
                        className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                          errors.application
                            ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                            : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                        }`}
                        id="application"
                        name="application"
                        ref={register({
                          required: 'Please complete your application',
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
              className="w-full md:w-auto ml-4 inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-semibold text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
              disabled={status.submitting}
            >
              {!status.submitting ? (
                'Submit Application'
              ) : (
                <div>
                  <span className="mr-1">
                    <FontAwesomeIcon icon="sync" spin />
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
