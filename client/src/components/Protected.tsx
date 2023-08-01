import axios from 'axios';
import { useUser } from '../../hooks/zustand/useUser';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function Protected({ children }: { children: React.ReactNode }) {
  const store = useUser();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get('/api/v1/user/my-info');
      const user = response?.data || null;
      store.setUser(user);
    } catch (error) {
      store.setUser(null);
    }
  }

  if (store.user === undefined) {
    // Data is being fetched, you can show a loading state here if needed
    return <></>;
  } else if (!store.user) {
    // User is not logged in, redirect to landing
    return <Navigate to="/landing" />;
  }
  
  // User is logged in, render children
  return <>{children}</>;
}
