import { Outlet } from "react-router-dom";

interface PublicLayoutProps {
  user: any;
  setUser: (user: any) => void;
}

const PublicLayout = ({ user,setUser }: PublicLayoutProps) => {
  return (
    <div className="main">
      <Outlet context={{ user,setUser }}/>
    </div>
  );
};

export default PublicLayout;
