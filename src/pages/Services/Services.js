import React from 'react';
import Banner from '../../components/Banner/Banner';
import ServiceContainer from '../../components/ServiceContainer/ServiceContainer';
import img from '../../images/dh-6.png';

const Services = () => {
  return (
    <div>
      <Banner
        sub="Dedicated to excellence. Dedicated to your smile."
        title="Make your Smile Shine"
        img={img}
        link="/contact"
        btn="Make an Appointment"
        additionalStyle="md:pt-16 lg:h-screen pr-10"
      />
      <ServiceContainer featured={false} />
    </div>
  );
};

export default Services;
