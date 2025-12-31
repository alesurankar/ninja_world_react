import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import LandingPage from "./pages/public/LandingPage";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedAdminLayout from "./layouts/ProtectedAdminLayout";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      {/* Public pages wrapped in PublicLayout */}
      <Route element={<PublicLayout user={user} setUser={setUser}/>}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      {/* Admin pages wrapped in AdminLayout */}
      <Route element={<ProtectedAdminLayout />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
