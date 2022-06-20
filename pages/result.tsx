import * as config from 'config';

import Container from 'components/Container';
import { NextPage } from 'next';
import PageHeaderSection from 'components/PageHeaderSection';
import clearDonationDetailsAction from 'lib/clearDonationDetailsAction';
import { fetchGetJSON } from 'utils/api-helpers';
import { formatAmountForDisplayForStripe } from 'utils/stripe-helpers';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useStateMachine } from 'little-state-machine';

const ResultPage: NextPage = () => {
  const router = useRouter();
  const { actions } = useStateMachine({ clearDonationDetailsAction });
  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id ? `/api/stripe/${router.query.session_id}` : null,
    fetchGetJSON
  );

  useEffect(() => {
    actions.clearDonationDetailsAction();
  }, []);

  if (error) return <div>failed to load</div>;

  return (
    <Container title="Donation Made - The Gerry Richardson Trust">
      <PageHeaderSection
        title="Congratulations"
        heading="Your Donation has been authorised"
      >
        {data && (
          <h2 className="mx-auto text-2xl leading-relaxed lg:max-w-3xl lg:px-8">
            You have donated&nbsp;
            {formatAmountForDisplayForStripe(
              data.amount_subtotal,
              config.CURRENCY
            )}
            &nbsp;to help the local youths of Blackpool, Fylde and Wyre 💖
          </h2>
        )}
      </PageHeaderSection>
      <div className="mx-auto mt-8 max-w-xl px-4 sm:px-6 lg:max-w-4xl lg:px-8">
        <h2 className="text-xl font-medium leading-relaxed">
          Thank you for your generous gift to the Gerry Richardson Trust.
        </h2>
        <p className="mt-4 text-lg">We are thrilled to have your support.</p>
        <p className="mt-4 text-lg">
          Through your donation we will be able to accomplish our goal of
          supporting young people, aged 25 or under, to attend courses and
          activities of an educational, cultural, sporting, adventuresome or
          character-building nature.
        </p>
        <p className="mt-4 text-lg">
          You truly make the difference for us, and we are extremely grateful!
        </p>
        <p className="mt-4 text-lg">Yours</p>
        <h3 className="mt-4 text-lg font-semibold">The Trustees</h3>
      </div>
    </Container>
  );
};

export default ResultPage;
