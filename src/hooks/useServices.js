import { useEffect, useState } from 'react';

const useServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/aktarulrahul/data/main/services.json'
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return [services, isLoading];
};

export default useServices;
