import { useContext } from "react";
import { AuthContext } from "../hooks/provide/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <p>loading</p>;
  }

  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};
export default PrivateRoutes;
