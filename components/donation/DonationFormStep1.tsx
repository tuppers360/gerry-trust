import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GiftAid from '../GiftAid';
import { faPoundSign } from '@fortawesome/free-solid-svg-icons';
import updateDonationDetailsAction from 'lib/updateDonationDetailsAction';
import { useStateMachine } from 'little-state-machine';

const DonationFormStep1 = ({ step, setStep }) => {
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
    actions.updateDonationDetailsAction(data);
    setStep(step + 1);
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
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-4 gap-2">
          <div className="flex items-center justify-center col-span-2 px-2 py-4 text-base text-center text-gray-100 transition-colors duration-300 ease-in-out bg-blue-800 rounded shadow-sm cursor-pointer">
            One-Off Payment
          </div>
          <div className="flex items-center justify-center col-span-2 px-2 py-4 text-base text-center text-gray-800 transition-colors duration-300 ease-in-out border-2 border-blue-800 border-solid rounded shadow-sm cursor-auto">
            Monthly Donation (coming soon)
          </div>
          {buttonArray.map((button) => {
            return (
              <div
                key={button.id}
                className={`transition-colors duration-300 ease-in-out py-2 rounded text-lg font-semibold flex justify-center items-center cursor-pointer hover:bg-blue-800 hover:text-gray-100 focus:outline-none ${
                  activeButton === button.id
                    ? 'bg-blue-800 text-gray-100'
                    : 'border-2 border-solid border-blue-800 shadow-sm text-gray-700'
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
              className="block text-lg font-semibold text-center text-gray-600 sm:pt-2 sm:col-span-2 sm:text-left"
            >
              Donate what you want:
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="flex max-w-lg rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm">
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
        <div className="flex items-center justify-center">
          <button
            className="inline-flex items-center justify-center px-4 py-2 text-base font-semibold text-white uppercase bg-blue-900 border border-transparent rounded-md hover:bg-blue-800 md:py-4 md:px-24 disabled:opacity-75"
            type="submit"
            disabled={donation < 1}
          >
            Next Step
          </button>
        </div>
      </form>
    </>
  );
};

export default DonationFormStep1;
