import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return isAuthenticated && children;
}

export default ProtectedRoute;
