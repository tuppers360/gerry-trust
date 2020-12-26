import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormErrorIcon from './FormErrorIcon';
import ToggleButton from './ToggleButton';

export interface IStatus {
  submitted?: boolean;
  submitting?: boolean;
  info: {
    error: boolean;
    msg: string;
  };
}

export interface IInputs {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function ContactFormTest() {
  const [status, setStatus] = useState<IStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState<IInputs>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const { register, handleSubmit, errors } = useForm();

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async ({}, e) => {
    e.preventDefault();
    console.log('errors', errors);
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/sendgrid/contactus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
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
            autoComplete="given-name"
            className={`py-3 px-4 block w-full shadow-sm rounded-md ${
              errors.firstName
                ? `pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500`
                : 'focus:ring-blue-900 focus:border-blue-900 border-gray-300'
            }`}
            id="firstName"
            name="firstName"
            onChange={handleOnChange}
            ref={register({ required: 'Please enter your name' })}
            type="text"
            value={inputs.firstName}
          />
          {errors.firstName && <FormErrorIcon />}
        </div>
      </div>
      <div>
        <label
          htmlFor="lastName"
          className="block text-base font-medium text-gray-700"
        >
          Last name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="lastName"
            id="lastName"
            autoComplete="family-name"
            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-900 focus:border-blue-900 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="company"
          className="block text-base font-medium text-gray-700"
        >
          Company
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="company"
            id="company"
            autoComplete="organization"
            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-900 focus:border-blue-900 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="email"
          className="block text-base font-medium text-gray-700"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-900 focus:border-blue-900 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="phone_number"
          className="block text-base font-medium text-gray-700"
        >
          Phone Number
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-blue-900 focus:border-blue-900 rounded-md"
            >
              <option>GB</option>
            </select>
          </div>
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            autoComplete="tel"
            className="py-3 px-4 block w-full pl-20 focus:ring-blue-900 focus:border-blue-900 border-gray-300 rounded-md"
            placeholder="+1 (555) 987-6543"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block text-base font-medium text-gray-700"
        >
          Message
        </label>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-900 focus:border-blue-900 border-gray-300 rounded-md"
          ></textarea>
        </div>
      </div>
      <div className="sm:col-span-2">
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
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-semibold text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
        >
          Let's talk
        </button>
      </div>
    </form>
  );
}
