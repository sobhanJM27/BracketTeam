import React from 'react';
import Hero from '../../Components/Hero/Hero';
import HomeServices from '../../Components/HomeServices/HomeServices';
import { Helmet } from 'react-helmet';
import { withTranslation } from 'react-i18next';

const Home = ({ t }) => {
  return (
    <div>
      <Helmet>
        <title>Bracket - {t('navbar.home')}</title>
      </Helmet>
      <Hero />
      <HomeServices />
    </div>
  )
}

export default withTranslation()(Home);
