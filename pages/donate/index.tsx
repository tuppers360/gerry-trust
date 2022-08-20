import { faPoundSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GiftAid from 'components/GiftAid';
import PageHeaderSection from 'components/PageHeaderSection';
import updateDonationDetailsAction from 'lib/updateDonationDetailsAction';
import { useStateMachine } from 'little-state-machine';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'pages/_app';
import { useState } from 'react';

const DonatePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { actions } = useStateMachine({ updateDonationDetailsAction });
  const [activeButton, setActiveButton] = useState(1);
  const [showCustomDonation, setShowCustomDonation] = useState(false);
  const [donation, setDonation] = useState(5);
  const [giftAid, setGiftAid] = useState(false);

  const buttonArray = [
    { id: 1, value: 5, text: '£5' },
    { id: 2, value: 10, text: '£10' },
    { id: 3, value: 20, text: '£20' },
    { id: 4, value: 0, text: 'Other' }
  ];

  const onSubmit = () => {
    const data = { amount: donation, giftAid };
    actions.updateDonationDetailsAction({ ...data });
    router.push('/donate/message');
  };

  const toggle = (id: number, donation: number) => {
    if (id != 4) {
      setShowCustomDonation(false);
      setActiveButton(id);
      setDonation(donation);
    } else {
      setShowCustomDonation(true);
      setDonation(0);
      setActiveButton(id);
    }
  };

  const handleGiftAid = () => {
    setGiftAid(!giftAid);
  };

  return (
    <>
      <PageHeaderSection title="Donate" heading="Your Donation">
        <p>
          Donate to help us to help the local youths of Blackpool, Fylde and
          Wyre 💖
        </p>
      </PageHeaderSection>
      <div className="mx-auto max-w-4xl px-4">
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 pt-6">
          <div className="col-span-2 flex cursor-pointer items-center justify-center rounded bg-blue-800 px-2 py-4 text-center text-lg font-medium text-slate-300 shadow-sm transition-colors duration-300 ease-in-out">
            One-Off Payment
          </div>
          <div className="col-span-2 flex cursor-auto items-center justify-center rounded border-2 border-solid border-blue-800 px-2 py-4 text-center text-lg font-medium text-slate-800 shadow-sm transition-colors duration-300 ease-in-out dark:bg-slate-100 dark:text-slate-700">
            Monthly Donation (coming soon)
          </div>
          {buttonArray.map((button) => {
            return (
              <div
                key={button.id}
                className={`flex cursor-pointer items-center justify-center rounded py-2 text-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-blue-800 hover:text-slate-100 focus:outline-none ${
                  activeButton === button.id
                    ? 'bg-blue-800 text-slate-100'
                    : 'border-2 border-solid border-blue-800 shadow-sm dark:bg-slate-100 dark:text-slate-700 dark:hover:bg-blue-800 dark:hover:text-slate-300'
                }`}
                onClick={() => toggle(button.id, button.value)}
              >
                {button.text}
              </div>
            );
          })}
        </div>
        {showCustomDonation && (
          <div className="mx-auto mt-4 max-w-xl sm:grid sm:grid-cols-4 sm:items-start sm:gap-4">
            <label
              htmlFor="donation"
              className="block text-center text-lg font-semibold text-slate-600 dark:text-slate-300 sm:col-span-2 sm:pt-2 sm:text-left"
            >
              Donate what you want:
            </label>
            <div className="mt-1 sm:col-span-2 sm:mt-0">
              <div className="flex max-w-lg rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-slate-500 sm:text-sm">
                  <FontAwesomeIcon icon={faPoundSign} />
                </span>
                <input
                  id="customdonationamount"
                  pattern="[0-9]*"
                  name="donation"
                  type="number"
                  placeholder="Enter Donation"
                  min="1"
                  onChange={(e) =>
                    setDonation(parseFloat(e.currentTarget.value))
                  }
                  className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 text-center focus:border-blue-800 focus:ring-indigo-500 sm:text-sm"
                  value={donation}
                />
              </div>
            </div>
          </div>
        )}
        <GiftAid
          handleGiftAid={handleGiftAid}
          donation={donation}
          giftAid={giftAid}
        />
        <div className="mt-8 flex items-center justify-center py-4">
          <button
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-900 px-4 py-2 text-base font-semibold uppercase text-slate-100 hover:bg-blue-800 disabled:opacity-75 md:py-4 md:px-24"
            type="button"
            onClick={onSubmit}
            disabled={donation < 1}
          >
            Next Step
          </button>
        </div>
      </div>
    </>
  );
};

export default DonatePage;

export async function getStaticProps() {
  return {
    props: {
      title: 'Make a Donation - The Gerry Richardson Trust',
      description: 'Choose how much to donate to the trust'
    }
  };
}
