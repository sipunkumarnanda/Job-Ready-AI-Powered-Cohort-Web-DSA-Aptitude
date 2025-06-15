
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthWrapper = ({ children, role = "user" }) => {
  const { users: user, loading } = useSelector((state) => state.userReducer);

  // Wait for user state to finish loading
  if (loading) return null; // or a spinner

  if (!user && role === "auth") return <Navigate to="/login" />;
  if (user && role === "guest") return <Navigate to="/" />;
  if (role === "admin" && !user?.isAdmin) return <Navigate to="/" />;

  return children;
};

export default AuthWrapper;
