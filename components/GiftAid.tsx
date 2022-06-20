import Link from 'next/link';

type Donation = {
  donation: number;
  giftAid: boolean;
  handleGiftAid: () => void;
};

export default function GiftAid({
  donation,
  giftAid,
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
        <div className="relative mt-6 flex w-full items-center rounded-lg bg-slate-200/60 p-6 text-left dark:bg-slate-800">
          <div className="flex h-5 items-center">
            <input
              id="giftaid"
              aria-describedby="giftaid-statement"
              name="giftaid"
              type="checkbox"
              className="h-6 w-6 rounded border-2 text-blue-800 transition-colors duration-300 ease-in-out focus:ring-0 focus:ring-offset-0"
              onClick={() => handleGiftAid()}
            />
          </div>
          <div className="ml-4 text-sm">
            <label htmlFor="giftaid-statement" className="text-base font-bold">
              Yes, I am a UK taxpayer and would like to Gift Aid my donations to
              the Gerry Richardson Trust, past, present and future.
            </label>
          </div>
        </div>
      </div>

      {giftAid && (
        <div className="mt-10 space-y-5 rounded-lg bg-slate-200/60 p-4 leading-loose dark:bg-slate-800">
          <p>
            I confirm that this is my own money and I would like The Gerry
            Richardson Trust to treat all the donations I have made in the past
            4 years (if any) and any future donations I make, unless I notify
            you otherwise, as Gift Aid donations.
          </p>
          <p>
            I am a UK taxpayer and understand that if I pay less Income Tax
            and/or Capital Gains Tax than the amount of Gift Aid claimed on all
            my donations in that tax year it is my responsibility to pay any
            difference
          </p>
          <div>
            Please notify the charity if you:
            <ul className="list-inside list-disc">
              <li>want to cancel this declaration</li>
              <li>change your name or home address</li>
              <li>
                no longer pay sufficient tax on your income and/or capital gains
              </li>
            </ul>
          </div>
          <p>
            If you pay Income Tax at the higher or additional rate and want to
            receive the additional tax relief due to you, you must include all
            your Gift Aid donations on your Self-Assessment tax return or ask HM
            Revenue and Customs to adjust your tax code. For more information
            about Gift Aid please take a look at the
            <Link href="https://www.gov.uk/government/organisations/hm-revenue-customs">
              <a className="ml-1 font-semibold text-sky-700 no-underline hover:text-sky-500 hover:underline dark:text-sky-300 dark:hover:text-sky-500">
                HMRC website
              </a>
            </Link>
            .
          </p>
        </div>
      )}
    </section>
  );
}
