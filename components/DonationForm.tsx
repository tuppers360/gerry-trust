import React, { useState } from 'react';

import getStripe from '../utils/get-stripejs';
import { fetchPostJSON } from '../utils/api-helpers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GiftAid from './GiftAid';

const DonationForm = () => {
  const [donation, setDonation] = useState(0);
  const [showCustomDonation, setShowCustomDonation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [giftAid, setGiftAid] = useState(false);
  const [activeButton, setActiveButton] = useState(0);

  const buttonArray = [
    { id: 1, value: 5, text: '£5' },
    { id: 2, value: 10, text: '£10' },
    { id: 3, value: 20, text: '£20' },
    { id: 4, value: 0, text: 'Other' },
  ];

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Create a Checkout Session.
    const response = await fetchPostJSON('/api/stripe/checkout_sessions', {
      amount: donation,
      giftAid: giftAid,
    });

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: response.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
    setLoading(false);
  };

  const toggle = (id: number, donation: any) => {
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
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 gap-x-1 gap-y-2">
          <div className="bg-blue-800 text-gray-100 shadow-sm py-4 px-2 rounded text-base text-center flex justify-center items-center cursor-pointer col-span-2">
            One-Off Payment
          </div>
          <div className="border-2 border-solid border-blue-800 shadow-sm text-gray-800 py-4 px-2 rounded text-base text-center flex items-center justify-center col-span-2 cursor-auto">
            Monthly Donation (coming soon)
          </div>
          {buttonArray.map((button) => {
            return (
              <div
                key={button.id}
                className={`transition-colors duration-300 easr-in-out py-2 rounded text-lg font-semibold flex justify-center items-center cursor-pointer hover:bg-blue-800 hover:text-gray-100 focus:outline-none ${
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
          <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start max-w-xl mx-auto mt-4">
            <label
              htmlFor="donation"
              className="block text-lg font-semibold text-center text-gray-600 sm:pt-2 sm:col-span-2 sm:text-left"
            >
              Donate what you want:
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  <FontAwesomeIcon icon="pound-sign" />
                </span>
                <input
                  id="customdonationamount"
                  pattern="[0-9]*"
                  name="donation"
                  type="number"
                  aria-describedby="Custom Donation Amount"
                  placeholder="Enter Donation"
                  min="1"
                  onChange={(e) =>
                    setDonation(parseFloat(e.currentTarget.value))
                  }
                  className="flex-1 block w-full focus:ring-indigo-500 focus:border-blue-800 min-w-0 rounded-none rounded-r-md text-center sm:text-sm border-gray-300"
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
            className={`inline-flex items-center mt-5 justify-center px-8 py-3 mb-1 border border-transparent text-base font-semibold rounded-md text-white bg-blue-900 hover:bg-blue-800 md:py-4 md:px-24  ${
              donation >= 1 ? '' : 'disabled'
            }`}
            type="submit"
            disabled={loading || donation === 0}
          >
            {loading && (
              <span className="mr-2">
                <FontAwesomeIcon icon="sync" spin />
              </span>
            )}
            Proceed to payment
          </button>
        </div>
      </form>
    </>
  );
};

export default DonationForm;
