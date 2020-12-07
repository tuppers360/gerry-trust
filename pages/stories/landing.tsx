import TailwindNav from './../../components/tailwindnav/index';
import DonationCards from '../../components/DonationCards';
import HeroSection from './../../components/HeroSection';
import LandingSection from './../../components/LandingSection';

export default function landing() {
  return (
    <>
      <TailwindNav />
      <LandingSection />
      <HeroSection />
      <DonationCards />
    </>
  );
}
