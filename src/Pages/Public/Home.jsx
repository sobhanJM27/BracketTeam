import React from 'react';
import Hero from '../../Components/Hero/Hero';
import HomeServices from '../../Components/HomeServices/HomeServices';
import { Helmet } from 'react-helmet';


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>خانه</title>
      </Helmet>
      <Hero />
      <HomeServices />
    </div>
  )
}

export default Home;
