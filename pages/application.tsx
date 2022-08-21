import * as yup from 'yup';

import { faEdit, faSync } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import ApplicationFormHeader from 'components/ApplicationFormHeader';
import FieldError from 'components/form/FieldError';
import FieldErrorMessage from 'components/form/FieldErrorMessage';
import FormConfirmationMessage from 'components/form/FormConfirmationMessage';
import FormErrorMessage from 'components/form/FormErrorMessage';
import FormInfoMessage from 'components/form/FormInfoMessage';
import FormSection from 'components/FormSection';
import PageHeaderSection from 'components/PageHeaderSection';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NextPageWithLayout } from './_app';

const schema = yup.object({
  firstName: yup.string().required('Please enter your first name'),
  lastName: yup.string().required('Please enter your last name'),
  email: yup
    .string()
    .required('Please enter your email address')
    .email('Please enter a valid email address'),
  addressLine1: yup
    .string()
    .required('Please enter the first line of your address'),
  town: yup.string().required('Please enter your town'),
  county: yup.string().required('Please enter your county'),
  postCode: yup.string().required('Please enter your post code'),
  application: yup.string().required('Please enter your application')
});
export interface IStatus {
  submitted?: boolean;
  submitting?: boolean;
  info: {
    error: boolean;
    msg: string;
  };
}

//TODO - set default value of empty string??
interface FormInputs {
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
}

const ApplicationPage: NextPageWithLayout = () => {
  const [submittedData, setSubmittedData] = useState({});
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
  } = useForm<FormInputs>({ resolver: yupResolver(schema) });

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

  const handleOnSubmit = async (data: FormInputs) => {
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
      <PageHeaderSection
        title="Apply for a grant"
        heading="Lets see if we can help you?"
      >
        <p>Application Form & Guidance Notes</p>
        <p className="mt-4 text-base">
          These notes are here to help you provide all the information required
          so that Trustees can come to a decision about your application.
        </p>
        <p className="mt-4 text-base">
          Please read these notes before progressing to the application and also
          ensure that you have explored and considered ALL sections of our
          website.
        </p>
      </PageHeaderSection>
      <div className="mx-auto max-w-xl px-4 sm:px-6 md:max-w-6xl lg:px-8">
        <section className="rounded-lg bg-slate-100 px-4 py-5 leading-6 shadow dark:bg-slate-700 dark:bg-slate-700/40 dark:ring-1 dark:ring-white/20 sm:p-6">
          <ApplicationFormHeader />
        </section>
        <section>
          <div className="mt-4 mb-4">
            {Object.keys(errors).length > 0 && <FormErrorMessage />}
            {status.info.error && <FormInfoMessage status={status} />}
            {!status.info.error && status.info.msg && (
              <FormConfirmationMessage
                title="Your application has been submitted"
                response="As per our terms we will consider your application and let you know the decision once made."
              />
            )}
          </div>

          {!status.submitted && (
            <form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
              <div className="rounded-lg bg-slate-100 px-4 py-5 leading-6 shadow dark:bg-slate-700 dark:bg-slate-700/40 dark:ring-1 dark:ring-white/20 sm:p-6">
                <FormSection title="Personal Details">
                  <div className="mt-5 md:col-span-2 md:mt-0">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label className="mt-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
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
                          {errors.firstName && (
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                              <ExclamationCircleIcon className="h-5 w-5 text-red-600 dark:text-red-500" />
                            </div>
                          )}
                        </div>
                        {errors.firstName && (
                          <p
                            className="mt-2 text-sm text-red-600 dark:text-red-500"
                            id="email-error"
                          >
                            <span>{errors.firstName.message}</span>
                          </p>
                        )}
                      </div>
                      <div className="col-span-6 sm:col-span-3">
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
                          <FieldErrorMessage
                            message={errors.lastName.message}
                          />
                        )}
                      </div>
                      <div className="col-span-6 sm:col-span-4">
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
                </FormSection>
                <FormSection
                  title="Address Information"
                  info="Use a permanent address where you can receive mail."
                >
                  <div className="mt-5 md:col-span-2 md:mt-0">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6">
                        <label className="mt-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
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
                          <FieldErrorMessage
                            message={errors.addressLine1.message}
                          />
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
                          <FieldErrorMessage
                            message={errors.addressLine2.message}
                          />
                        )}
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
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
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
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
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
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
                          <FieldErrorMessage
                            message={errors.postCode.message}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </FormSection>
                <FormSection
                  title="Application"
                  info="Please provide us with as much information about your
                      application as possible. How will this funding make a
                      difference? Who will benefit?"
                >
                  <div className="mt-5 md:col-span-2 md:mt-0">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6">
                        <label
                          htmlFor="application"
                          className="invisible block text-base font-medium text-slate-700"
                        >
                          Application
                        </label>
                        <div className="relative -mt-4">
                          <textarea
                            className={`block w-full rounded-md py-3 px-4 shadow-sm ${
                              errors.application
                                ? `border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500`
                                : 'border-gray-300 focus:border-blue-900 focus:ring-blue-900'
                            }`}
                            id="application"
                            name="application"
                            {...register('application')}
                            rows={10}
                          ></textarea>
                          {errors.application && (
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                            </div>
                          )}
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
                </FormSection>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-900 px-16 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 md:w-auto"
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
          <h3 className="mt-8 text-center text-2xl font-bold tracking-tight text-slate-700 dark:text-slate-300">
            <FontAwesomeIcon icon={faEdit} fixedWidth /> Other Ways to apply
          </h3>
          <p className="mt-8 text-lg">
            Whilst we would prefer you to complete our online form, you can also
            write to us using the address below.
          </p>
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
        </section>
      </div>
    </>
  );
};

export default ApplicationPage;

export async function getStaticProps() {
  return {
    props: {
      title: 'Make an Application - The Gerry Richardson Trust',
      description: 'Apply for a grant from The Gerry Richardson Trust'
    }
  };
}
