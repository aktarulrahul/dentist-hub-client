import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { ServicesContext } from '../../contexts/ServicesProvider';

const ServiceDetails = () => {
  const history = useHistory();
  const services = useContext(ServicesContext);
  const { serviceId } = useParams();
  const displayDetails = services.find((service) => service.key === serviceId);
  const handleDetails = () => {
    history.push('/confirm');
  };
  return (
    <div className="md:w-2/3 lg:w-1/2  mx-auto text-center">
      <ServiceCard
        service={displayDetails}
        btn="Confirm"
        handleDetails={handleDetails}
      />
    </div>
  );
};

export default ServiceDetails;
