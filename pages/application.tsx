import * as yup from 'yup';

import React, { useState } from 'react';
import { faEdit, faSync } from '@fortawesome/free-solid-svg-icons';

import ApplicationFormHeader from 'components/ApplicationFormHeader';
import Container from 'components/Container';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormConfirmationMessage from 'components/form/FormConfirmationMessage';
import FormErrorMessage from 'components/form/FormErrorMessage';
import FormInfoMessage from 'components/form/FormInfoMessage';
import { FormInput } from 'components/form/FormInput';
import { NextPage } from 'next';
import PageHeaderSection from 'components/PageHeaderSection';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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

const ApplicationPage: NextPage = () => {
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
    <Container
      title="Make an Applcation - The Gerry Richardson Trust"
      description="Apply for a grant from The Gerry Richardson Trust"
    >
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
      <div className="max-w-xl px-4 mx-auto sm:px-6 md:max-w-6xl lg:px-8">
        <section>
          <ApplicationFormHeader />
        </section>
        <section>
          <div className="mt-4 mb-4">
            {Object.keys(errors).length > 0 && <FormErrorMessage />}
            {status.info.error && <FormInfoMessage status={status} />}
            {!status.info.error && status.info.msg && (
              <FormConfirmationMessage />
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
                        <Input
                          label="firstName"
                          type="text"
                          placeholder="First Name"
                          labelText="First Name"
                          register={register}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <Input
                          label="lastName"
                          type="text"
                          placeholder="Last Name"
                          labelText="Last Name"
                          register={register}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-4">
                        <Input
                          label="email"
                          type="email"
                          placeholder="Email address"
                          labelText="Email"
                          register={register}
                        />
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
                        <Input
                          label="addressLine1"
                          type="text"
                          placeholder=""
                          labelText="Address"
                          register={register}
                        />
                      </div>
                      <div className="col-span-6 -mt-4">
                        <Input
                          label="addressLine2"
                          type="text"
                          placeholder=""
                          labelText=""
                          register={register}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <Input
                          label="town"
                          type="text"
                          placeholder=""
                          labelText="Town"
                          register={register}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <Input
                          label="county"
                          type="text"
                          placeholder=""
                          labelText="County"
                          register={register}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <Input
                          label="postCode"
                          type="text"
                          placeholder=""
                          labelText="Post Code"
                          register={register}
                        />
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
                            {...register('application')}
                            rows={10}
                          ></textarea>
                          {errors.application && (
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
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
                </div>
              </section>
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
          <h3 className="mt-8 text-2xl font-bold tracking-tight text-center text-gray-700">
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
    </Container>
  );
};

export default ApplicationPage;
