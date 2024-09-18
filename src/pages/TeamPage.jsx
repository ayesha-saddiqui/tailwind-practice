import { HeroSection } from '../components/HeroSection';
import Team from '../components/Team';

export const TeamPage = () => {
  return (
    <div>
      <HeroSection subHeading='Team page sub title' heading='Our Team' />
      <Team />
    </div>
  );
};
