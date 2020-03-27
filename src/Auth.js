import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('token_app')) {
      setAuthenticated(true);
    }
  }, []);

  return authenticated;
};