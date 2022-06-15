type Donation = {
  donation: number;
  giftaid: boolean;
  handleGiftAid: () => void;
};

export default function GiftAid({
  donation,
  giftaid,
  handleGiftAid
}: Donation) {
  return (
    <section>
      <div className="mt-12 flex items-center flex-col text-center">
        <div className="dark:invert">
          <img src="/images/gift-aid-logo.png" alt="Gift Aid" />
        </div>
        <h2 className="mt-8 text-3xl font-semibold">Are you a UK tax payer?</h2>
        <p className="mt-4 text-lg font-semibold">
          Boost your donation by
          <strong className="font-semibold text-2xl mr-2 ml-2">
            25%
            {donation > 0 && (
              <span>
                (
                {new Intl.NumberFormat('en-GB', {
                  style: 'currency',
                  currency: 'GBP'
                }).format(donation * 0.25)}
                )
              </span>
            )}
          </strong>
          at no extra cost to you.
        </p>
        <p className="mt-4">
          Gift Aid is reclaimed by the charity from the tax you pay for the
          current year. Your address is needed to identify you as a current UK
          taxpayer.
        </p>
        <label className="flex flex-col items-center mt-4">
          <input
            type="checkbox"
            className="h-6 w-6 rounded transition-colors duration-300 ease-in-out text-blue-800 border-2 focus:ring-0 focus:ring-offset-0"
            onClick={() => handleGiftAid()}
          />
          <span className="mt-4 text-md font-semibold">
            Please claim Gift Aid on my behalf
          </span>
        </label>
      </div>

      {giftaid && (
        <div className="mt-10 text-center leading-loose border p-4 rounded-lg bg-slate-200/60 dark:bg-slate-800">
          <p>
            I confirm that this is my own money and I would like The Gerry
            Richardson Trust to treat all the donations I have made in the past
            4 years (if any) and any future donations I make, unless I notify
            you otherwise, as Gift Aid donations.
          </p>
          <p className="mt-2">
            I also confirm that I am a UK taxpayer and understand that if I pay
            less Income Tax and/or Capital Gains Tax in the current tax year
            than the amount of Gift Aid claimed on all my donations it is my
            responsibility to pay any difference.
          </p>
        </div>
      )}
    </section>
  );
}
