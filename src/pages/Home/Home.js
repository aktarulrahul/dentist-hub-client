import React from 'react';
import Banner from '../../components/Banner/Banner';
import Faq from '../../components/Faq/Faq';
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
        link="/services"
        btn="Make an Appointment"
        additionalStyle="pt-16 lg:h-screen md:h-full"
      />
      <ServiceContainer featured={true} />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;
