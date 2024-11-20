import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "src/util/authGuard";

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
