import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { ServicesContext } from '../../contexts/ServicesProvider';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceContainer = ({ featured }) => {
  const services = useContext(ServicesContext);
  const featuredServices = services.filter((service) => service.featured);
  const displayServices = featured ? featuredServices : services;
  const history = useHistory();
  const handleDetails = (serviceID) => {
    history.push(`/services/${serviceID}`);
  };
  return (
    <div className="my-3 mx-4">
      <h2 className="text-center text-4xl text-blue-600 font-bold leading-loose tracking-widest">
        OUR ALL SERVICES
      </h2>
      <div className="md:grid md:grid-cols-2  lg:grid-cols-3 gap-4">
        {displayServices.map((service) => (
          <ServiceCard
            key={service.key}
            service={service}
            btn="Book"
            handleDetails={() => handleDetails(service.key)}
          />
        ))}
      </div>
      {featured ? (
        <Link to="/services">
          <div className="text-center my-10">
            <span className="text-white bg-blue-500 px-4 py-2 rounded-full text-center ">
              See Our All Services
            </span>
          </div>
        </Link>
      ) : (
        ''
      )}
    </div>
  );
};

export default ServiceContainer;
