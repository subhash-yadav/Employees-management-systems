import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../AuthProvider'; 

const Public = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />; 
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Public;
