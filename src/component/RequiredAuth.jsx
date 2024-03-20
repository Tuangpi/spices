import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const RequiredAuth = () => {
  const { isLogin } = useAuth();

  if (isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to="/admin/login" />;
  }
};
export default RequiredAuth;
