import React from 'react';
import Banner from '../../components/Banner/Banner';
import ServiceContainer from '../../components/ServiceContainer/ServiceContainer';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Banner />
      <ServiceContainer />
      <Testimonials />
    </div>
  );
};

export default Home;
