import React, { useState } from 'react';

import getStripe from '../utils/get-stripejs';
import { fetchPostJSON } from '../utils/api-helpers';
import { formatAmountForDisplay } from '../utils/stripe-helpers';
import * as config from '../config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DonationForm = () => {
  const [donation, setDonation] = useState(0);
  const [showCustomDonation, setShowCustomDonation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [giftAid, setGiftAid] = useState(false);
  const [input, setInput] = useState({
    customDonation: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
  });
  const [activeButton, setActiveButton] = useState(0);
  const [activeButtonAmountType, setActiveButtonAmountType] = useState(1);
  const buttonArray = [
    { id: 1, text: '5' },
    { id: 2, text: '10' },
    { id: 3, text: '20' },
    { id: 4, text: 'Other' },
  ];

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <ul
            className="btn-group-donation-type"
            aria-label="Donation Button Group Type"
          >
            <li key="1">
              <span
                className={`btn btn_depth btn${
                  activeButtonAmountType === 1 ? '_warning' : '_primary'
                }`}
              >
                One Off Payment
              </span>
            </li>
            <li key="2">
              <span className="btn btn_depth btn_primary disabled">
                Regular Payment (coming Soon)
              </span>
            </li>
          </ul>
        </div>
        <div>
          <ul
            className="btn-group-donate-buttons"
            aria-label="Donation Button Group Amount"
          >
            {buttonArray.map((button) => {
              return (
                <li key={button.id}>
                  <span
                    className={`btn btn_depth btn${
                      activeButton === button.id ? '_warning' : '_primary'
                    }`}
                    onClick={() => toggle(button.id, button.text)}
                  >
                    {button.id != 4 ? (
                      <div>
                        {formatAmountForDisplay(
                          parseFloat(button.text),
                          config.CURRENCY
                        )}
                      </div>
                    ) : (
                      <div>{button.text}</div>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        {showCustomDonation && (
          <div className="form_item customdonation-amount">
            <label htmlFor="customdonationamount">Donate what you want:</label>
            <input
              id="customdonationamount"
              pattern="[0-9]*"
              name="donation"
              type="number"
              aria-describedby="Custom Donation Amount"
              placeholder="Enter Donation"
              min="1"
              onChange={(e) => setDonation(parseFloat(e.currentTarget.value))}
              className="form_input text_center"
            />
          </div>
        )}
        <div className="giftaid">
          <img src="/images/gift-aid-logo.png" alt="Gift Aid" />
          <h2>Are you a UK tax payer?</h2>
          <p>
            Gift Aid is reclaimed by the charity from the tax you pay for the
            current year. Your address is needed to identify you as a current UK
            taxpayer.
          </p>
          <p>
            Boost your donation by&nbsp;
            <strong>
              25%&nbsp;
              {donation > 0 && (
                <span>
                  (
                  {new Intl.NumberFormat('en-GB', {
                    style: 'currency',
                    currency: 'GBP',
                  }).format(donation * 0.25)}
                  )&nbsp;
                </span>
              )}
            </strong>
            at no extra cost to you.
          </p>
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
        <button
          className={`btn btn_primary full-width donate ${
            donation >= 0.3 ? '' : 'disabled'
          }`}
          type="submit"
          disabled={loading}
        >
          {loading && (
            <span className="icon_margin_right">
              <FontAwesomeIcon icon="sync" spin />
            </span>
          )}
          &nbsp;Donate&nbsp;
          {donation >= config.MIN_AMOUNT && (
            <span className="currency-icon">
              {formatAmountForDisplay(donation, config.CURRENCY)}
            </span>
          )}
        </button>
      </form>
    </>
  );
};

export default DonationForm;
