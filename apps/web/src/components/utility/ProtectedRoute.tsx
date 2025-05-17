import { Navigate, Outlet } from "react-router-dom";
import { authModule } from "src/util/authGuard";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!authModule.isAuthenticated()) {
    if (token) {
      alert("Session expired. Please log in again.");
      localStorage.removeItem("token");
    }
    return <Navigate replace to="/signin" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
