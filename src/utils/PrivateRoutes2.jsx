
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoutes = ({ children, requiredRole }) => {
  const { isAuthenticated } = useAuth();


  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  const user = JSON.parse(isAuthenticated);

  if ( user.role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoutes;