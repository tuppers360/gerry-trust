import { NextPage } from 'next';
import Layout from '../components/Layout';
import LandingSection from './../components/LandingSection';
import HeroSection from './../components/HeroSection';
import DonationCards from '../components/DonationCards';

const IndexPage: NextPage = () => {
  return (
    <Layout title="The Gerry Richardson Trust" url="gerryrichardsontrust.org/">
      <LandingSection />
      <HeroSection />
      <DonationCards />
    </Layout>
  );
};

export default IndexPage;
