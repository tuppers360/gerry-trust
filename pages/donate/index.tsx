import Container from 'components/Container';
import DonationFormStep1 from 'components/donation/DonationFormStep1';
import DonationFormStep2 from 'components/donation/DonationFormStep2';
import { NextPage } from 'next';
import PageHeaderSection from 'components/PageHeaderSection';
import { useState } from 'react';

const DonatePage: NextPage = () => {
  const [step, setStep] = useState(0);

  return (
    <Container title="Make a Donation - The Gerry Richardson Trust">
      <PageHeaderSection title="Donate" heading="Make a Donation">
        <p>
          Donate to help us to help the local youths of Blackpool, Fylde and
          Wyre 💖
        </p>
      </PageHeaderSection>
      <div className="max-w-4xl px-4 mx-auto">
        {step === 0 && <DonationFormStep1 step={step} setStep={setStep} />}
        {step === 1 && <DonationFormStep2 step={step} setStep={setStep} />}
      </div>
    </Container>
  );
};

export default DonatePage;
