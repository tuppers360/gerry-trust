import { faEdit, faSync } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { zodResolver } from '@hookform/resolvers/zod';
import ContactFormHeader from 'components/ContactFormHeader';
import FieldError from 'components/form/FieldError';
import FieldErrorMessage from 'components/form/FieldErrorMessage';
import FormConfirmationMessage from 'components/form/FormConfirmationMessage';
import FormErrorMessage from 'components/form/FormErrorMessage';
import FormInfoMessage from 'components/form/FormInfoMessage';
import { NextPageWithLayout } from 'pages/_app';
import { z } from 'zod';
import PageHeaderSection from '../components/PageHeaderSection';

const formSchema = z.object({
  firstName: z.string().min(1, 'Please enter your first name'),
  lastName: z.string().min(1, 'Please enter your last name'),
  email: z
    .string()
    .min(1, 'Please enter your email address')
    .email('Please enter a valid email address'),
  message: z.string().min(1, 'Please enter your message')
});

type FormSchemaType = z.infer<typeof formSchema>;
export interface IStatus {
  submitted?: boolean;
  submitting?: boolean;
  info: {
    error: boolean;
    msg: string;
  };
}

const ContactPage: NextPageWithLayout = () => {
  const [submittedData, setSubmittedData] = useState({});
  const [status, setStatus] = useState<IStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: '' }
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<FormSchemaType>({ resolver: zodResolver(formSchema) });

  const handleResponse = (status: any, msg: any) => {
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

  const handleOnSubmit = async (data: FormSchemaType) => {
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
    <>
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
                <FormConfirmationMessage
                  title="Your message has been sent"
                  response="Please allow us a short while to respond"
                />
              )}
            </div>
            {!status.submitted && (
              <form
                onSubmit={handleSubmit(handleOnSubmit)}
                noValidate
                className="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
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
                <div>
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

                <div className="sm:col-span-2">
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
                      {...register('message')}
                      required
                      rows={4}
                    ></textarea>
                    {errors.message && <FieldError />}
                  </div>
                  {errors.message && (
                    <FieldErrorMessage message={errors.message.message} />
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
    </>
  );
};

export default ContactPage;

export async function getStaticProps() {
  return {
    props: {
      title: 'Contact Us - The Gerry Richardson Trust',
      description: 'How to get in touch with The Gerry Richardson Trust'
    }
  };
}
