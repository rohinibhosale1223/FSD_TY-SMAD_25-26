import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PublicOnlyRoute = ({ children }: { children: React.ReactElement }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/board" replace />;
  }

  return children;
};

export default PublicOnlyRoute;