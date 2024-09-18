import { Route, Routes } from 'react-router-dom';

import { Layout } from '../layouts/Layout';

// Pages
import { Home } from '../pages/home/Home';
import { ServicesPage } from '../pages/Services';
import { AboutPage } from '../pages/AboutPage';
import { TeamPage } from '../pages/TeamPage';
import { ContactPage } from '../pages/ContactPage';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='services' element={<ServicesPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='team' element={<TeamPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Route>
    </Routes>
  );
};
