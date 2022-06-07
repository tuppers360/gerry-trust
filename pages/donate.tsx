import { StateMachineProvider, createStore } from 'little-state-machine';

import Container from 'components/Container';
import DonationFormStep1 from 'components/donation/DonationFormStep1';
import DonationFormStep2 from 'components/donation/DonationFormStep2';
import { NextPage } from 'next';
import PageHeaderSection from 'components/PageHeaderSection';
import { useState } from 'react';

// createStore({})
createStore({
  donationDetails: {
    firstName: '',
    lastName: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    town: '',
    county: '',
    postCode: '',
    amount: 0,
    giftAid: false
  }
});

const DonatePage: NextPage = () => {
  const [step, setStep] = useState(1);
  return (
    <Container title="Make a Donation - The Gerry Richardson Trust">
      <PageHeaderSection title="Donate" heading="Make a Donation" center>
        <p>
          Donate to help us to help the local youths of Blackpool, Fylde and
          Wyre 💖
        </p>
      </PageHeaderSection>
      <StateMachineProvider>
        <div className="max-w-4xl px-4 mx-auto">
          {step == 1 && <DonationFormStep1 step={step} setStep={setStep} />}
          {step == 2 && <DonationFormStep2 step={step} setStep={setStep} />}
        </div>
      </StateMachineProvider>
    </Container>
  );
};

export default DonatePage;
