import { Navigate } from "react-router-dom";

const AuthLogin = () => {
  const jwt_token = true;

  return <>{jwt_token ? <Navigate to="/home" /> : "login"}</>;
};
export default AuthLogin;
