import React, { useContext } from 'react';
import { ServicesContext } from '../../contexts/ServicesProvider';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceContainer = () => {
  const services = useContext(ServicesContext);
  const handleDetails = (serviceID) => {
    console.log('details click', serviceID);
  };
  return (
    <div className="my-3 mx-4">
      <h2 className="text-center text-4xl text-blue-600 font-bold leading-loose tracking-widest">
        OUR ALL SERVICES
      </h2>
      <div className="md:grid md:grid-cols-2  lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard
            key={service.key}
            service={service}
            handleDetails={() => handleDetails(service.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceContainer;
