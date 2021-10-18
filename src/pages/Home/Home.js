import React from 'react';
import Banner from '../../components/Banner/Banner';
import ServiceContainer from '../../components/ServiceContainer/ServiceContainer';
import Testimonials from '../../components/Testimonials/Testimonials';
import banner from '../../images/dh-4.png';

const Home = () => {
  return (
    <div>
      <Banner
        sub="Dedicated to excellence. Dedicated to your smile."
        title="Make your Smile Shine"
        img={banner}
        link="/contact"
        btn="Make an Appointment"
      />
      <ServiceContainer />
      <Testimonials />
    </div>
  );
};

export default Home;
