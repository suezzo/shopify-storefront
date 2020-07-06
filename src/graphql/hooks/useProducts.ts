import { useEffect, useState } from 'react';

const useProducts = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    console.log('mounted');
  }, []);

  return loading;
};

export { useProducts };
