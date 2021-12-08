import Container from 'components/Container';
import DonationForm from 'components/DonationForm';
import { NextPage } from 'next';
import PageHeaderSection from 'components/PageHeaderSection';

const DonatePage: NextPage = () => {
  return (
    <Container title="Make a Donation - The Gerry Richardson Trust">
      <PageHeaderSection title="Donate" heading="Make a Donation" center>
        <p>
          Donate to help us to help the local youths of Blackpool, Fylde and
          Wyre 💖
        </p>
      </PageHeaderSection>
      <div className="max-w-xl px-4 mx-auto">
        <DonationForm />
      </div>
    </Container>
  );
};

export default DonatePage;
