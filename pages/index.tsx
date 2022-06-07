import AnniversarySection from 'components/Anniversary';
import Container from 'components/Container';
import DonationCards from 'components/DonationCards';
import HeroSection from 'components/HeroSection';
import LandingSection from 'components/LandingSection';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <Container>
      <AnniversarySection />
      <LandingSection />
      <HeroSection />
      <DonationCards />
      {/* Hello */}
    </Container>
  );
};

export default IndexPage;
