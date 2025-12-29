import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";


const ALLOW_ACCESS = true;

const ProtectedAdminLayout = () => {
  const navigate = useNavigate();

useEffect(() => {
    if (!ALLOW_ACCESS) {
      navigate("/", { replace: true });
    }
  }, [ALLOW_ACCESS, navigate]);

  if (!ALLOW_ACCESS) return null;
  return <Outlet />;
};

export default ProtectedAdminLayout;