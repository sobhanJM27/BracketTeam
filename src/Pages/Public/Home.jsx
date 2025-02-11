import React from 'react';
import Hero from '../../Components/Hero/Hero';
import HomeServices from '../../Components/HomeServices/HomeServices';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { withTranslation } from 'react-i18next';

const Home = ({ t }) => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Bracket - {t('navbar.home')}</title>
        </Helmet>
      </HelmetProvider>
      <Hero />
      <HomeServices />
    </div>
  );
};

export default withTranslation()(Home);
