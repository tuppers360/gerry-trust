import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormErrorIcon from './FormErrorIcon';
import ToggleButton from './ToggleButton'; //Commented out until Privacy and Cookies Policy written

export interface IStatus {
  submitted?: boolean;
  submitting?: boolean;
  info: {
    error: boolean;
    msg: string;
  };
}

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ContactFormTest() {
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
    const res = await fetch('/api/sendgrid/contactus', {
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
      <div className="mt-8">
        {Object.keys(errors).length > 0 && (
          <div className="rounded-md bg-red-100 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
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
                <svg
                  className="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
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
                <svg
                  className="h-5 w-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  Your message has been sent
                </h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>Please allow us a short while to respond.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {!status.submitted && (
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          noValidate
          className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 mt-8"
        >
          <div>
            <label
              htmlFor="firstName"
              className="block text-base font-medium text-gray-700"
            >
              First name
            </label>
            <div className="mt-1 relative">
              <input
                aria-describedby="Enter your First Name"
                className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                  errors.firstName
                    ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                    : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                }`}
                id="firstName"
                name="firstName"
                ref={register({ required: 'Please enter your first name' })}
                type="text"
              />
              {errors.firstName && <FormErrorIcon />}
            </div>
            {errors.firstName && (
              <p className="mt-2 text-sm text-red-600" id="firstName-error">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-base font-medium text-gray-700"
            >
              Last name
            </label>
            <div className="mt-1 relative">
              <input
                aria-describedby="Enter your Last Name"
                className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                  errors.lastName
                    ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                    : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                }`}
                id="lastName"
                name="lastName"
                ref={register({ required: 'Please enter your last name' })}
                type="text"
              />
              {errors.lastName && <FormErrorIcon />}
            </div>
            {errors.lastName && (
              <p className="mt-2 text-sm text-red-600" id="lastName-error">
                {errors.lastName.message}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-base font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1 relative">
              <input
                aria-describedby="Enter your email"
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
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-base font-medium text-gray-700"
            >
              Message
            </label>
            <div className="mt-1 relative">
              <textarea
                aria-describedby="Enter your message"
                className={`py-3 px-4 block w-full shadow-sm rounded-md ${
                  errors.message
                    ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                    : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
                }`}
                id="message"
                name="message"
                ref={register({ required: 'Please enter your message' })}
                rows={4}
              ></textarea>
              {errors.message && <FormErrorIcon />}
            </div>
            {errors.message && (
              <p className="mt-2 text-sm text-red-600" id="message-error">
                {errors.message.message}
              </p>
            )}
          </div>
          {/* //TODO: need to create the privacy and cookie policy */}
          {/* <div className="sm:col-span-2">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <ToggleButton />
              </div>
              <div className="ml-3">
                <p className="text-base text-gray-500">
                  By selecting this, you agree to the&nbsp;
                  <a href="#" className="font-medium text-gray-700 underline">
                    Privacy Policy
                  </a>
                  &nbsp;and&nbsp;
                  <a href="#" className="font-medium text-gray-700 underline">
                    Cookie Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div> */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-semibold text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
              disabled={status.submitting}
            >
              {!status.submitting ? (
                'Lets Talk'
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
