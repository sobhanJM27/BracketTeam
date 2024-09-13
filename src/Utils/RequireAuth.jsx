import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";


const RequireAuth = ({ allowedRoles, children }) => {
  const { role, Auth } = useAuth();
  const location = useLocation();

  return allowedRoles.find((allowedRole) => allowedRole === role) && Auth ? (
    <>{children}</>
  ) : (
    <Navigate to="login" state={{ from: location }} replace />
  );
};

export default RequireAuth;