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
      <div className="mt-12 flex flex-col items-center text-center">
        <div className="dark:invert">
          <img src="/images/gift-aid-logo.png" alt="Gift Aid" />
        </div>
        <h2 className="mt-8 text-3xl font-semibold">Are you a UK tax payer?</h2>
        <p className="mt-4 text-lg font-semibold">
          Boost your donation by
          <strong className="mr-2 ml-2 text-2xl font-semibold">
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
        <label className="mt-4 flex flex-col items-center">
          <input
            type="checkbox"
            className="h-6 w-6 rounded border-2 text-blue-800 transition-colors duration-300 ease-in-out focus:ring-0 focus:ring-offset-0"
            onClick={() => handleGiftAid()}
          />
          <span className="text-md mt-4 font-semibold">
            Please claim Gift Aid on my behalf
          </span>
        </label>
      </div>

      {giftaid && (
        <div className="mt-10 rounded-lg border bg-slate-200/60 p-4 text-center leading-loose dark:bg-slate-800">
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
