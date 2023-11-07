import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import useUser from "../features/authuntication/useUser";
import Spinner from "./Spinner";

const ProtectRoutes = ({ children }) => {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate("/login");
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) return <Spinner />;
  if (isAuthenticated) return children;
};

export default ProtectRoutes;
