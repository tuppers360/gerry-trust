import Container from 'components/Container';
import DonationForm from 'components/DonationForm';
import { Elements } from '@stripe/react-stripe-js';
import { NextPage } from 'next';
import PageHeaderSection from 'components/PageHeaderSection';
import { loadStripe } from '@stripe/stripe-js';

const DonatePage: NextPage = () => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  return (
    <Container title="Make a Donation - The Gerry Richardson Trust">
      <PageHeaderSection heading="Make a Donation" center>
        <p>
          Donate to help us to help the local youths of Blackpool, Fylde and
          Wyre 💖
        </p>
      </PageHeaderSection>
      <div className="max-w-xl mx-auto m-16 px-4">
        {stripePromise && (
          <Elements stripe={stripePromise}>
            <DonationForm />
          </Elements>
        )}
      </div>
    </Container>
  );
};

export default DonatePage;
