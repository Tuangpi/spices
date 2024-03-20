import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const AuthRedirect = () => {
  const { isLogin } = useAuth();

  if (isLogin) {
    return <Navigate to="/admin/dashboard" />;
  } else {
    return <Outlet />;
  }
};
export default AuthRedirect;
