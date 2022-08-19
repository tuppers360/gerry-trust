import { SubmitHandler, useForm } from 'react-hook-form';

import { faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import FormErrorMessage from 'components/form/FormErrorMessage';
import PageHeaderSection from 'components/PageHeaderSection';
import updateDonationDetailsAction from 'lib/updateDonationDetailsAction';
import { useStateMachine } from 'little-state-machine';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'pages/_app';
import { useState } from 'react';
import { z } from 'zod';

const formSchema = z.object({
  message: z.string().min(1).max(1000)
});

type FormSchemaType = z.infer<typeof formSchema>;

const MessagePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { state, actions } = useStateMachine({ updateDonationDetailsAction });
  const charLimit = 250;
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormSchemaType> = async (
    data: FormSchemaType
  ) => {
    setLoading(true);
    actions.updateDonationDetailsAction({ ...data });
    router.push('/donate/billing-info');
  };

  function handleClick(e) {
    e.preventDefault();
    router.push('/donate');
  }

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<FormSchemaType>({
    defaultValues: state.donationDetails,
    resolver: zodResolver(formSchema)
  });

  const watchMessage = watch('message');

  return (
    <>
      <PageHeaderSection title="Donate" heading="Your Message">
        <p>
          Donate to help us to help the local youths of Blackpool, Fylde and
          Wyre 💖
        </p>
      </PageHeaderSection>
      <div className="mx-auto max-w-4xl px-4">
        {Object.keys(errors).length > 0 && <FormErrorMessage />}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
              <div className="border-t border-gray-200"></div>
            </div>
          </div>
          <div className="pt-6">
            <p>
              Have a message you want share with us? Want to tell us a little
              bit more about you and your donation? Let us know in the box
              below! Whether you are donating in memory of a loved one, paying
              in funds raised at your fantastic fundraising event, or just
              wanted to make a special donation to the GRT, we would love to
              hear more about your gift.
            </p>
          </div>

          <div className="relative pt-6">
            <textarea
              className={`block w-full rounded-md py-3 px-4 shadow-sm ${
                errors.message
                  ? `border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500`
                  : 'border-gray-300 focus:border-blue-900 focus:ring-blue-900'
              }`}
              id="application"
              name="application"
              {...register('message')}
              maxLength={charLimit}
              rows={5}
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

          <div className="mt-2 pr-1 text-right text-sm">
            {watchMessage.length}/{charLimit}
          </div>
          {errors.message && (
            <div className="-mt-5 text-sm text-red-600" id="message-error">
              {errors.message.message}
            </div>
          )}

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
      </div>
    </>
  );
};

export default MessagePage;

export async function getStaticProps() {
  return {
    props: {
      title: 'Make a Donation - The Gerry Richardson Trust',
      description: 'Choose how much to donate to the trust'
    }
  };
}
