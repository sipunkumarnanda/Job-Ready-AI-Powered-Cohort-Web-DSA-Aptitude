
// AuthWrapper.jsx
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthWrapper = ({ children, role = "user" }) => {
  const user = useSelector((state) => state.userReducer.users);

  if (!user && role === "auth") return <Navigate to="/login" />;
  if (user && role === "guest") return <Navigate to="/" />;
  if (role === "admin" && !user?.isAdmin) return <Navigate to="/" />;

  return children;
};

export default AuthWrapper;
