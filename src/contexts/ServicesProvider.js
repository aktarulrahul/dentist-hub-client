import React, { createContext } from 'react';
import useServices from '../hooks/useServices';

export const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
  const [services, isLoading] = useServices();
  if (isLoading) {
    return (
      <p className="bg-rose-600 text-center text-8xl text-white rounded p-2">
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>{' '}
        Processing...
      </p>
    );
  }
  return (
    <ServicesContext.Provider value={[...services]}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
