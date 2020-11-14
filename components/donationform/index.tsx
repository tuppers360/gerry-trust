import React, { useState } from 'react';

import CustomDonationInput from '../customdonationinput';
import StripeTestCards from '../stripetestcards';

import getStripe from '../../utils/get-stripejs';
import { fetchPostJSON } from '../../utils/api-helpers';
import { formatAmountForDisplay } from '../../utils/stripe-helpers';
import * as config from '../../config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DonationForm = () => {
  const [donation, setDonation] = useState(0);
  const [loading, setLoading] = useState(false);
  const [giftAid, setGiftAid] = useState(false);
  const [input, setInput] = useState({
    customDonation: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
  });

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Create a Checkout Session.
    const response = await fetchPostJSON('/api/stripe/checkout_sessions', {
      amount: input.customDonation,
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

  return (
    <>
      <div className="btn-container">
        <div className="btn item one">Flex Item 1</div>
        <div className="btn item one">Flex Item 2</div>
        <div className="btn item one">Flex Item 3</div>
        <div className="btn item one">Flex Item 4</div>
      </div>
      <form onSubmit={handleSubmit}>
        <CustomDonationInput
          className="checkout-style"
          name={'customDonation'}
          value={input.customDonation}
          min={config.MIN_AMOUNT}
          max={config.MAX_AMOUNT}
          step={config.AMOUNT_STEP}
          currency={config.CURRENCY}
          onChange={handleInputChange}
        />

        <div className="giftaid">
          <img src="/images/gift-aid-logo.png" alt="Gift Aid" />
          <h2>Are you a UK tax payer?</h2>
          <small>
            Gift Aid is reclaimed by the charity from the tax you pay for the
            current year. Your address is needed to identify you as a current UK
            taxpayer.
          </small>
          <h3>
            Boost your donation by&nbsp;
            <strong>
              25%&nbsp;
              {donation > 0 && (
                <strong>
                  (
                  {new Intl.NumberFormat('en-GB', {
                    style: 'currency',
                    currency: 'GBP',
                  }).format(donation * 0.25)}
                  )&nbsp;
                </strong>
              )}
            </strong>
            at no extra cost to you.
          </h3>
          <FontAwesomeIcon
            id="giftAid"
            icon={giftAid ? ['far', 'check-square'] : ['far', 'square']}
            onClick={() => setGiftAid(!giftAid)}
            className="checkbox-container"
          />
          <span>Please claim Gift Aid on my behalf</span>
        </div>

        {giftAid && (
          <div className="declaration">
            <p>
              <small>
                I confirm that this is my own money and I would like The Gerry
                Richardson Trust to treat all the donations I have made in the
                past 4 years (if any) and any future donations I make, unless I
                notify you otherwise, as Gift Aid donations.
              </small>
            </p>
            <p>
              <small>
                I also confirm that I am a UK taxpayer and understand that if I
                pay less Income Tax and/or Capital Gains Tax in the current tax
                year than the amount of Gift Aid claimed on all my donations it
                is my responsibility to pay any difference.
              </small>
            </p>
          </div>
        )}
        <StripeTestCards />
        <button
          className="checkout-style-background"
          type="submit"
          disabled={loading}
        >
          Donate {formatAmountForDisplay(input.customDonation, config.CURRENCY)}
        </button>
      </form>
    </>
  );
};

export default DonationForm;
