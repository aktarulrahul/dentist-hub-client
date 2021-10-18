import React, { createContext } from 'react';
import useServices from '../hooks/useServices';

export const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
  const [services] = useServices();
  return (
    <ServicesContext.Provider value={[...services]}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
