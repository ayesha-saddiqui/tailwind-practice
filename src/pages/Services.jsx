import { HeroSection } from '../components/HeroSection';
import { Services } from '../components/Services';

export const ServicesPage = () => {
  return (
    <div>
      <HeroSection subHeading='service page sub title' heading='Our Services' />
      <Services />
    </div>
  );
};
