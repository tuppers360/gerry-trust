import { NextPage } from 'next';
import Layout from '../components/layout';
import LandingSection from './../components/LandingSection';
import HeroSection from './../components/HeroSection';
import DonationCards from '../components/DonationCards';

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Gerry Richardson Trust">
      <LandingSection />
      <HeroSection />
      <DonationCards />
    </Layout>
  );
};

export default IndexPage;
