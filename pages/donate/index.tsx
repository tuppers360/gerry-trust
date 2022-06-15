import Container from 'components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GiftAid from 'components/GiftAid';
import { NextPage } from 'next';
import PageHeaderSection from 'components/PageHeaderSection';
import { faPoundSign } from '@fortawesome/free-solid-svg-icons';
import updateDonationDetailsAction from 'lib/updateDonationDetailsAction';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useStateMachine } from 'little-state-machine';

const DonatePage: NextPage = () => {
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

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { amount: donation, giftAid };
    actions.updateDonationDetailsAction(data);
    router.push('/donate/billing-info');
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
    <Container title="Make a Donation - The Gerry Richardson Trust">
      <PageHeaderSection title="Donate" heading="Make a Donation">
        <p>
          Donate to help us to help the local youths of Blackpool, Fylde and
          Wyre 💖
        </p>
      </PageHeaderSection>
      <div className="max-w-4xl px-4 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-4 gap-2">
            <div className="flex items-center justify-center col-span-2 px-2 py-4 text-lg font-medium text-center text-slate-300 transition-colors duration-300 ease-in-out bg-blue-800 rounded shadow-sm cursor-pointer">
              One-Off Payment
            </div>
            <div className="flex items-center justify-center col-span-2 px-2 py-4 font-medium text-lg text-center text-slate-800 transition-colors duration-300 ease-in-out border-2 border-blue-800 border-solid rounded shadow-sm cursor-auto dark:bg-slate-100 dark:text-slate-700">
              Monthly Donation (coming soon)
            </div>
            {buttonArray.map((button) => {
              return (
                <div
                  key={button.id}
                  className={`transition-colors duration-300 ease-in-out py-2 rounded text-lg font-semibold flex justify-center items-center cursor-pointer hover:bg-blue-800 hover:text-slate-100 focus:outline-none ${
                    activeButton === button.id
                      ? 'bg-blue-800 text-slate-100'
                      : 'border-2 border-solid border-blue-800 dark:text-slate-700 dark:bg-slate-100 dark:hover:text-slate-300 dark:hover:bg-blue-800 shadow-sm'
                  }`}
                  onClick={() => toggle(button.id, button.value)}
                >
                  {button.text}
                </div>
              );
            })}
          </div>
          {showCustomDonation && (
            <div className="max-w-xl mx-auto mt-4 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start">
              <label
                htmlFor="donation"
                className="block text-lg font-semibold text-center text-slate-600 dark:text-slate-300 sm:pt-2 sm:col-span-2 sm:text-left"
              >
                Donate what you want:
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="flex max-w-lg rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 text-slate-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm">
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
                    className="flex-1 block w-full min-w-0 text-center border-gray-300 rounded-none focus:ring-indigo-500 focus:border-blue-800 rounded-r-md sm:text-sm"
                    value={donation}
                  />
                </div>
              </div>
            </div>
          )}
          <GiftAid
            handleGiftAid={handleGiftAid}
            donation={donation}
            giftaid={giftAid}
          />
          <div className="flex items-center justify-center py-4 mt-8">
            <button
              className="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-slate-100 uppercase bg-blue-900 border border-transparent rounded-md hover:bg-blue-800 md:py-4 md:px-24 disabled:opacity-75"
              type="submit"
              disabled={donation < 1}
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default DonatePage;
