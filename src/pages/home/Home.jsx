import { Hero } from '../../components/Hero';
import { Services } from '../../components/Services';
import { About } from '../../components/About';
import Team from '../../components/Team';
import Contact from '../../components/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
    </>
  );
};