import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import LandingPage from "./pages/public/LandingPage";
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedAdminLayout from "./layouts/ProtectedAdminLayout";

const App = () => {
  return (
    <Routes>
      {/* Public pages wrapped in PublicLayout */}
      <Route element={<PublicLayout />}>
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
