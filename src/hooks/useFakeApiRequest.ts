import {useState} from 'react';

export const useFakeApiRequest = (timer = 2000) => {
  const [isLoading, setIsLoading] = useState(false);

  const request = () => {
    setIsLoading(true);
    return new Promise(resolve => {
      setTimeout(() => {
        setIsLoading(false);
        resolve('success');
      }, timer);
    });
  };
  return {
    isLoading,
    request,
  };
};
