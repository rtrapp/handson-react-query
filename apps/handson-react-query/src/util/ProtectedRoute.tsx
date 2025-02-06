import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';



interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  
    const { user } = useAppContext();

  if (!user) {

    return <Navigate to="/login" replace />;
  
}

  return children;
};

export default ProtectedRoute;
