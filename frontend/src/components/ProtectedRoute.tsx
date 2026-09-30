import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/authContext";

export const ProtectedRoute = () => {
  const {isAuthenticated, isLoading} = useAuth();

  if (isLoading) {
    return <div>Loading your account...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />

};