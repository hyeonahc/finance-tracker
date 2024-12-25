import { isAuthenticated } from "@util/authGuard";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!isAuthenticated()) {
    if (token) {
      alert("Session expired. Please log in again.");
      localStorage.removeItem("token");
    }
    return <Navigate replace to="/signin" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
