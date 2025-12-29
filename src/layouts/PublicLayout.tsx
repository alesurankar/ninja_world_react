import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="main">
      <Outlet />
    </div>
  );
};

export default PublicLayout;
