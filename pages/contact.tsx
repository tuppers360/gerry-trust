import * as yup from 'yup';

import { ExclamationCircleIcon, XCircleIcon } from '@heroicons/react/solid';
import { Path, UseFormRegister, useForm } from 'react-hook-form';
import { faEdit, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import ContactFormHeader from 'components/ContactFormHeader';
import Container from 'components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormConfirmationMessage from 'components/form/FormConfirmationMessage';
import FormErrorMessage from 'components/form/FormErrorMessage';
import FormInfoMessage from 'components/form/FormInfoMessage';
import { FormInput } from 'components/form/FormInput';
import { NextPage } from 'next';
import PageHeaderSection from '../components/PageHeaderSection';
import React from 'react';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  firstName: yup.string().required('Please enter your first name'),
  lastName: yup.string().required('Please enter your last name'),
  email: yup
    .string()
    .required('Please enter your email address')
    .email('Please enter a valid email address'),
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

export type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  error: string;
  type: string;
  placeholder: string;
  labelText: string;
};

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Contact: NextPage = () => {
  const [submittedData, setSubmittedData] = useState({});
  const [status, setStatus] = useState<IStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<IFormValues>({ resolver: yupResolver(schema) });

  const Input = FormInput(errors);

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
    data: IFormValues,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setSubmittedData(data);
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/sendgrid/contactus', {
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
    <Container title="Contact Us - The Gerry Richardson Trust">
      <PageHeaderSection
        title="Contact Us"
        heading="Get in contact and discover how we can help you"
      >
        <p>Below you will find a few ways to contact us</p>
      </PageHeaderSection>
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <section>
            <ContactFormHeader />
          </section>
          <section>
            <h2 className="text-center text-xl font-medium text-slate-600 dark:text-slate-300">
              <FontAwesomeIcon icon={faEdit} fixedWidth /> Send us a message
            </h2>
            <div className="mt-8">
              {Object.keys(errors).length > 0 && <FormErrorMessage />}
              {status.info.error && <FormInfoMessage status={status} />}
              {!status.info.error && status.info.msg && (
                <FormConfirmationMessage />
              )}
            </div>
            {!status.submitted && (
              <form
                onSubmit={handleSubmit(handleOnSubmit)}
                noValidate
                className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <Input
                    label="firstName"
                    type="text"
                    placeholder="First Name"
                    labelText="First Name"
                    register={register}
                  />
                </div>
                <div>
                  <Input
                    label="lastName"
                    type="text"
                    placeholder="Last Name"
                    labelText="Last Name"
                    register={register}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Input
                    label="email"
                    type="email"
                    placeholder="Email address"
                    labelText="Email"
                    register={register}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-base font-medium text-slate-700 dark:text-slate-300"
                  >
                    Message
                  </label>
                  <div className="relative mt-1">
                    <textarea
                      className={`block w-full rounded-md py-3 px-4 shadow-sm ${
                        errors.message
                          ? `border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500`
                          : 'border-gray-300 focus:border-blue-900 focus:ring-blue-900'
                      }`}
                      id="message"
                      name="message"
                      {...register('message')}
                      required
                      rows={4}
                    ></textarea>
                    {errors.message && (
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                      </div>
                    )}
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
                <p className="text-base text-slate-500">
                  By selecting this, you agree to the&nbsp;
                  <a href="#" className="font-medium text-slate-700 underline">
                    Privacy Policy
                  </a>
                  &nbsp;and&nbsp;
                  <a href="#" className="font-medium text-slate-700 underline">
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
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
                    disabled={status.submitting}
                  >
                    {!status.submitting ? (
                      'Lets Talk'
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
          </section>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
