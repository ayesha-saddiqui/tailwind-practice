import { About } from '../components/About';
import { HeroSection } from '../components/HeroSection';

export const AboutPage = () => {
  return (
    <div>
      <HeroSection subHeading='About page sub title' heading='About Us' />
      <About />
    </div>
  );
};
