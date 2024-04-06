import React from 'react';
import Hero from '../Components/Hero/Hero';
import HomeServices from '../Components/HomeServices/HomeServices';
import PageTitle from '../Components/PageTitle/PageTitle';


const Home = () => {
  return (
    <div>
      <PageTitle title='Bracket - خانه' />
      <Hero />
      <HomeServices />
    </div>
  )
}

export default Home;
