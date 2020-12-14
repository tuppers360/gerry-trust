import Navbar from './../../components/Navbar';
import LandingSection from './../../components/LandingSection';
import HeroSection from './../../components/HeroSection';
import DonationCards from '../../components/DonationCards';
import Footer from '../../components/Footer';

export default function landing() {
  return (
    <>
      <Navbar />
      <LandingSection />
      <HeroSection />
      <DonationCards />
      <Footer />
    </>
  );
}
