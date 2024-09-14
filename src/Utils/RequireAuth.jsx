import { useLocation, Navigate, useParams } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";


const RequireAuth = ({ allowedRoles, children }) => {

  const { role, Auth } = useAuth();
  const location = useLocation();
  const { lang } = useParams();

  return allowedRoles.find((allowedRole) => allowedRole === role) && Auth ? (
    <>{children}</>
  ) : (
    <Navigate to={`/${lang}/login`} state={{ from: location }} replace />
  );
};

export default RequireAuth;