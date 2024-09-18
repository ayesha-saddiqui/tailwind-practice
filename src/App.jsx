import { Router } from './router/Router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <>
      <Router />
    </>
  );
};
