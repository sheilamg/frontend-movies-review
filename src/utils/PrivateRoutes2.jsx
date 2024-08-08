import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoutes = ({ requiredRole }) => {
  const { isAuthenticated } = useAuth();
  const data = JSON.parse(localStorage.getItem("AuthToken"));

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (data.role == "user" && requiredRole == "admin") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
