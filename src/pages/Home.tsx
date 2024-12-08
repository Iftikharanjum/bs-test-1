import HeroBanner from '../components/HeroBanner';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroBanner />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </div>
  );
}