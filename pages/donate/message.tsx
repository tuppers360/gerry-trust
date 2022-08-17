import { SubmitHandler, useForm } from 'react-hook-form';

import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPageWithLayout } from 'pages/_app';
import PageHeaderSection from 'components/PageHeaderSection';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import updateDonationDetailsAction from 'lib/updateDonationDetailsAction';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useStateMachine } from 'little-state-machine';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const FormSchema = z.object({
  message: z
    .string()
    //.regex(new RegExp('^[A-Za-z0-9_-]*$'), 'No Special Characters Allowed')
    .max(250)
});

type FormSchemaType = z.infer<typeof FormSchema>;

const MessagePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { actions } = useStateMachine({ updateDonationDetailsAction });
  const [count, setCount] = useState(0);
  const [charLimit] = useState(250);

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    actions.updateDonationDetailsAction({ ...data });
    router.push('/donate/billing-info');
  };

  function handleClick(e) {
    e.preventDefault();
    router.push('/donate');
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema)
  });

  return (
    <>
      <PageHeaderSection title="Donate" heading="Your Message">
        <p>
          Donate to help us to help the local youths of Blackpool, Fylde and
          Wyre 💖
        </p>
      </PageHeaderSection>
      <div className="mx-auto max-w-4xl px-4">
        <form onSubmit={handleSubmit(onSubmit)}>
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
              id="message"
              name="message"
              {...register('message')}
              rows={5}
              onChange={(e) => setCount(e.target.value.length)}
              maxLength={charLimit}
            ></textarea>

            {errors.message && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ExclamationCircleIcon className="h-5 w-5 text-red-600 dark:text-red-500" />
              </div>
            )}
          </div>
          <div className="flex justify-between">
            {errors.message && (
              <div className="mt-2 text-sm text-red-600" id="message-error">
                {errors.message.message}
              </div>
            )}
            <div className="mt-2 pr-1 text-sm">
              {count}/{charLimit}
            </div>
          </div>

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
              disabled={isSubmitting}
            >
              {isSubmitting && (
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
